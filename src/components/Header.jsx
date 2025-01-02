import React from 'react';
import { Button } from "@/components/ui/button"
import {useNavigate} from "react-router-dom"

function Header() {

const navigate = useNavigate();

const handleOrderClick = () => {
  navigate("/order");
}


  return (
    <div className="relative h-screen w-screen">
      {/* Metinler */}
      <div className="absolute inset-x-0 top-20 text-center text-white space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold font-roboto">Teknolojik Yemekler</h1>
        <p className="text-lg sm:text-2xl text-sari font-satisfy">Fırsatı Kaçırma!</p>
        <h2 className="text-3xl sm:text-6xl text-koyuGri font-roboto">KOD ACIKTIRIR, PİZZA DOYURUR.</h2>
        <Button variant="default" onClick={handleOrderClick}>Acıktım</Button>
      </div>
      
      {/* Arka Plan Görseli */}
      <img 
        src="/home-banner.png" 
        alt="header.logo" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
}

export default Header;
