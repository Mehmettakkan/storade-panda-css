// src/theme/tokens/index.ts

import { colors } from "./colors";
import { typography } from "./typography";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { zIndices } from "./zIndices";
import { animations } from "./animations";
import { breakpoints } from "./breakpoints";
import { grid } from "./grid";

export const tokens = {
  colors,
  ...typography,
  sizes,
  spacing,
  radii,
  shadows,
  zIndices,
  animations,
  breakpoints,
  grid
};

// Example usage in a Panda CSS theme file:
// export const theme = {
//   extend: {
//     tokens,
//     semanticTokens,
//   },
// }

// Example usage in a component:
// import { css } from '../styled-system/css'
//
// const styles = css({
//   fontFamily: 'body',
//   fontSize: 'md',
//   color: 'text-primary',
//   animation: 'fadeIn',
//   animationDuration: 'animations.durations.normal',
//   animationTimingFunction: 'animations.easings.easeOut',
// })
