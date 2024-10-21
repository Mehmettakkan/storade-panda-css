import React from 'react';
import Link from 'next/link';
import { css, cx } from '../../../styled-system/css';

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

interface MobileMegamenuTemplateProps {
  sections: Section[];
  support?: {
    title: string;
    items: SupportItem[];
  };
  styles?: {
    menu?: string;
    section?: string;
    item?: string;
    icon?: string;
    title?: string;
    description?: string;
    supportSection?: string;
    supportTitle?: string;
    supportItem?: string;
    supportLink?: string;
  };
}

const defaultStyles = {
  menu: css({
    bg: 'base.white',
    w: 'full',
  }),
  section: css({
    mb: 6,
  }),
  item: css({
    display: 'flex',
    alignItems: 'center',
    p: 4,
    _hover: { bg: 'blue.50' },
    transition: 'colors',
    transitionDuration: '300ms',
  }),
  icon: css({
    mr: 3,
    w: 6,
    h: 6,
    color: 'blue.500',
  }),
  title: css({
    fontSize: 'sm',
    fontWeight: 'semibold',
    color: 'gray.900',
  }),
  description: css({
    fontSize: 'xs',
    color: 'gray.600',
    lineHeight: 'relaxed',
  }),
  supportSection: css({
    bg: 'blue.50',
    p: 4,
    mt: 4,
  }),
  supportTitle: css({
    fontSize: 'md',
    fontWeight: 'bold',
    color: 'gray.800',
    mb: 4,
    textTransform: 'uppercase',
    letterSpacing: 'wide',
  }),
  supportItem: css({
    display: 'flex',
    alignItems: 'flex-start',
    mb: 4,
  }),
  supportLink: css({
    color: 'blue.500',
    fontSize: 'xs',
    mt: 1,
    display: 'flex',
    alignItems: 'center',
    _hover: { color: 'blue.700' },
    transition: 'colors',
    transitionDuration: '300ms',
  }),
};

const MobileMegamenuTemplate: React.FC<MobileMegamenuTemplateProps> = ({ sections, support, styles = {} }) => {
  const mergedStyles = {
    menu: cx(defaultStyles.menu, styles.menu),
    section: cx(defaultStyles.section, styles.section),
    item: cx(defaultStyles.item, styles.item),
    icon: cx(defaultStyles.icon, styles.icon),
    title: cx(defaultStyles.title, styles.title),
    description: cx(defaultStyles.description, styles.description),
    supportSection: cx(defaultStyles.supportSection, styles.supportSection),
    supportTitle: cx(defaultStyles.supportTitle, styles.supportTitle),
    supportItem: cx(defaultStyles.supportItem, styles.supportItem),
    supportLink: cx(defaultStyles.supportLink, styles.supportLink),
  };

  return (
    <div className={mergedStyles.menu}>
      {sections.map((section, index) => (
        <div key={index} className={mergedStyles.section}>
          <div>
            {section.items.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className={mergedStyles.item}
              >
                <div className={mergedStyles.icon}>{item.icon}</div>
                <div>
                  <h4 className={mergedStyles.title}>{item.title}</h4>
                  <p className={mergedStyles.description}>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {support && support.items.length > 0 && (
        <div className={mergedStyles.supportSection}>
          <h3 className={mergedStyles.supportTitle}>{support.title}</h3>
          <div>
            {support.items.map((item, index) => (
              <div key={index} className={mergedStyles.supportItem}>
                <div className={mergedStyles.icon}>{item.icon}</div>
                <div>
                  <h4 className={mergedStyles.title}>{item.title}</h4>
                  <p className={mergedStyles.description}>{item.description}</p>
                  <Link href={item.link} className={mergedStyles.supportLink}>
                    {item.linkText}
                    <svg
                      className={css({ ml: 1, w: 3, h: 3 })}
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
  );
};

export default MobileMegamenuTemplate;