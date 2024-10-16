import React from 'react';
import Link from 'next/link';
import { css } from '../../../styled-system/css';
import { flex,grid, vstack} from '../../../styled-system/patterns';

interface MegamenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

interface Section {
  title: string;
  items: MegamenuItem[];
}

interface SupportItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

interface MegamenuTemplateProps {
  sections: Section[];
  support?: {
    title: string;
    items: SupportItem[];
  };
}

const Icon: React.FC<{ children: React.ReactNode; size: 'main' | 'support' }> = ({ children, size }) => (
  <div className={css({
    mr: '4',
    color: size === 'main' ? 'accent-primary' : 'text-primary',
    transition: 'color {animations.durations.fast} {animations.easings.easeInOut}',
    '& > *': {
      width: '{spacing.4}',
      height: '{spacing.4}',
    }
  })}>
    {children}
  </div>
);

const MegamenuTemplate: React.FC<MegamenuTemplateProps> = ({ sections, support }) => {
  const hasSupport = support && support.items.length > 0;

  return (
    <div
      className={css({
        bg: 'bg-primary',
        boxShadow: 'elevation.lg',
        borderRadius: '3xl',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '{sizes.container.xl}',
        mx: 'auto',
        transition: 'all {animations.durations.normal} {animations.easings.easeInOut}',
      })}
    >
      <div className={flex({ direction: { base: 'column', lg: 'row' } })}>
        <div className={css({ 
          width: 'full',
          maxWidth: hasSupport ? '66%' : '100%',
          p: '8',
        })}>
          {sections.map((section, index) => (
            <div key={index} className={css({ mb: '10' })}>
              <h3 className={css({
                fontSize: '2xl',
                fontWeight: 'bold',
                color: 'text-primary',
                mb: '6',
                textTransform: 'uppercase',
                letterSpacing: 'widest',
              })}>
                {section.title}
              </h3>
              <div className={grid({ 
                gap: '6',
                gridTemplateColumns: {
                  base: '1fr',
                  sm: 'repeat(auto-fill, minmax(250px, 1fr))',
                  md: 'repeat(auto-fill, minmax(300px, 1fr))',
                },
              })}>
                {section.items.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={idx}
                    className={css({
                      display: 'flex',
                      flexDirection: 'column',
                      p: '5',
                      minHeight: '{sizes.32}',
                      borderRadius: 'xl',
                      transition: 'all {animations.durations.fast} {animations.easings.easeInOut}',
                      cursor: 'pointer',
                      bg: 'transparent',
                      _hover: { 
                        bg: 'bg-secondary',
                        boxShadow: 'elevation.md',
                        transform: 'translateY(-2px)',
                      },
                    })}
                  >
                    <div className={flex({ alignItems: 'center', mb: '4' })}>
                      <Icon size="main">{item.icon}</Icon>
                      <h4 className={css({
                        fontSize: 'lg',
                        fontWeight: 'semibold',
                        color: 'text-primary',
                        transition: 'color {animations.durations.fast} {animations.easings.easeInOut}',
                      })}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={css({
                      fontSize: 'sm',
                      color: 'text-secondary',
                      lineHeight: 'relaxed',
                    })}>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasSupport && (
          <div className={css({ 
            width: 'full',
            maxWidth: '34%',
            bg: 'blue.50', // Lighter blue background for support section
            p: '8',
            borderLeft: '1px solid',
            borderColor: 'divider',
          })}>
            <h3 className={css({
              fontSize: '2xl',
              fontWeight: 'bold',
              color: 'text-primary',
              mb: '6',
              textTransform: 'uppercase',
              letterSpacing: 'widest',
            })}>
              {support.title}
            </h3>
            <div className={vstack({ gap: '6' })}>
              {support.items.map((item, index) => (
                <div key={index} className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'xl',
                  p: '5',
                  bg: 'base.white',
                  transition: 'all {animations.durations.fast} {animations.easings.easeInOut}',
                  _hover: { 
                    bg: 'bg-secondary',
                    boxShadow: 'elevation.md',
                    transform: 'translateY(-2px)',
                  },
                })}>
                  <Icon size="support">{item.icon}</Icon>
                  <div>
                    <h4 className={css({
                      fontSize: 'lg',
                      fontWeight: 'bold',
                      color: 'text-primary',
                      mb: '2',
                    })}>
                      {item.title}
                    </h4>
                    <p className={css({
                      fontSize: 'sm',
                      color: 'text-secondary',
                      lineHeight: 'relaxed',
                      mb: '3',
                    })}>
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className={css({
                        color: 'accent-primary',
                        fontSize: 'sm',
                        fontWeight: 'medium',
                        display: 'flex',
                        alignItems: 'center',
                        _hover: { color: 'accent-primaryHover' },
                        transition: 'color {animations.durations.fast} {animations.easings.easeInOut}',
                      })}
                    >
                      {item.linkText}
                      <svg
                        className={css({ ml: '2', width: '5', height: '5' })}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegamenuTemplate;