import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../image/perspective/pers-1.jpg'),
    require('../image/perspective/pers-2.jpg'),
    require('../image/perspective/pers-3.jpg'),
    require('../image/perspective/pers-4.jpg'),
    require('../image/perspective/pers-5.jpg'),
    require('../image/perspective/pers-6.jpg'),
    require('../image/perspective/pers-7.jpg')
  ];
  const cafeIcon = require('../image/button/naver-cafe-icon.png');
  const kakaochatIcon = require('../image/button/kakaotalk-icon.png');
  
  const handleCafeClick = () => {
    window.open('https://cafe.naver.com/ys2moa', '_blank');
  };

  const handleChatClick = () => {
    window.open('https://open.kakao.com/o/gBCOJPof', '_blank');
  };
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 이미지 컨테이너 */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt={`Perspective ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
      </div>
      
      {/* 콘텐츠 */}
      <div className="absolute top-10 left-0 right-0 z-10 text-white text-center">
        <h1 className="heading-primary text-4xl md:text-6xl tracking-tight whitespace-nowrap transform scale-x-90 origin-center" style={{ fontFamily: "'Do Hyeon', sans-serif", textShadow: '0 0 8px #fff, 0 0 8px #fff, 0 0 4px #fff' }}>
          역삼 2동, 더 나은 삶으로
        </h1>
      </div>
      
      {/* 스크롤 다운 화살표 */}
      <div className="absolute bottom-10 left-10 z-10 animate-bounce cursor-pointer" onClick={handleScrollDown}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* 이동버튼 */}
      <div className="absolute bottom-10 portrait:left-1/2 portrait:transform portrait:-translate-x-1/2 landscape:right-10 z-10 flex flex-row gap-4">
        <button 
          onClick={handleCafeClick}
          className="btn-primary-cafe text-lg flex items-center justify-center whitespace-nowrap px-6"
        >
          <img src={cafeIcon} alt="공식 카페 아이콘" className="w-6 h-6 mr-2" />
          <span>카페 입장</span>
        </button>
        <button 
          onClick={handleChatClick}
          className="btn-primary-chat text-lg flex items-center justify-center whitespace-nowrap px-6"
        >
          <img src={kakaochatIcon} alt="오픈 채팅 아이콘" className="w-6 h-6 mr-2" />
          <span>채팅 입장</span>
        </button>
      </div>
    </section>
  );
};

export default Hero; 