import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Footer from './Footer';
import '../App.css';

function Order() {
  const extras = [
    "Pepperoni", "Tavuk Izgara", "Mısır", "Peynir", "Sarımsak", 
    "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", 
    "Kabak", "Kanada Jambonu", "Domates", "Jalepeno", "Pastırma"
  ];

  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const basePrice = 60;
  const extraPrice = 5;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!size || !dough) {
      setError("Boş bırakılamaz");
      return;
    }
    navigate("/success");
  };

  const handleExtraChange = (extra) => {
    setSelectedExtras((prev) => {
      if (prev.includes(extra)) {
        return prev.filter((item) => item !== extra);
      } else if (prev.length < 10) {
        return [...prev, extra];
      } else {
        setError("En fazla 10 ek malzeme seçimi yapabilirsiniz!");
        return prev;
      }
    });
  };

  const totalPrice = basePrice * quantity + selectedExtras.length * extraPrice;

  return (
    <div>
      <h1 className="title bg-kirmizi h-40 flex flex-col justify-center items-center">
        Teknolojik Yemekler
      </h1>
      <a href="/" className="text-white hover:underline absolute left-4 top-32">
        Ana Sayfa
      </a>

      <div className="flex justify-center items-center mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-start gap-x-56 mb-6">
            <h2 className="text-xl">
              Boyut Seç <span className="text-kirmizi">*</span>
            </h2>
            <h2 className="text-xl">
              Hamur Kalınlığı <span className="text-kirmizi">*</span>
            </h2>
          </div>

          <div className="flex items-start gap-x-16">
            <div className="flex gap-x-4">
              {['S', 'M', 'L'].map((sizeOption) => (
                <label key={sizeOption} className={`flex items-center cursor-pointer ${size === sizeOption ? 'text-yellow-500' : ''}`}>
                  <input 
                    type="radio" 
                    value={sizeOption} 
                    checked={size === sizeOption} 
                    onChange={() => setSize(sizeOption)} 
                    className="hidden"
                  />
                  <span className={`order-size-radio text-sm ${size === sizeOption ? 'text-yellow-500' : 'text-gray-700'}`}>{sizeOption}</span>
                </label>
              ))}
            </div>
            <select
              className="border rounded-md p-3 w-full max-w-xs text-gray-700 ml-6"
              value={dough}
              onChange={(e) => setDough(e.target.value)}
            >
              <option value="" disabled>
                Hamur Kalınlığı Seçiniz
              </option>
              <option value="ince">İnce Hamur</option>
              <option value="orta">Orta Kalın Hamur</option>
              <option value="kalin">Kalın Hamur</option>
            </select>
          </div>

          <div className="mt-20">
            <h2 className="text-xl">Ekstra Malzemeler</h2>
            <p className="text-acikGri">
              En Fazla 10 malzeme seçebilirsiniz.{extraPrice}₺
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {extras.map(( extra) => (
                <label>
                  <input 
                    type="checkbox" 
                    value={extra} 
                    checked={selectedExtras.includes(extra)}
                    onChange={() => handleExtraChange(extra)} 
                    className='mr-2 checkbox-yellow'
                  />
                  <span className="text-lg">{extra}</span>
                </label>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="mt-24">
            <h2 className="text-xl">Sipariş Notu</h2>
            <input
              type="text"
              name="siparis-notu"
              className="border rounded-md mt-3 p-5 w-full max-w-xs text-gray-700"
              placeholder="Siparişinize dair notlarınızı buraya yazın"
            />
          </div>

          <hr className="mt-10 mb-10 border-acik" />

          <div className="flex justify-between p-6">
          <div className="flex gap-x-2">
  <Button type="button" variant="default" onClick={() => setQuantity(quantity + 1)}>+</Button>
  <p className="border rounded-md w-10 h-10 text-center">{quantity}</p>
  <Button type="button" variant="default" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
</div>


            <div className="border rounded-md p-4 w-full max-w-xs text-gray-700">
              <h3 className="font-bold text-xl">Sipariş Toplamı</h3>
              <p>Ekstra Malzemeler: {selectedExtras.length * extraPrice}₺</p>
              <p className="text-kirmizi font-bold">Toplam: {totalPrice}₺</p>
              <Button 
                variant="default" 
                className="w-full mt-4" 
                type="submit" 
                disabled={!size || !dough}
              >
                Sipariş Ver
              </Button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Order;