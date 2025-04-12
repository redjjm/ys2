import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">인사말</h3>
            <p className="text-gray-400 mb-4">
            우리가 뿌리내린 역삼 2동, 더 나은 주거 환경을 여러분과 함께 만들어가겠습니다.
소유자 자원봉사팀 추진위 일동
            </p>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">구역</h3>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-gray-400 hover:text-white transition-colors">774 775 777 778</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">780 781 782 783</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-xl font-semibold mb-4">추진위</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">위원장 : 조미숙</p>
              <p className="mb-2">전화: 02-6203-5051</p>
              <p className="mb-2">FAX: 02-6203-5059</p>
              {/* <p>이메일: info@apartment-project.com</p> */}
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>강남구 역삼2동 재개발 추진준비위원회</p>
          {/* <p>&copy; 2025 프리미엄 아파트 재개발 프로젝트</p> */}
          {/* <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a> | 
            <a href="#" className="hover:text-white transition-colors ml-4">이용약관</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 