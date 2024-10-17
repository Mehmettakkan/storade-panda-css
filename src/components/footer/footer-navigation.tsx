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
      bg: "#0E0E0E", 
      color: "base.white", 
      w: "container.3xl", // 1600px
      h: "48",
      mx: "auto",
      px: "40", // 160px için en yakın token değeri
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    })}>
      <div className={container({ 
        maxWidth: "container.2xl", // 1280px
        w: "full",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}>
        <div className={flex({ alignItems: "center" })}>
          <Link href="/" className={css({ display: "flex", flexDirection: "column" })}>
            <Image
              src="/images/logo-white.svg"
              alt="Storade Logo"
              width={150}
              height={28.8}
              className={css({
                width: "150px",
                height: "28.8px",
                mb: "2.5", // 10px
              })}
            />
            <span className={css({ 
              display: "block", 
              whiteSpace: "nowrap", 
              fontSize: "sm", // 14px
              fontWeight: "normal",
              lineHeight: "18.27px", 
              color: "gray.400", 
              width: "64", // 256px
              height: "4", // 18px
            })}>
              Everything you need for your business
            </span>
          </Link>
        </div>
        <nav className={flex({ alignItems: "center" })}>
        <span className={css({ 
            mr: "3.5", 
            color: "gray.600",
            fontSize: "xl", // 20px için en yakın değer
            lineHeight: "none",
            display: "inline-flex",
            alignItems: "center",
            height: "8", // Orijinal dikey çizgi ile aynı yükseklik
          })}>|</span>
          {footerNavigations.map((item, index) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className={css({
                  fontSize: "sm", // 14px
                  fontWeight: "900",
                  lineHeight: "16.94px",
                  whiteSpace: "nowrap",
                  color: "base.white",
                  position: "relative",
                  transition: "color 0.2s",
                  _hover: { 
                    color: "gray.300",
                    _after: { transform: "scaleX(1)" },
                  },
                  _after: {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    bottom: "-2px",
                    w: "full",
                    h: "0.5",
                    bg: "gray.300",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s",
                    transformOrigin: "left",
                  },
                })}
              >
                {item.name}
              </Link>
              {index < footerNavigations.length - 1 && (
                <div className={css({ mx: "3.5" })}></div> // 15px için en yakın değer
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default FooterNavigation;