import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // 실제 구현 시 API 호출하여 데이터 전송
    setFormSubmitted(true);
    
    // 폼 초기화
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    
    // 3초 후 메시지 숨기기
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section bg-beige-light">
      <div className="container-custom">
        <h2 className="heading-secondary mb-8">문의하기</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* 문의 정보 */}
            <div className="bg-gold-DEFAULT text-white p-8">
              <h3 className="text-2xl font-semibold mb-6">상담 안내</h3>
              <p className="mb-8">
                아파트 분양 및 투자에 관한 모든 문의사항을 친절하게 안내해 드립니다. 
                상담 예약 및 현장 방문을 원하시면 연락처를 남겨주세요.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">전화 문의</p>
                    <p>02-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">이메일 문의</p>
                    <p>info@apartment-project.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">상담 시간</p>
                    <p>평일 09:00 - 18:00</p>
                    <p>주말 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 문의 폼 */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">연락처 남기기</h3>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                  문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    placeholder="홍길동"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    placeholder="010-1234-5678"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">이메일 (선택)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light resize-none"
                    placeholder="궁금하신 사항을 입력해주세요."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg font-medium"
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 