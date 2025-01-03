import React, { useState } from 'react';

function Order() {
  // Ekstra malzemeler için state oluşturuluyor
  const [selectedExtras, setSelectedExtras] = useState([]);
  
  // Ekstra malzeme seçenekleri
  const extras = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Peynir",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Pastırma"
  ];

  // Checkbox'ların state'ini güncelleyen fonksiyon
  const handleExtraChange = (event) => {
    const value = event.target.value;
    setSelectedExtras((prevState) =>
      prevState.includes(value)
        ? prevState.filter((extra) => extra !== value) // Seçiliyse çıkar
        : [...prevState, value] // Seçilmemişse ekle
    );
  };

  return (
    <div>
      <div>
        <h1 className="title bg-kirmizi h-40 flex flex-col justify-center items-center">
          Teknolojik Yemekler
        </h1>
        <a href="/" className="text-white hover:underline absolute left-4 top-32">
          Ana Sayfa
        </a>
      </div>

      <div className="flex justify-center items-center mt-8">
        <form>
          {/* Başlıklar için flex container */}
          <div className="flex items-center justify-start gap-x-40 mb-6">
            <h2 className="text-xl">
              Boyut Seç <span className="text-kirmizi">*</span>
            </h2>
            <h2 className="text-xl">
              Hamur Kalınlığı <span className="text-kirmizi">*</span>
            </h2>
          </div>

          {/* Radio Buttons ve Select hizalaması */}
          <div className="flex items-start gap-x-16">
            {/* S, M, L */}
            <div className="flex gap-x-4">
              {/* S */}
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="size" value="S" className="hidden" />
                <span className="flex items-center justify-center w-16 h-16 border rounded-full text-center text-m text-acikGri hover:bg-gray-200 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500">
                  S
                </span>
              </label>
              {/* M */}
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="size" value="M" className="hidden" />
                <span className="flex items-center justify-center w-16 h-16 border rounded-full text-center text-m text-acikGri hover:bg-gray-200 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500">
                  M
                </span>
              </label>
              {/* L */}
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="size" value="L" className="hidden" />
                <span className="flex items-center justify-center w-16 h-16 border rounded-full text-center text-s text-acikGri hover:bg-gray-200 focus:bg-yellow-400 focus:ring-2 focus:ring-yellow-500">
                  L
                </span>
              </label>
            </div>

            {/* Hamur Kalınlığı Seç */}
            <select className="border rounded-md p-3 w-full max-w-xs text-gray-700 ml-6">
              <option value="" disabled selected>
                Hamur Kalınlığı Seçiniz
              </option>
              <option value="ince">İnce Hamur</option>
              <option value="orta">Orta Kalın Hamur</option>
              <option value="kalin">Kalın Hamur</option>
            </select>
          </div>

          {/* Ekstra Malzemeler kısmı */}
          <div>
            <h2 className="text-xl">
              Ekstra Malzemeler <span className="text-kirmizi">*</span>
            </h2>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {extras.map((extra) => (
                <label key={extra} className="flex items-center">
                  <input
                    type="checkbox"
                    value={extra}
                    onChange={handleExtraChange}
                    disabled={selectedExtras.length >= 10 && !selectedExtras.includes(extra)} // 10'dan fazla seçim yapmayı engelle
                    className="mr-2"
                  />
                  {extra}
                </label>
              ))}
            </div>
          </div>
          <div>
          <h2 className="text-xl mb-4">Sipariş Notu</h2>
          <input
        type="text"
       name="siparis-notu"
        className="border rounded-md p-3 w-full max-w-xs text-gray-700 focus:ring-2 focus:ring-yellow-500"
      placeholder="Siparişinize dair notlarınızı buraya yazın"/>
</div>
<hr className='mt-10 mb-10 border-acikGri'/>
        </form>
      </div>
    </div>
  );
}

export default Order;
