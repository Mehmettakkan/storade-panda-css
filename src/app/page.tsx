"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { css } from "../../styled-system/css";
import Header from "@/components/header/header";
import HomeSlider from "@/components/home-slider/home-slider";
import FooterContainer from "@/components/footer/footer-container";
import SliderContent from "@/components/home-slider/slider-content";

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
            <SliderContent/>
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
