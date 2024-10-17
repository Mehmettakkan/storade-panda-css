import React from "react";
import Link from "next/link";
import { css } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";

type FooterColumn = {
  title: string;
  items: string[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    items: [
      "Invoice",
      "Point of sale",
      "Expense",
      "Online Market",
      "Migration",
      "Marketplace",
      "Sales Channels",
      "Sales",
      "Checkout",
      "Inventory",
    ],
  },
  {
    title: "Resources",
    items: [
      "Overview",
      "Articles",
      "Guides",
      "Webinars",
      "Podcast",
      "Events",
      "Ecommerce blog",
      "Developer blog",
    ],
  },
  {
    title: "Partner",
    items: [
      "Overview",
      "Become a partner",
      "Find a partner",
      "Affiliates",
      "Partner offers",
    ],
  },
  {
    title: "Customer",
    items: ["Case studies", "Store examples"],
  },
];

const footerStyle = css({
  bg: "gray.100",
  color: "gray.900",
  py: "12",
  w: "container.3xl",
  mx: "auto",
  px: "40", // 160px = 40 * 4px (base size)
});

const containerStyle = css({
  maxWidth: "container.xl",
  mx: "auto",
});

const gridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "52", // 200px = 50 * 4px
});

const titleStyle = css({
  fontSize: "lg",
  fontWeight: "bold",
  lineHeight: "normal",
  mb: "8", // 30px ~= 8 * 4px
  color: "gray.900",
});

const listStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "4", // 16px = 4 * 4px
});

const linkStyle = css({
  fontSize: "md",
  fontWeight: "normal",
  lineHeight: "normal",
  color: "gray.500",
  _hover: {
    color: "gray.700",
  },
  transition: "colors",
  transitionDuration: "normal",
});

const FooterColumn: React.FC = () => {
  return (
    <footer className={footerStyle}>
      <div className={containerStyle}>
        <div className={gridStyle}>
          {footerColumns.map((footerColumn, index) => (
            <div key={index}>
              <h2 className={titleStyle}>{footerColumn.title}</h2>
              <ul className={listStyle}>
                {footerColumn.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className={linkStyle}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterColumn;