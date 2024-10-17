"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import FooterContainer from "@/components/footer/footer-container";
import HomeSlider from "@/components/home-slider/home-slider";

export default function HomePage() {
  return (
    <div>
      <header>
        <Header />
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
