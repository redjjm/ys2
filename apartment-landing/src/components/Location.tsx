import React from 'react';

const Location: React.FC = () => {
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
                  <span>분당선 서울숲역 도보 10분</span>
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
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="font-semibold">주소:</p>
                <p>서울특별시 강남구 테헤란로 123</p>
              </div>
            </div>
          </div>
          
          {/* 지도 영역 */}
          <div className="overflow-hidden rounded-lg shadow-md bg-gray-300 h-80 md:h-96">
            {/* 실제 구현 시 지도 API 연동 */}
            <div className="flex items-center justify-center h-full bg-gray-200">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="mt-2 text-gray-600">지도가 여기에 표시됩니다.</p>
                <p className="text-sm text-gray-500">(실제 구현 시 카카오맵, 네이버맵 또는 Google Maps API 연동)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 