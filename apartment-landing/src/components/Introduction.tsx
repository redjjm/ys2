import React from 'react';

const Introduction: React.FC = () => {
  const keyFacts = [
    { number: '25,000㎡', label: '총 부지면적' },
    { number: '5개', label: '건물 동수' },
    { number: '350세대', label: '총 세대수' },
    { number: '2025년', label: '준공 예정' }
  ];

  return (
    <section id="introduction" className="section bg-beige-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary mb-6">프로젝트 소개</h2>
          
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            이 프로젝트는 오래된 아파트 단지를 현대적이고 럭셔리한 주거 공간으로 탈바꿈시키는 대규모 재개발 프로젝트입니다. 
            최신 건축 기술과 환경 친화적 설계를 적용하여 거주민들에게 최상의 주거 환경을 제공합니다. 
            도심 속 쾌적한 주거공간과 함께 다양한 커뮤니티 시설과 편의시설이 조화롭게 어우러진 신개념 주거 문화를 경험하실 수 있습니다.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {keyFacts.map((fact, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-gold-DEFAULT mb-2">{fact.number}</div>
                <div className="text-gray-600">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 