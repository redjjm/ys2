import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Location: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Location component mounted");
    console.log("window.kakao exists?", !!window.kakao);
    
    // 지도 API 로드 확인을 위한 타임아웃
    const checkKakaoMap = () => {
      console.log("Checking Kakao Map API...");
      console.log("window.kakao exists?", !!window.kakao);
      
      if (window.kakao && window.kakao.maps) {
        console.log("카카오 맵 API가 로드되었습니다.");
        initMap();
      } else {
        console.log("카카오 맵 API가 아직 로드되지 않았습니다. 다시 시도합니다.");
        setTimeout(checkKakaoMap, 500);
      }
    };
    
    // 맵 초기화 함수
    const initMap = () => {
      if (!mapRef.current) {
        console.error("맵 컨테이너 요소를 찾을 수 없습니다.");
        return;
      }
      
      try {
        console.log("지도 초기화 시작...");
        
        // 역삼2동 780번지 좌표
        const yeoksam2DongCoords = new window.kakao.maps.LatLng(37.495235, 127.043016);
        
        const options = {
          center: yeoksam2DongCoords, // 역삼2동 780번지 중심 좌표
          level: 3  // 조금 더 확대해서 보여줌
        };
        
        const map = new window.kakao.maps.Map(mapRef.current, options);
        
        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: yeoksam2DongCoords,
          map: map
        });
        
        // 인포윈도우 추가
        const infowindow = new window.kakao.maps.InfoWindow({
          content: '<div style="padding:5px;font-size:12px;width:150px;text-align:center;">역삼2동 780번지 일대</div>'
        });
        infowindow.open(map, marker);
        
        console.log("지도를 성공적으로 생성했습니다.");
      } catch (error) {
        console.error("지도 생성 중 오류 발생:", error);
      }
    };
    
    // 1초 후 카카오맵 API 체크 시작
    setTimeout(checkKakaoMap, 1000);
    
    return () => {
      console.log("Location component unmounted");
    };
  }, []);

  return (
    <section id="location" className="section bg-beige-light">
      <div className="container-custom">
        <h2 className="heading-secondary mb-8">위치</h2>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          {/* <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gold-DEFAULT">프리미엄 입지 조건</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold-DEFAULT mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>지하철 2호선 강남역 도보 5분</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold-DEFAULT mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>지하철 분당선 서울숲역 도보 10분</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold-DEFAULT mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>인근 대형 쇼핑몰 및 마트 위치</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold-DEFAULT mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>명문 초/중/고등학교 학군</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gold-DEFAULT mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>한강 공원 도보 15분</span>
                </li>
              </ul>
            </div>
          </div> */}
          
          {/* 지도 영역 */}
          <div className="overflow-hidden rounded-lg shadow-md h-80 md:h-96">
            <div 
              id="kakao-map"
              ref={mapRef} 
              className="w-full h-full" 
              style={{backgroundColor: "#f0f0f0"}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 