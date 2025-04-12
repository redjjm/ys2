import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Location: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5013, 127.0397),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
        
        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5013, 127.0397)
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <section id="location" className="section bg-beige-light">
      <div className="container-custom">
        <h2 className="heading-secondary mb-8">위치 안내</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
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
                  <span>분당선 한티역 도보 10분</span>
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
                  <span>도곡공원 5분</span>
                </li>
              </ul>
{/*               
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-semibold">주소:</p>
                <p>서울특별시 강남구 역삼2동</p>
              </div> */}
            </div>
          </div>
          
          {/* 지도 영역 */}
          <div className="overflow-hidden rounded-lg shadow-md bg-gray-300 h-80 md:h-96">
            <div id="map" className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 