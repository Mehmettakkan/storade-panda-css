// src/theme/tokens/radii.ts
import { defineTokens } from '@pandacss/dev'

export const radii = defineTokens.radii({
  none: { value: "0" },
  xs: { value: "0.125rem" },
  sm: { value: "0.25rem" },
  md: { value: "0.375rem" },
  lg: { value: "0.5rem" },
  xl: { value: "0.75rem" },
  "2xl": { value: "1rem" },
  "3xl": { value: "1.5rem" },
  full: { value: "9999px" },
})

// Example usage in a Panda CSS theme file:
// export const theme = {
//   extend: {
//     tokens: {
//       radii,
//     },
//   },
// }

// Example usage in a component:
// import { css } from '../styled-system/css'
// 
// const cardStyles = css({
//   borderRadius: 'lg',
//   overflow: 'hidden',
// })