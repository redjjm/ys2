import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* 콘텐츠 */}
      <div className="container-custom relative z-10 text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="heading-primary text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          프리미엄 라이프스타일을 향한 새로운 시작
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          도심 속 휴식 공간, 럭셔리한 디자인과 최상의 편의시설을 갖춘 프리미엄 아파트 리모델링 프로젝트
        </p>
        <button className="btn-primary text-lg">
          지금 상담하기
        </button>
      </div>
      
      {/* 스크롤 다운 표시 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 