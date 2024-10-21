import React from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "../../../styled-system/css";
import { flex, container } from "../../../styled-system/patterns";

type FooterNavigation = {
  name: string;
  href: string;
};

const footerNavigations: FooterNavigation[] = [
  { name: "ABOUT US", href: "/about" },
  { name: "CAREERS", href: "/careers" },
  { name: "PRESS", href: "/press" },
  { name: "AWARDS", href: "/awards" },
  { name: "TERMS OF SERVICE", href: "/terms-of-service" },
  { name: "PRIVACY POLICY", href: "/privacy-policy" },
  { name: "CONTACT US", href: "/contact-us" },
];

const FooterNavigation: React.FC = () => {
  return (
    <footer className={css({ 
      bg: "{colors.gray.900}", 
      color: "{colors.base.white}", 
      w: { base: "full", md: "container.md", lg: "container.lg", xl: "container.xl", "2xl": "container.2xl" },
      minH: { base: "auto", md: "{sizes.48}" },
      mx: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    })}>
      <div className={container({ 
        maxWidth: { base: "full", md: "container.md", lg: "container.lg", xl: "container.xl", "2xl": "container.2xl" },
        w: "full",
        px: { base: "4", md: "6", lg: "{spacing.8}", xl: "{spacing.16}", "2xl": "{spacing.24}" },
        py: { base: "8", md: "0" },
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        alignItems: { base: "center", md: "center" },
        justifyContent: { base: "center", md: "space-between" },
        gap: { base: "8", md: "4", lg: "0" },
      })}>
        <div className={flex({ 
          alignItems: "center", 
          justifyContent: { base: "center", md: "flex-start" }, 
          mb: { base: "{spacing.6}", md: "0" },
          flexShrink: 0,
        })}>
          <Link href="/" className={css({ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: { base: "center", md: "flex-start" }
          })}>
            <Image
              src="/images/logo/logo-white.svg"
              alt="Storade Logo"
              width={150}
              height={28.8}
              className={css({
                width: { base: "{sizes.30}", md: "{sizes.32}", lg: "{sizes.36}", xl: "{sizes.40}" },
                height: "auto",
                mb: "{spacing.2.5}",
              })}
            />
            <span className={css({ 
              display: "block", 
              whiteSpace: { base: "normal", md: "nowrap" }, 
              fontSize: { base: "{fontSizes.xs}", md: "{fontSizes.sm}" },
              fontWeight: "{fontWeights.normal}",
              lineHeight: { base: "{lineHeights.tight}", md: "18.27px" }, 
              color: "{colors.gray.400}", 
              width: { base: "full", md: "{sizes.48}", lg: "{sizes.56}", xl: "{sizes.64}" },
              textAlign: { base: "center", md: "left" },
            })}>
              Everything you need for your business
            </span>
          </Link>
        </div>
        <nav className={flex({ 
          alignItems: "center",
          flexDirection: { base: "column", sm: "row", md: "row" },
          flexWrap: "wrap",
          justifyContent: { base: "center", md: "flex-end" },
          gap: { base: "{spacing.4}", sm: "{spacing.2}", md: "{spacing.3}", lg: "{spacing.3.5}" },
          width: { base: "full", md: "auto" },
        })}>
          <span className={css({ 
            display: { base: "none", lg: "inline-flex" },
            mr: { md: "{spacing.2}", lg: "{spacing.3.5}" }, 
            color: "{colors.gray.600}",
            fontSize: { md: "{fontSizes.lg}", lg: "{fontSizes.xl}" },
            lineHeight: "{lineHeights.none}",
            alignItems: "center",
            height: "{sizes.8}",
          })}>|</span>
          {footerNavigations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={css({
                fontSize: { base: "{fontSizes.xs}", sm: "{fontSizes.sm}", md: "{fontSizes.sm}" },
                fontWeight: "{fontWeights.black}",
                lineHeight: { base: "{lineHeights.normal}", md: "16.94px" },
                whiteSpace: "nowrap",
                color: "{colors.base.white}",
                position: "relative",
                transition: "color 0.2s",
                py: { base: "{spacing.2}", md: "0" },
                px: { base: "{spacing.2}", sm: "{spacing.1}", md: "{spacing.2}" },
                _hover: { 
                  color: "{colors.gray.300}",
                  _after: { transform: "scaleX(1)" },
                },
                _after: {
                  content: '""',
                  position: "absolute",
                  left: "0",
                  bottom: "-2px",
                  w: "full",
                  h: "{sizes.0.5}",
                  bg: "{colors.gray.300}",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s",
                  transformOrigin: "left",
                },
              })}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default FooterNavigation;