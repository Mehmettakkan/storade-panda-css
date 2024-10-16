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

const footerStyle = css({
  bg: "#0a0f1a",
  color: "white",
  height: "62px",
  width: "1600px",
  margin: "0 auto",
  px: "160px", // Add 160px padding on both sides
});

const containerStyle = container({
  maxWidth: "1280px",
  height: "full",
  mx: "auto",
});

const contentStyle = css({
  height: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const copyrightStyle = css({
  width: "134px",
  height: "19px",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19.36px",
});

const menuStyle = css({
  display: "flex",
  gap: "30px",
});

const linkStyle = css({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "16.94px",
  _hover: { color: "gray.300" },
});

const languageStyle = css({
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "16.94px",
});

const FooterBottom: React.FC = () => {
  return (
    <footer className={footerStyle}>
      <div className={containerStyle}>
        <div className={contentStyle}>
          <p className={copyrightStyle}>2022 Storade Co.</p>

          <ul className={menuStyle}>
            {footerBottoms.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={linkStyle}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={languageStyle}>
            <Globe size={13} className={css({ marginRight: "1.5" })} />
            <span className={css({ marginRight: "1" })}>USA - EN</span>
            <ChevronDown size={13} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;