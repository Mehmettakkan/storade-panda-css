import React from "react";
import Link from "next/link";
import { Globe, ChevronDown } from 'lucide-react';
import { css } from "../../../styled-system/css";
import { flex, container } from "../../../styled-system/patterns";

type FooterBottom = {
  name: string;
  href: string;
};

const footerBottoms: FooterBottom[] = [
  { name: "Legal", href: "/legal" },
  { name: "Terms of Use", href: "/terms-of-use" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sales and Refunds", href: "/sales-and-refunds" },
];

const FooterBottom: React.FC = () => {
  return (
    <footer className={css({
      bg: "{colors.gray.900}",
      color: "{colors.base.white}",
      w: { base: "full", md: "container.md", lg: "container.lg", xl: "container.xl", "2xl": "container.2xl" },
      minH: { base: "auto", md: "{sizes.16}" },
      mx: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    })}>
      <div className={container({
        maxWidth: { base: "full", md: "container.md", lg: "container.lg", xl: "container.xl", "2xl": "container.2xl" },
        w: "full", 
        px: { base: "4", md: "6", lg: "8", xl: "16", "2xl": "24" },
        py: { base: "4", md: "5" },
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        alignItems: "center",
        justifyContent: { base: "center", md: "space-between" },
        gap: { base: "{spacing.4}", md: "{spacing.8}" },
      })}>
        <p className={css({
          fontSize: "{fontSizes.sm}",
          fontWeight: "{fontWeights.normal}",
          lineHeight: "{lineHeights.normal}",
          order: { base: "3", md: "1" },
        })}>
          &copy; 2022 Storade Co.
        </p>

        <ul className={flex({
          flexWrap: "wrap",
          justifyContent: { base: "center", md: "flex-start" },
          gap: { base: "{spacing.4}", md: "{spacing.8}" },
          order: { base: "1", md: "2" },
        })}>
          {footerBottoms.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={css({
                fontSize: "{fontSizes.sm}",
                fontWeight: "{fontWeights.normal}", 
                lineHeight: "{lineHeights.normal}",
                _hover: { color: "{colors.gray.300}" },
              })}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={flex({
          alignItems: "center",
          gap: "{spacing.2}",
          fontSize: "{fontSizes.sm}",
          fontWeight: "{fontWeights.normal}",
          lineHeight: "{lineHeights.normal}", 
          order: { base: "2", md: "3" },
        })}>
          <Globe size={16} />
          <span>USA - EN</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;