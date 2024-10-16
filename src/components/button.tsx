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
        padding: '{spacing.2} {spacing.4}',
        fontSize: 'xs',
      },
      md: {
        height: '54px',
        minWidth: '132px',
        //padding: '{spacing.3} {spacing.5}',
        fontSize: 'sm',
      },
      lg: {
        height: '54px',
        minWidth: '157px',
        //padding: '{spacing.4} {spacing.6}',
        fontSize: 'sm',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
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
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

const StyledButton = styled('button', buttonStyles);

export default function Button({ children, variant, size, fullWidth, loading, disabled, ...props }: ButtonProps) {
  return (
    <StyledButton 
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {children}
    </StyledButton>
  );
}