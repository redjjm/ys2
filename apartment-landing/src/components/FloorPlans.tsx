import React, { useState, useRef, useEffect } from 'react';

const FloorPlans: React.FC = () => {
  // 평면도 데이터
  const plans = [
    {
      id: 1,
      type: '24평형 A',
      size: '59㎡',
      image: require('../image/size/size-24.jpg'),
      description: '실속적인 LDK와 고품격 파우더룸을 가진 맞춤형 공간'
    },
    {
      id: 2,
      type: '30평형 A',
      size: '74㎡',
      image: require('../image/size/size-30.jpg'),
      description: '수납공간을 극대화한 생활 맞춤형 공간'
    },
    {
      id: 3,
      type: '34평형 A',
      size: '84㎡',
      image: require('../image/size/size-34.jpg'),
      description: '안방 전용 서재와 순환형 동선의 프리미엄 공간'
    },
    {
      id: 4,
      type: '39평형',
      size: '99㎡',
      image: require('../image/size/size-39.jpg'),
      description: ' 품격과 여유로움이 있는 최고의 주거가치'
    }
  ];

  // 선택된 평면도 관리
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  // 이미지 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 줌 상태 관리
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
    // 모달이 열릴 때 줌 상태 초기화
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 핀치 줌 이벤트 핸들러
  useEffect(() => {
    const imageContainer = imageRef.current;
    if (!imageContainer || !isModalOpen) return;

    // 휠 이벤트로 줌인/줌아웃 처리
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newScale = Math.min(Math.max(scale + delta, 1), 5); // 최소 1, 최대 5배 줌
      setScale(newScale);
    };

    // 마우스 드래그로 이미지 이동 처리
    const handleMouseDown = (e: MouseEvent) => {
      if (scale > 1) {
        isDragging.current = true;
        lastPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;
        lastPosition.current = { x: e.clientX, y: e.clientY };
        setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // 터치 이벤트 처리
    let initialDistance = 0;
    let initialScale = 1;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // 두 손가락으로 터치할 때 거리 계산
        initialDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialScale = scale;
      } else if (e.touches.length === 1 && scale > 1) {
        // 한 손가락으로 터치해서 이동할 때
        isDragging.current = true;
        lastPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 2) {
        // 핀치 줌 처리
        const currentDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const delta = currentDistance / initialDistance;
        const newScale = Math.min(Math.max(initialScale * delta, 1), 5); // 최소 1, 최대 5배 줌
        setScale(newScale);
      } else if (e.touches.length === 1 && isDragging.current) {
        // 드래그 이동 처리
        const dx = e.touches[0].clientX - lastPosition.current.x;
        const dy = e.touches[0].clientY - lastPosition.current.y;
        lastPosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    // 이벤트 리스너 등록
    imageContainer.addEventListener('wheel', handleWheel, { passive: false });
    imageContainer.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    imageContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    imageContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    imageContainer.addEventListener('touchend', handleTouchEnd);

    // 클린업 함수
    return () => {
      imageContainer.removeEventListener('wheel', handleWheel);
      imageContainer.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      imageContainer.removeEventListener('touchstart', handleTouchStart);
      imageContainer.removeEventListener('touchmove', handleTouchMove);
      imageContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isModalOpen, scale]);

  // 더블 클릭으로 줌 리셋
  const handleDoubleClick = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section id="floor-plans" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary mb-8">평면도 예상</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 평면도 네비게이션 */}
          <div className="lg:col-span-1">
            <div className="bg-beige-light p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">타입 선택</h3>
              <div className="space-y-2">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full p-3 text-left rounded-md transition-colors duration-200 ${
                      selectedPlan.id === plan.id 
                        ? 'bg-gold-DEFAULT text-white' 
                        : 'bg-white hover:bg-gold-light'
                    }`}
                  >
                    <div className="font-semibold">{plan.type} 타입</div>
                    <div className="text-sm">{plan.size}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 선택된 평면도 상세 */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img 
                  src={selectedPlan.image} 
                  alt={`${selectedPlan.type} 타입 평면도`} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gold-DEFAULT">{selectedPlan.type} 타입</h3>
                <p className="text-gray-600 mb-2">전용 면적: {selectedPlan.size}</p>
                <p className="text-gray-700">{selectedPlan.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="btn-primary" onClick={openModal}>
                    상세 정보 확인
                  </button>
                  {/* <button className="text-gold-DEFAULT hover:text-gold-dark">
                    도면 다운로드 &darr;
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 이미지 확대 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-lg p-2" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 bg-gold-DEFAULT text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gold-dark z-10"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gold-DEFAULT mb-4">{selectedPlan.type} 타입 상세 평면도</h3>
              <div 
                ref={imageRef}
                className="overflow-hidden relative touch-none"
                style={{ maxHeight: '70vh' }}
                onDoubleClick={handleDoubleClick}
              >
                <div 
                  style={{ 
                    transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                    transformOrigin: 'center',
                    transition: isDragging.current ? 'none' : 'transform 0.1s'
                  }}
                >
                  <img 
                    src={selectedPlan.image} 
                    alt={`${selectedPlan.type} 타입 평면도`} 
                    className="w-full object-contain"
                    draggable="false"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 font-semibold">전용 면적: {selectedPlan.size}</p>
                <p className="text-gray-700 mt-2">{selectedPlan.description}</p>
                <div className="flex justify-between mt-6">
                  <div className="text-sm text-gray-500">
                    <span>•&nbsp;핀치로 확대/축소, 드래그로 이동 가능</span>
                    <br />
                    <span>•&nbsp;더블클릭으로 원래 크기로 복원</span>
                  </div>
                  <button
                    className="px-6 py-2 bg-[#03C75A] text-white font-bold rounded-md hover:bg-[#02A64B] transition-colors duration-200 text-lg shadow-md"
                    onClick={closeModal}
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans; 