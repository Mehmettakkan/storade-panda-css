"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import MobileHeader from "@/components/header/mobile-header";
import FooterContainer from "@/components/footer/footer-container";
import HomeSlider from "@/components/home-slider/home-slider";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px'i mobil ve masaüstü arasındaki geçiş noktası olarak kullanıyoruz
    };

    // İlk yükleme sırasında ekran boyutunu kontrol et
    handleResize();

    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', handleResize);

    // Temizleme fonksiyonu
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <header>
        {isMobile ? <MobileHeader /> : <Header />}
      </header>
      <div>
        <aside>{/* Sidebar içeriği */}</aside>
        <main>
          {/* Ana içerik */}
          <section>
            {/* Hero bölümü içeriği */}
            <HomeSlider />
          </section>
          <section>{/* Özellikler bölümü içeriği */}</section>
          <section>{/* Müşteri yorumları bölümü içeriği */}</section>
        </main>
      </div>
      <footer>
        <FooterContainer />
      </footer>
    </div>
  );
}