import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Footer from './Footer';
import Icons from '../components/ui/Icons';
import Cards from '../components/ui/Cards';
import MenuCards from '../components/ui/MenuCards';

function Header() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order");
  };

  const buttons = [
    { iconSrc: "icon1.png", label: "Yeni! Kore" },
    { iconSrc: "icon2.png", label: "Pizza" },
    { iconSrc: "icon3.png", label: "Burger" },
    { iconSrc: "icon4.png", label: "Kızartmalar" },
    { iconSrc: "icon5.png", label: "Fast Food" },
    { iconSrc: "icon6.png", label: "Gazlı İçecekler" },
  ];

  const buttons2 = [
    { iconSrc: "icon1.png", label: "Ramen" },
    { iconSrc: "icon2.png", label: "Pizza" },
    { iconSrc: "icon3.png", label: "Burger" },
    { iconSrc: "icon4.png", label: "French fries" },
    { iconSrc: "icon5.png", label: "Fast Food" },
    { iconSrc: "icon6.png", label: "Soft Drinks" },
  ];


  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-x-0 top-20 text-center space-y-6 sm:space-y-8">
        <h1 className="title">Teknolojik Yemekler</h1>
        <p className="text">Fırsatı Kaçırma!</p>
        <h2 className="subtitle">KOD ACIKTIRIR, PİZZA DOYURUR.</h2>
        <Button variant="default" onClick={handleOrderClick}>Acıktım</Button>
      </div>
      <img 
        src="/home-banner.png" 
        alt="header.logo" 
        className="w-full h-full object-cover" 
      />
      <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {buttons.map((button, index) => (
          <Icons
            key={index}
            iconSrc={button.iconSrc}
            label={button.label}
            variant="outline"
            className="text-center"
          />
        ))}
      </div>
      </div>
      <Cards />

      <div className='p-10 m-5 flex flex-col items-center '>
      <p className='text text-kirmizi'>en çok paketlenen menüler</p>
      <h3 className='subtitle'>Acıktıran Kodlara Doyuran Lezzetler</h3>
      </div>

      <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {buttons2.map((button, index) => (
          <Icons
            key={index}
            iconSrc={button.iconSrc}
            label={button.label}
            variant="outline"
            className="text-center border-solid border-2 border-gray-300 bg-white rounded-full h-15"
          />
        ))}
      </div>
      </div>
        <MenuCards />
      <Footer />
    </div>
  );
}

export default Header;
