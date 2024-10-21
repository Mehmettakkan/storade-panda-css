import React from "react";
import Link from "next/link";
import { css } from "../../../styled-system/css";
import { container, grid } from "../../../styled-system/patterns";

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

const FooterColumn: React.FC = () => {
  return (
    <footer className={css({
      bg: "{colors.gray.100}",
      color: "{colors.gray.900}",
      py: { base: "{spacing.8}", md: "{spacing.12}" },
    })}>
      <div className={container({
        maxWidth: { base: "full", md: "container.md", lg: "container.lg", xl: "container.xl", "2xl": "container.2xl" },
        w: "full",
        px: { base: "4", md: "6", lg: "8", xl: "16", "2xl": "24" },
        mx: "auto",
      })}>
        <div className={grid({
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: { base: "{spacing.6}", md: "{spacing.8}", lg: "{spacing.10}" },
          alignItems: "start",
        })}>
          {footerColumns.map((footerColumn) => (
            <div key={footerColumn.title}>
              <h2 className={css({
                fontSize: { base: "{fontSizes.sm}", md: "{fontSizes.md}" },
                fontWeight: "{fontWeights.bold}",
                lineHeight: "{lineHeights.normal}",
                mb: { base: "{spacing.3}", md: "{spacing.4}" },
                color: "{colors.gray.900}",
              })}>{footerColumn.title}</h2>
              <ul className={css({
                display: "flex",
                flexDirection: "column",
                gap: { base: "{spacing.1}", md: "{spacing.2}" },
              })}>
                {footerColumn.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className={css({
                        fontSize: { base: "{fontSizes.xs}", md: "{fontSizes.sm}" },
                        fontWeight: "{fontWeights.normal}",
                        lineHeight: "{lineHeights.normal}",
                        color: "{colors.gray.500}",
                        _hover: {
                          color: "{colors.gray.700}",
                        },
                        transition: "colors",
                        transitionDuration: "{durations.normal}",
                      })}
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