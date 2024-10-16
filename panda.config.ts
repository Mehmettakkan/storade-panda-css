import { defineConfig } from "@pandacss/dev";
import { tokens, semanticTokens } from './src/thema'

export default defineConfig({
  // CSS reset ve temel stiller
  preflight: true,

  // CSS tanımlamalarının aranacağı yerler
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Hariç tutulacak dosyalar
  exclude: [],

  // Tema özelleştirmeleri
  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },

  // Özel pattern tanımlamaları
  patterns: {
    extend: {},
  },

  // Responsive tasarım ve diğer koşullar için
  conditions: {
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
      light: '.light &, [data-theme="light"] &',
      mobile: "@media (max-width: 768px)",
      tablet: "@media (min-width: 769px) and (max-width: 1024px)",
      desktop: "@media (min-width: 1025px)",
    },
  },

  // Özel utility tanımlamaları
  utilities: {
    extend: {
      visibility: {
        property: "visibility",
        values: {
          visible: "visible",
          hidden: "hidden",
        },
      },
      textOverflow: {
        property: "textOverflow",
        values: {
          clip: "clip",
          ellipsis: "ellipsis",
        },
      },
    },
  },

  // Çıktı dizini
  outdir: "styled-system",

  // JSX framework'ü
  jsxFramework: "react",

  // Global CSS ayarları
  globalCss: {
    body: {
      backgroundColor: "{colors.bg-primary}",
      color: "{colors.text-primary}",
    },
  },
});