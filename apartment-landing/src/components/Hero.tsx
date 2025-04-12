import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  // 로컬 스토리지에서 음악 설정을 불러오거나 기본값으로 true 설정
  const getSavedMusicState = (): boolean => {
    const savedState = localStorage.getItem('isMusicPlaying');
    return savedState !== null ? savedState === 'true' : true;
  };
  
  // 애니메이션 스타일 정의
  const fadeInStyle = {
    animation: 'fadeIn 1s forwards',
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const [nextImageIndex, setNextImageIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(getSavedMusicState);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
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

  // 사용자 상호작용을 감지하는 함수
  const handleUserInteraction = () => {
    setUserInteracted(true);
    // 사용자가 상호작용했고, 음악이 켜져 있어야 하는 상태라면 재생
    if (isMusicPlaying && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('상호작용 후에도 재생 실패: ', error);
      });
    }
  };

  // 사용자 상호작용 이벤트 리스너 등록
  useEffect(() => {
    const interactionEvents = ['click', 'touchstart', 'keydown', 'scroll'];
    const handleInteraction = () => {
      handleUserInteraction();
      // 이벤트 리스너 제거 (한 번만 실행)
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };

    // 이벤트 리스너 등록
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  // 배경음 재생/정지 제어
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('토글 클릭 시 재생 실패: ', error);
        });
      }
      const newState = !isMusicPlaying;
      setIsMusicPlaying(newState);
      setUserInteracted(true);
      // 로컬 스토리지에 상태 저장
      localStorage.setItem('isMusicPlaying', newState.toString());
    }
  };

  // 페이지 로드 시 배경음 자동 재생 설정
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 볼륨 설정
      
      if (isMusicPlaying && userInteracted) {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log('자동 재생이 실패했습니다: ', error);
          });
        }
      } else if (!isMusicPlaying) {
        // 음악이 꺼져 있는 상태라면 확실히 정지
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying, userInteracted]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 이미지 인덱스 설정
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      // 트랜지션 시작
      setIsTransitioning(true);
      
      // 트랜지션 완료 후 현재 이미지 업데이트
      const transitionTimeout = setTimeout(() => {
        setCurrentImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // 페이드 효과 시간과, 위 timeout 시간이 일치해야 함
      
      return () => clearTimeout(transitionTimeout);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length, nextImageIndex]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경음 */}
      <audio ref={audioRef} loop>
        <source src={require("../sound/bg-1.mp3")} type="audio/mp3" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
      
      {/* 스타일 정의 */}
      <style>{fadeInKeyframes}</style>
      
      {/* 음악 제어 버튼 */}
      {/* <div className="absolute top-5 right-5 z-20 cursor-pointer" onClick={toggleMusic}>
        {isMusicPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white bg-black bg-opacity-40 rounded-full p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V5l12-2v12" />
            <ellipse cx="6" cy="17" rx="3" ry="4" strokeWidth={1.5} />
            <ellipse cx="18" cy="15" rx="3" ry="4" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 13c1-0.5 2-0.5 3 0" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 11c1-0.5 2-0.5 3 0" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white bg-black bg-opacity-40 rounded-full p-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V5l12-2v12" />
            <ellipse cx="6" cy="17" rx="3" ry="4" strokeWidth={1.5} />
            <ellipse cx="18" cy="15" rx="3" ry="4" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 13c1-0.5 2-0.5 3 0" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 11c1-0.5 2-0.5 3 0" />
            <line x1="3" y1="3" x2="21" y2="21" strokeWidth={1.5} strokeLinecap="round" />
          </svg>
        )}
      </div> */}
      
      {/* 이미지 컨테이너 */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt={`Perspective ${currentImageIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        {isTransitioning && (
          <img
            src={images[nextImageIndex]}
            alt={`Perspective ${nextImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={fadeInStyle}
          />
        )}
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
      </div>
      
      {/* 콘텐츠 */}
      <div className="absolute top-10 left-0 right-0 z-10 text-white text-center">
        <h1 className="heading-primary text-4xl md:text-6xl tracking-tight whitespace-nowrap transform scale-x-90 origin-center" style={{ fontFamily: "'Do Hyeon', sans-serif", textShadow: '0 0 8px #fff, 0 0 8px #fff, 0 0 4px #fff' }}>
          역삼 2동, 더 나은 삶으로
        </h1>
      </div>
      
      {/* 스크롤 다운 화살표 */}
      <div className="absolute bottom-2 z-10 animate-bounce cursor-pointer" onClick={handleScrollDown}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* 이동버튼 */}
      <div className="absolute bottom-16 portrait:left-1/2 portrait:transform portrait:-translate-x-1/2 landscape:right-10 z-10 flex flex-row gap-4">
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