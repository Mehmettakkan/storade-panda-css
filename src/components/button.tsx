import React from 'react';
import { styled } from '../../styled-system/jsx';
import { cva } from '../../styled-system/css';

const buttonStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    fontFamily: 'body',
    fontSize: 'sm',
    lineHeight: "none",
    transition: 'all {animations.durations.normal} {animations.easings.easeInOut}',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    outline: 'none',
    position: 'relative',
    borderRadius: 'full',
    border: '1px solid transparent',
    _hover: {
      transform: 'translateY(-1px)',
    },
    _focus: {
      boxShadow: 'focus.default',
    },
    _active: {
      transform: 'translateY(1px)',
    },
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      _hover: {
        transform: 'none',
        boxShadow: 'none',
      },
    },
  },
  variants: {
    variant: {
      primary: {
        bg: '{colors.button-bg-primary}',
        color: '{colors.button-text-primary}',
        _hover: {
          bg: '{colors.button-bg-primary-hover}',
          boxShadow: 'elevation.sm',
        },
      },
      secondary: {
        bg: 'transparent',
        color: '{colors.button-text-secondary}',
        borderColor: '{colors.button-border-secondary}',
        _hover: {
          bg: '{colors.button-bg-secondary-hover}',
          boxShadow: 'elevation.sm',
        },
      },
    },
    size: {
      sm: {
        height: '40px',
        minWidth: '100px',
        fontSize: 'xs',  // Artırıldı: '2xs' -> 'xs'
      },
      md: {
        height: '54px',
        minWidth: '132px',
        fontSize: 'sm',  // Artırıldı: 'xs' -> 'sm'
      },
      lg: {
        height: '68px',
        minWidth: '164px',
        fontSize: 'md',  // Artırıldı: 'sm' -> 'md'
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
    loading: {
      true: {
        position: 'relative',
        color: 'transparent',
        pointerEvents: 'none',
        _after: {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1em',
          height: '1em',
          borderRadius: 'full',
          border: '2px solid',
          borderColor: 'currentcolor',
          borderRightColor: 'transparent',
          animation: `spin {animations.durations.slow} linear infinite`,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | { base?: 'sm' | 'md' | 'lg', sm?: 'sm' | 'md' | 'lg', md?: 'sm' | 'md' | 'lg', lg?: 'sm' | 'md' | 'lg', xl?: 'sm' | 'md' | 'lg' };
  fullWidth?: boolean | { base?: boolean; sm?: boolean; md?: boolean; lg?: boolean; xl?: boolean };
  loading?: boolean;
}

const StyledButton = styled('button', buttonStyles);

const sizeStyles = {
  sm: { height: '40px', minWidth: '100px', fontSize: 'xs' },  // Artırıldı: '2xs' -> 'xs'
  md: { height: '54px', minWidth: '132px', fontSize: 'sm' },  // Artırıldı: 'xs' -> 'sm'
  lg: { height: '68px', minWidth: '164px', fontSize: 'md' },  // Artırıldı: 'sm' -> 'md'
};

export default function Button({ children, variant, size, fullWidth, loading, disabled, ...props }: ButtonProps) {
  const getResponsiveSize = (breakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl') => {
    if (typeof size === 'object') {
      const breakpointSize = size[breakpoint] || size.base || 'md';
      return sizeStyles[breakpointSize];
    }
    return undefined;
  };

  const responsiveSize = typeof size === 'object' ? {
    height: {
      base: getResponsiveSize('base')?.height,
      sm: getResponsiveSize('sm')?.height,
      md: getResponsiveSize('md')?.height,
      lg: getResponsiveSize('lg')?.height,
      xl: getResponsiveSize('xl')?.height,
    },
    minWidth: {
      base: getResponsiveSize('base')?.minWidth,
      sm: getResponsiveSize('sm')?.minWidth,
      md: getResponsiveSize('md')?.minWidth,
      lg: getResponsiveSize('lg')?.minWidth,
      xl: getResponsiveSize('xl')?.minWidth,
    },
    fontSize: {
      base: getResponsiveSize('base')?.fontSize,
      sm: getResponsiveSize('sm')?.fontSize,
      md: getResponsiveSize('md')?.fontSize,
      lg: getResponsiveSize('lg')?.fontSize,
      xl: getResponsiveSize('xl')?.fontSize,
    },
  } : undefined;

  const responsiveFullWidth = typeof fullWidth === 'object' ? {
    width: {
      base: fullWidth.base ? '100%' : 'auto',
      sm: fullWidth.sm ? '100%' : 'auto',
      md: fullWidth.md ? '100%' : 'auto',
      lg: fullWidth.lg ? '100%' : 'auto',
      xl: fullWidth.xl ? '100%' : 'auto',
    }
  } : undefined;

  return (
    <StyledButton 
      variant={variant}
      size={typeof size === 'string' ? size : undefined}
      fullWidth={typeof fullWidth === 'boolean' ? fullWidth : undefined}
      loading={loading}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...responsiveSize}
      {...responsiveFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
}