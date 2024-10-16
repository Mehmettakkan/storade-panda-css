// src/theme/tokens/typography.ts
import { defineTokens } from '@pandacss/dev'

export const typography = defineTokens({
  fonts: {
    body: { value: "Inter, sans-serif" },
    heading: { value: "Poppins, sans-serif" },
  },
  fontSizes: {
    xs: { value: "0.75rem" },
    sm: { value: "0.875rem" },
    md: { value: "1rem" },
    lg: { value: "1.125rem" },
    xl: { value: "1.25rem" },
    "2xl": { value: "1.5rem" },
    "3xl": { value: "1.875rem" },
    "4xl": { value: "2.25rem" },
    "5xl": { value: "3.875rem" },
  },
  fontWeights: {
    normal: { value: "400" },
    medium: { value: "500" },
    semibold: { value: "600" },
    bold: { value: "700" },
  },
  lineHeights: {
    none: { value: "1" },
    tight: { value: "1.25" },
    snug: { value: "1.375" },
    normal: { value: "1.5" },
    relaxed: { value: "1.625" },
    loose: { value: "2" },
  },
  letterSpacings: {
    tighter: { value: "-0.05em" },
    tight: { value: "-0.025em" },
    normal: { value: "0" },
    wide: { value: "0.025em" },
    wider: { value: "0.05em" },
    widest: { value: "0.1em" },
  },
})

// Example usage in a Panda CSS theme file:
// export const theme = {
//   extend: {
//     tokens: {
//       typography,
//     },
//   },
// }

// Example usage in a component:
// import { css } from '../styled-system/css'
// 
// const textStyles = css({
//   fontFamily: 'body',
//   fontSize: 'md',
//   fontWeight: 'normal',
//   lineHeight: 'normal',
//   letterSpacing: 'normal',
// })