// // src/theme/tokens/sizes.ts
// import { defineTokens } from '@pandacss/dev'

// export const sizes = defineTokens.sizes({
//   container: {
//     xs: { value: "360px" },    // Mobil telefonlar için
//     sm: { value: "576px" },    // Büyük mobil telefonlar ve küçük tabletler için
//     md: { value: "768px" },    // Tabletler için
//     lg: { value: "992px" },    // Küçük dizüstü bilgisayarlar için
//     xl: { value: "1200px" },   // Orta boy ekranlar için
//     "2xl": { value: "1440px" },// Büyük ekranlar için
//     "3xl": { value: "1600px" },// Daha büyük ekranlar için
//     "4xl": { value: "1920px" },// Full HD ekranlar için
//     "5xl": { value: "2560px" },// 2K ekranlar için
//     "6xl": { value: "3200px" },// Ultra geniş 4K ekranlar için
//   },
// })


import { defineTokens } from '@pandacss/dev'

export const sizes = defineTokens.sizes({
  container: {
    xs: { value: "360px" },    // Mobil telefonlar için
    sm: { value: "576px" },    // Büyük mobil telefonlar ve küçük tabletler için
    md: { value: "768px" },    // Tabletler için
    lg: { value: "1200px" },   // Küçük dizüstü bilgisayarlar için
    xl: { value: "1440px" },   // Orta boy ekranlar için
    "2xl": { value: "1600px" },// Büyük ekranlar için
    "3xl": { value: "1920px" },// Daha büyük ekranlar için
    "4xl": { value: "2560px" },// Full HD ekranlar için
    "5xl": { value: "3200px" },// 2K ekranlar için
    "6xl": { value: "3200px" },// Ultra geniş 4K ekranlar için
  },
})
