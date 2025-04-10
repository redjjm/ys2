import React, { useState } from 'react';

const FloorPlans: React.FC = () => {
  // 평면도 데이터
  const plans = [
    {
      id: 1,
      type: '59A',
      size: '59.98㎡',
      image: 'https://via.placeholder.com/800x600?text=59A+Type',
      description: '효율적인 공간 배치로 실용성을 극대화한 2베드룸 평면'
    },
    {
      id: 2,
      type: '74B',
      size: '74.56㎡',
      image: 'https://via.placeholder.com/800x600?text=74B+Type',
      description: '가족 친화적인 설계로 편안한 생활을 위한 3베드룸 평면'
    },
    {
      id: 3,
      type: '84C',
      size: '84.12㎡',
      image: 'https://via.placeholder.com/800x600?text=84C+Type',
      description: '넓은 거실과 주방이 특징인 실용적인 3베드룸 평면'
    },
    {
      id: 4,
      type: '110P',
      size: '110.73㎡',
      image: 'https://via.placeholder.com/800x600?text=110P+Type',
      description: '프리미엄 4베드룸 평면으로 넓은 공간과 드레스룸 제공'
    }
  ];

  // 선택된 평면도 관리
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <section id="floor-plans" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary mb-8">평면도</h2>
        
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
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gold-DEFAULT">{selectedPlan.type} 타입</h3>
                <p className="text-gray-600 mb-2">전용 면적: {selectedPlan.size}</p>
                <p className="text-gray-700">{selectedPlan.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="btn-primary">
                    상세 정보 확인
                  </button>
                  <button className="text-gold-DEFAULT hover:text-gold-dark">
                    도면 다운로드 &darr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans; 