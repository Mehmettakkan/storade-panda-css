import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { css } from "../../../styled-system/css";

const SliderImage: React.FC = () => {
  const fadeInScale = {
    initial: { opacity: 0, scale: 0.75 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: "easeOut" }
  };

  return (
    <div className={css({ position: 'relative', width: '700px', height: '590px' })}>
      {/* Green L-shaped frame */}
      <motion.div
        className={css({
          position: 'absolute',
          top: '0',
          left: '0',
          width: '257px',
          height: '590px',
        })}
        {...fadeInScale}
      >
        <Image
          src="/images/Green-L-shaped-frame.svg"
          alt="Green L-shaped frame"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* White content area */}
      <motion.div
        className={css({
          position: 'absolute',
          top: '76px',
          left: '127px',
          width: '252px',
          height: '438px',
        })}
        {...fadeInScale}
        transition={{ ...fadeInScale.transition, delay: 0.2 }}
      >
        <Image
          src="/images/White-content-area.svg"
          alt="White content area"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Blue plus button */}
      <motion.div
        className={css({
          position: 'absolute',
          top: '254px',
          left: '338px',
          width: '82px',
          height: '82px',
          backgroundColor: 'blue.600',
          borderRadius: 'full',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
        {...fadeInScale}
        transition={{ ...fadeInScale.transition, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={css({ height: '10', width: '10', color: 'white' })} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.div>

      {/* Social media icons */}
      <motion.div
        className={css({
          position: 'absolute',
          top: '86px',
          left: '440px',
          width: '194px',
          height: '418px',
        })}
        {...fadeInScale}
        transition={{ ...fadeInScale.transition, delay: 0.6 }}
      >
        <Image
          src="/images/Social-media-icons.svg"
          alt="Social media icons"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </div>
  );
};

export default SliderImage;