import React, { useState } from 'react';
// 이미지 파일 import
import size24 from '../image/size/size-24.jpg';
import size30 from '../image/size/size-30.jpg';
import size34 from '../image/size/size-34.jpg';
import size39 from '../image/size/size-39.jpg';

const FloorPlans: React.FC = () => {
  // 평면도 데이터
  const plans = [
    {
      id: 1,
      type: '24평형 / 실사용 32평',
      size: '59㎡',
      image: size24,
      description: '실속적인 LDK와 고품격 파우더룸을 가진 맞춤형 공간'
    },
    {
      id: 2,
      type: '30평형 / 실사용 41평',
      size: '74㎡',
      image: size30,
      description: '수납공간을 극대화한 생활 맞춤형 공간'
    },
    {
      id: 3,
      type: '34평형 / 실사용 44평',
      size: '84㎡',
      image: size34,
      description: '안방 전용 서재와 순환형 동선의 프리미엄 공간'
    },
    {
      id: 4,
      type: '39평형 /실사용 51평',
      size: '99㎡',
      image: size39,
      description: ' 품격과 여유로움이 있는 최고의 주거가치'
    }
  ];

  // 선택된 평면도 관리
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

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
                        ? 'bg-gold-DEFAULT text-white font-bold shadow-md border-2 border-gold-dark' 
                        : 'bg-white hover:bg-gold-light border border-gray-200'
                    }`}
                  >
                    <div className={`font-semibold ${'text-gray-800'}`}>{plan.type} 타입</div>
                    <div className={`text-sm ${'text-gray-600'}`}>{plan.size}</div>
                    {/* <div className={`text-sm ${selectedPlan.id === plan.id ? 'text-white' : 'text-gray-600'}`}>{plan.size}</div> */}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 선택된 평면도 상세 */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img  src={selectedPlan.image}  alt={`${selectedPlan.type} 타입 평면도`}  className="w-auto h-auto object-contain p-2 max-h-[500px]"/>
              </div>
              <div className="p-6">
                {/* <h3 className="text-2xl font-bold text-gold-DEFAULT">{selectedPlan.type} 타입</h3>
                <p className="text-gray-600 mb-2">전용 면적: {selectedPlan.size}</p> */}
                {/* <p className="text-gray-700">{selectedPlan.description}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans; 