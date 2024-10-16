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
      color: "white", 
      w: "1600px", 
      h: "180px",
      mx: "auto",
      px: "160px",
    })}>
      <div className={container({ 
        maxWidth: "1280px",
        mx: "auto", 
        h: "full",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}>
        <div className={flex({ alignItems: "center", gap: "200px" })}>
          <Link href="/" className={css({ display: "flex", flexDirection: "column" })}>
            <Image
              src="/images/logo-white.svg"
              alt="Storade Logo"
              width={150}
              height={28.8}
              className={css({
                width: "150px",
                height: "28.8px",
                mb: "10px",
              })}
            />
            <span className={css({ 
              display: "block", 
              whiteSpace: "nowrap", 
              fontSize: "14px", 
              fontWeight: "400", 
              lineHeight: "18.27px", 
              color: "gray.400", 
              width: "256px",
              height: "18px",
            })}>
              Everything you need for your business
            </span>
          </Link>
        </div>
        <nav className={flex({ alignItems: "center" })}>
          <div className={css({ h: "8", w: "1px", bg: "gray.600", mr: "30px" })}></div>
          {footerNavigations.map((item, index) => (
            <React.Fragment key={item.name}>
              <Link
                href={item.href}
                className={css({
                  fontSize: "14px",
                  fontWeight: "900",
                  lineHeight: "16.94px",
                  whiteSpace: "nowrap",
                  color: "white",
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
                <div className={css({ mx: "15px" })}></div>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default FooterNavigation;