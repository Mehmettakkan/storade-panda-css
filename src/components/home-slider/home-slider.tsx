import React from 'react';
import SliderContent from './slider-content';
import SliderImage from './slider-image';
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const HomeSlider: React.FC = () => {
  return (
    <section className={css({
      py: '12',
      px: { base: '4', md: '8', lg: '16' },
      maxWidth: 'container.xl',
      mx: 'auto'
    })}>
      <div className={flex({
        direction: { base: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'between',
        gap: { base: '8', md: '16' }
      })}>
        <SliderContent />
        <SliderImage />
      </div>
    </section>
  );
};

export default HomeSlider;