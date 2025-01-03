import React from 'react';

function MenuCards() {

  const menuItems = [
    { id: 1, image: "menucard1.png", name: "Terminal Pizza", rating: "4.9 (200)", price: "60₺" },
    { id: 2, image: "menucard2.png", name: "Margherita Pizza", rating: "4.7 (150)", price: "55₺" },
    { id: 3, image: "menucard3.png", name: "Pepperoni Pizza", rating: "4.8 (180)", price: "65₺" },
  ];

  return (
    <div className="flex justify-center items-center p-8"> {/* Ortalamak için flex ve justify-center */}
      <div className="flex space-x-4"> {/* Yatayda boşluk bırakmak için space-x-4 */}
        {menuItems.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-md p-4 text-center max-w-xs">
            <img src={item.image} alt={item.name} className="object-cover rounded-md" />
            <p className="text-lg subtitle font-bold mt-2">{item.name}</p>
            <p className="text-acikGri">{item.rating}</p>
            <p className="text-xl font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCards;
