import React from 'react';
import SliderContent from './slider-content';
import SliderImage from './slider-image';
import { flex } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

const HomeSlider: React.FC = () => {
  return (
    <div className={flex({
      direction: { base: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: { base: '8', md: '22' },
      px: { base: '4', sm: '6', md: '8', lg: '10' },
      py: { base: '8', sm: '10', md: '12', lg: '16' },
      width: 'full',
      maxWidth: {
        base: 'container.xs',
        sm: 'container.sm',
        md: 'container.md',
        lg: 'container.lg',
        xl: 'container.xl',
        '2xl': 'container.2xl',
      },
      mx: 'auto',
    })}>
      <SliderContent />
      <div className={css({
        display: { base: 'none', md: 'block' },
        width: { md: '50%', lg: '60%' },
        maxWidth: {
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
          '2xl': 'container.2xl',
        },
      })}>
        <SliderImage />
      </div>
    </div>
  );
};

export default HomeSlider;
