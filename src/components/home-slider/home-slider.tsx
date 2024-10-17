import React from 'react';
import SliderContent from './slider-content';
import SliderImage from './slider-image';
import { flex } from "../../../styled-system/patterns";

const HomeSlider: React.FC = () => {
  return (
    <div className={flex({
      direction: { base: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: { base: '8', md: '22' },
      px: { base: '4', md: '8' },
      py: { base: '8', md: '12' },
      width: 'full'
    })}>
      <SliderContent />
      <SliderImage />
    </div>
  );
};

export default HomeSlider;