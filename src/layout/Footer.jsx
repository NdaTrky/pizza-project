import React from 'react';

const Footer = () => {
  const footerData = {
    companyName: "Teknolojik Yemekler",
    address: "341 Londonderry Road, İstanbul Türkiye",
    addressLink: "https://www.google.com/maps?q=341+Londonderry+Road,+İstanbul+Türkiye",
    email: "aciktim@teknolojikyemekler.com",
    emailLink: "mailto:aciktim@teknolojikyemekler.com",
    phone: "+90 216 123 45 67",
    phoneLink: "tel:+902161234567",
    menuItems: [
      "Terminal Pizza",
      "5 Kişilik Hackathon Pizza",
      "useEffect Tavuklu Pizza",
      "Beyaz Console Frosty",
      "Tester Geçti Mutlu Burger",
      "Position Absolute Acı Burger",
    ],
    instagramImages: [
      "instagram4.png",
      "instagram5.png",
      "instagram4.png",
      "instagram4.png",
      "instagram5.png",
      "instagram5.png",
    ],
    copyright: "© 2023 Teknolojik Yemekler.",
  };

  return (
    <footer className="bg-koyuGri p-2 mt-2 text-white">
      {/* Kapsayıcı Div */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
        {/* Sol Kolon: Şirket Bilgileri */}
        <div className="w-full sm:w-1/3 text-center">
          <h1 className="title">{footerData.companyName}</h1>
          <p className="mb-2">
            <img src="address-icon.png" alt="Adres Icon" className="inline-block mr-2" />
            <a
              href={footerData.addressLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.address}
            </a>
          </p>
          <p className="mb-2">
            <img src="mail-icon.png" alt="Email Icon" className="inline-block mr-2" />
            <a
              href={footerData.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.email}
            </a>
          </p>
          <p>
            <img src="phone-icon.png" alt="Phone Icon" className="inline-block mr-2" />
            <a
              href={footerData.phoneLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.phone}
            </a>
          </p>
        </div>

        {/* Orta Kolon: Menü */}
        <div className="w-full sm:w-1/3 text-center">
          <h4 className="text-lg font-bold mb-4">Hot Menu</h4>
          <ul>
            {footerData.menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ Kolon: Instagram */}
        <div className="w-full sm:w-1/3 text-center flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Instagram</h4>
          <div className="grid grid-cols-3 gap-2">
            {footerData.instagramImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Instagram ${index}`}
                className="w-24 h-24 object-cover"
              />
            ))}
           </div>
          <hr/>
          <div className="mt-4">{footerData.copyright}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;