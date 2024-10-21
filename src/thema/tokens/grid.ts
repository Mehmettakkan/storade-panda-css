import { defineTokens } from '@pandacss/dev';
import { breakpoints } from './breakpoints';
import { sizes } from './sizes';
import { spacing } from './spacing';

export const grid = {
  gridColumns: {
    1: { value: '1' },
    2: { value: '2' },
    3: { value: '3' },
    4: { value: '4' },
    5: { value: '5' },
    6: { value: '6' },
    7: { value: '7' },
    8: { value: '8' },
    9: { value: '9' },
    10: { value: '10' },
    11: { value: '11' },
    12: { value: '12' },
  },
  gridGutters: {
    0: { value: spacing[0].value },
    1: { value: spacing[1].value },
    2: { value: spacing[2].value },
    3: { value: spacing[3].value },
    4: { value: spacing[4].value },
    5: { value: spacing[5].value },
    6: { value: spacing[6].value },
    8: { value: spacing[8].value },
  },
  gridBreakpoints: {
    xs: { value: breakpoints.xs.value },
    sm: { value: breakpoints.sm.value },
    md: { value: breakpoints.md.value },
    lg: { value: breakpoints.lg.value },
    xl: { value: breakpoints.xl.value },
    '2xl': { value: breakpoints['2xl'].value },
  },
  container: {
    maxWidths: {
      xs: { value: sizes.container.xs.value },
      sm: { value: sizes.container.sm.value },
      md: { value: sizes.container.md.value },
      lg: { value: sizes.container.lg.value },
      xl: { value: sizes.container.xl.value },
      '2xl': { value: sizes.container['2xl'].value },
    },
    padding: {
      xs: { value: spacing[4].value },
      sm: { value: spacing[5].value },
      md: { value: spacing[6].value },
      lg: { value: spacing[8].value },
      xl: { value: spacing[10].value },
    },
  },
};