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
    <div className={css({
      position: 'relative',
      width: { base: '100%', sm: '400px', md: '500px', lg: '600px', xl: '700px' },
      height: { base: '300px', sm: '350px', md: '420px', lg: '505px', xl: '590px' },
      display: 'block',
      margin: 'auto',
      marginTop: { base: '4', md: '0' },
    })}>
      {/* Green L-shaped frame */}
      <motion.div
        className={css({
          position: 'absolute',
          top: '0',
          left: '0',
          width: { base: '30%', sm: '35%', md: '183px', lg: '220px', xl: '257px' },
          height: '100%',
        })}
        {...fadeInScale}
      >
        <Image
          src="/images/slider/slider-green-L-shaped-frame.svg"
          alt="Green L-shaped frame"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* White content area */}
      <motion.div
        className={css({
          position: 'absolute',
          top: { base: '15%', md: '54px', lg: '65px', xl: '76px' },
          left: { base: '15%', md: '90px', lg: '108px', xl: '127px' },
          width: { base: '40%', sm: '45%', md: '180px', lg: '216px', xl: '252px' },
          height: { base: '70%', md: '312px', lg: '375px', xl: '438px' },
        })}
        {...fadeInScale}
        transition={{ ...fadeInScale.transition, delay: 0.2 }}
      >
        <Image
          src="/images/slider/slider-white-content-area.svg"
          alt="White content area"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Blue plus button */}
      <motion.div
        className={css({
          position: 'absolute',
          top: { base: '45%', sm: '50%', md: '181px', lg: '217px', xl: '254px' },
          left: { base: '45%', sm: '50%', md: '241px', lg: '289px', xl: '338px' },
          width: { base: '40px', sm: '50px', md: '58px', lg: '70px', xl: '82px' },
          height: { base: '40px', sm: '50px', md: '58px', lg: '70px', xl: '82px' },
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
        <svg xmlns="http://www.w3.org/2000/svg" className={css({ height: { base: '5', sm: '6', md: '7', lg: '8', xl: '10' }, width: { base: '5', sm: '6', md: '7', lg: '8', xl: '10' }, color: 'white' })} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.div>

      {/* Social media icons */}
      <motion.div
        className={css({
          position: 'absolute',
          top: { base: '10%', sm: '15%', md: '61px', lg: '73px', xl: '86px' },
          right: { base: '5%', sm: '10%', md: '48px', lg: '57px', xl: '66px' },
          width: { base: '30%', sm: '35%', md: '138px', lg: '166px', xl: '194px' },
          height: { base: '80%', sm: '75%', md: '298px', lg: '358px', xl: '418px' },
        })}
        {...fadeInScale}
        transition={{ ...fadeInScale.transition, delay: 0.6 }}
      >
        <Image
          src="/images/slider/slider-social-media-icons.svg"
          alt="Social media icons"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </div>
  );
};

export default SliderImage;