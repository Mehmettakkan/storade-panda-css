import { defineTokens } from '@pandacss/dev'

export const animations = defineTokens.animations({
  durations: {
    fastest: { value: '50ms' },
    fast: { value: '100ms' },
    normal: { value: '200ms' },
    slow: { value: '300ms' },
    slowest: { value: '500ms' },
  },
  easings: {
    easeInOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
    easeOut: { value: 'cubic-bezier(0.0, 0, 0.2, 1)' },
    easeIn: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
    linear: { value: 'linear' },
  },
  properties: {
    opacity: { value: 'opacity' },
    scale: { value: 'scale' },
    rotate: { value: 'rotate' },
    translate: { value: 'translate' },
  },
  keyframes: {
    fadeIn: {
      value: {
        from: { opacity: { value: '0' } },
        to: { opacity: { value: '1' } },
      },
    },
    fadeOut: {
      value: {
        from: { opacity: { value: '1' } },
        to: { opacity: { value: '0' } },
      },
    },
    scaleUp: {
      value: {
        from: { transform: { value: 'scale(0.8)' } },
        to: { transform: { value: 'scale(1)' } },
      },
    },
    scaleDown: {
      value: {
        from: { transform: { value: 'scale(1)' } },
        to: { transform: { value: 'scale(0.8)' } },
      },
    },
  },
})

// Example usage in a Panda CSS theme file:
// export const theme = {
//   extend: {
//     tokens: {
//       animations,
//     },
//   },
// }

// Example usage in a component:
// import { css } from '../styled-system/css'
// 
// const fadeInAnimation = css({
//   animation: 'fadeIn',
//   animationDuration: 'animations.durations.normal',
//   animationTimingFunction: 'animations.easings.easeOut',
// })




/* // src/theme/tokens/animations.ts

export const animations = {
  durations: {
    fast: { value: "0.1s" },
    normal: { value: "0.2s" },
    slow: { value: "0.3s" },
  },
  easings: {
    easeInOut: { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
    easeOut: { value: "cubic-bezier(0.0, 0, 0.2, 1)" },
    easeIn: { value: "cubic-bezier(0.4, 0, 1, 1)" },
  },
}; */