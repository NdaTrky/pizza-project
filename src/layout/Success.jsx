import React from 'react';
import Footer from './Footer'; // Footer bileşenini içe aktar

function Success() {
  return (
    <div className="bg-kirmizi  flex flex-col"> {/* Flex ile dikey hizalama */}
      <div className='flex-grow flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8 h-screen'>
        <h1 className='title'>Teknolojik Yemekler</h1>
        <p className='text'>Lezzetin Yolda!</p>
        <h2 className='subtitle'>Sipariş Başarıyla Alındı.</h2>
      </div>
      <Footer /> {/* Footer bileşenini ekle */}
    </div>
  );
}

export default Success;