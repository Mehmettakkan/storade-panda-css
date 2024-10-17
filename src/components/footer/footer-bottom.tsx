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
  bg: "gray.900",
  color: "base.white",
  height: "16",
  width: "container.3xl",
  margin: "0 auto",
  px: "40", // 160px = 40 * 4px (base size)
});

const containerStyle = container({
  maxWidth: "container.2xl",
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
  width: "32", // 134px = 33.5 * 4px (rounded up)
  height: "5", // 19px ~= 5 * 4px
  fontSize: "md",
  fontWeight: "normal",
  lineHeight: "normal",
});

const menuStyle = css({
  display: "flex",
  gap: "8", // 30px ~= 8 * 4px
});

const linkStyle = css({
  fontSize: "sm",
  fontWeight: "normal",
  lineHeight: "normal",
  _hover: { color: "gray.300" },
});

const languageStyle = css({
  display: "flex",
  alignItems: "center",
  fontSize: "sm",
  fontWeight: "normal",
  lineHeight: "normal",
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