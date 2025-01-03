import React from 'react';
import { Button } from "@/components/ui/button";
import '../../App.css'; // CSS dosyasını içe aktar
import { useNavigate } from "react-router-dom";

export default function Cards() {
const navigate = useNavigate();

const handleOrderClick = () => {
  navigate("/order");
}




  return (
    <div className='font-barlow m-8 flex  flex-col md:flex-row  md:max-w-3xl mx-auto'> {/* Mobilde alt alta, webde yan yana */}
      <div className={`card card-container card-bg-red md:mr-4`}> {/* İlk kart sol tarafta */}
        <img className="card-image" 
          src="cards.img" 
          alt="card" />
        <div className="card-overlay">
          <h1 className="text-lg font-bold">Özel Lezzetus</h1>
          <p>Position: Absolute Acı Burger</p>
          <Button variant="secondary" onClick={handleOrderClick}>Sipariş Ver</Button>
        </div>
      </div>

      <div className="flex flex-col"> {/* Sağ tarafta alt alta iki kart */}
        <div className={`card card-container card-bg-gray`}> 
          <img className="card-image" 
            src="cards.img1" 
            alt="cards1" />
          <div className="card-overlay">
            <p>Hackathlon Burger Menü</p>
            <Button variant="secondary" onClick={handleOrderClick}>Sipariş Ver</Button>
          </div>
        </div>

        <div className={`card card-container card-bg-dark`}> {/* Üçüncü kart için arka plan rengi eklendi */}
          <img className="card-image" 
            src="cards.img2" 
            alt="cards2" />
          <div className="card-overlay">
            <p><span className='text-kirmizi'>Çooook</span> hızlı, npm gibi kurye</p>
            <Button variant="secondary" onClick={handleOrderClick}>Sipariş Ver</Button>
          </div>
        </div>
      </div>
    </div>
  );
}