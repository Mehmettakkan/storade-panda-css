// src/theme/tokens/zIndices.ts
import { defineTokens } from '@pandacss/dev'

export const zIndices = defineTokens.zIndex({
  hide: { value: -1 },
  auto: { value: 'auto' },
  base: { value: 0 },
  background: { value: 1 },
  docked: { value: 10 },
  content: { value: 100 },
  dropdown: { value: 1000 },
  sticky: { value: 1100 },
  header: { value: 1200 },
  banner: { value: 1300 },
  overlay: { value: 1400 },
  modal: { value: 1500 },
  popover: { value: 1600 },
  skipLink: { value: 1700 },
  toast: { value: 1800 },
  tooltip: { value: 1900 },
  topmost: { value: 2147483647 },
})

// Panda CSS specific utility for responsive z-index
export const responsiveZIndex = {
  mobile: {
    modal: { value: '{zIndices.overlay}' },
    dropdown: { value: '{zIndices.sticky}' },
  },
  desktop: {
    modal: { value: '{zIndices.modal}' },
    dropdown: { value: '{zIndices.dropdown}' },
  },
}

// Example usage in a Panda CSS theme file:
// export const theme = {
//   extend: {
//     semanticTokens: {
//       zIndex: {
//         ...zIndices,
//         responsive: responsiveZIndex,
//      },
//    },
//  },
// }

// Example usage in a component:
// const styles = css({
//   zIndex: {
//     base: 'dropdown',
//     md: 'responsive.desktop.dropdown',
//   }
// })