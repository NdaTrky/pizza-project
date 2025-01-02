import React from 'react';
import { Button } from "@/components/ui/button"
import {useNavigate} from "react-router-dom"
import '../App.css';

function Header() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order");
  }

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
    </div>
  );
}

export default Header;
