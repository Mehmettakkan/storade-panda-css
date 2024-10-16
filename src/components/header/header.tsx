"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "../../../styled-system/css";
import { flex, container, hstack } from "../../../styled-system/patterns";
import { styled } from "../../../styled-system/jsx";
import Button from "../button";
import MegamenuContentProducts from "@/app/(inner)/products/megamenu/mega-menu-content-products";
import MegamenuContentIntegrations from "@/app/(inner)/integrations/megamenu/mega-menu-content-integrations";
import MegaMenuContentResources from "@/app/(inner)/resources/megamenu/mega-menu-content-resources";
import MegaMenuContentSupport from "@/app/(inner)/support/megamenu/mega-menu-content-support";

const menuItems = [
  { name: "Products", href: "/products", content: MegamenuContentProducts },
  {
    name: "Integrations",
    href: "/integrations",
    content: MegamenuContentIntegrations,
  },
  { name: "Customers", href: "/customers", content: null },
  { name: "Pricing", href: "/pricing", content: null },
  { name: "Resources", href: "/resources", content: MegaMenuContentResources },
  { name: "Support", href: "/support", content: MegaMenuContentSupport },
];

const MegaMenuItem = styled("div", {
  base: {
    position: "relative",
    "& > a": {
      position: "relative",
      color: "text.primary",
      fontWeight: "medium",
      fontSize: "md",
      lineHeight: "snug",
      transition:
        "color {animations.durations.normal} {animations.easings.easeInOut}",
      letterSpacing: "wide",
      padding: "2 3",
      borderRadius: "md",
      _hover: {
        color: "accent.primary",
        bg: "gray.50",
      },
      _after: {
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: "0",
        width: "0",
        height: "2px",
        bg: "accent.primary",
        transition:
          "width {animations.durations.normal} {animations.easings.easeInOut}",
      },
    },
    '&[data-active="true"] > a::after': {
      width: "100%",
    },
  },
});

const Header = () => {
  const [isMegamenuVisible, setMegamenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megamenuRef = useRef<HTMLDivElement>(null);

  const showMegamenu = (menu: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(menu);
    setMegamenuVisible(true);
  };

  const hideMegamenu = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setMegamenuVisible(false);
      setActiveMenu(null);
    }, 200);
  };

  const activeItem = menuItems.find((item) => item.name === activeMenu);

  return (
    <header
      className={css({
        width: "full",
        bg: "bg-primary",
        position: "sticky",
        top: "0",
        zIndex: "docked",
      })}
    >
      <div
        className={container({
          maxWidth: "container.3xl",
          px: "160px", // Custom padding as per requirement
          py: "4",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <div className={hstack({ gap: "60px" })}>
          <Link
            href="/"
            className={css({
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              _hover: { opacity: 0.8 },
            })}
          >
            <Image
              src="/images/logo-dark.svg"
              alt="Storade Logo"
              width={150}
              height={29}
              className={css({
                width: "150px",
                height: "29px",
              })}
            />
          </Link>

          <div className={hstack({ gap: "30px" })}>
            <div
              className={css({
                width: "1px",
                height: "8",
                bg: "gray.200",
              })}
            />

            <nav
              className={css({
                display: { base: "none", lg: "flex" },
                alignItems: "center",
                gap: "30px", // As per requirement
              })}
            >
              {menuItems.map((item) => (
                <MegaMenuItem
                  key={item.name}
                  data-active={activeMenu === item.name}
                  onMouseEnter={() => showMegamenu(item.name)}
                  onMouseLeave={hideMegamenu}
                >
                  <Link href={item.href}>{item.name}</Link>
                </MegaMenuItem>
              ))}
            </nav>
          </div>
        </div>

        <div
          className={css({
            display: { base: "none", lg: "flex" },
            alignItems: "center",
            gap: "24px",
          })}
        >
          <Link
            href="/login"
            className={css({
              color: "text.primary",
              fontWeight: "medium",
              fontSize: "md",
              textDecoration: "none",
              transition:
                "color {animations.durations.normal} {animations.easings.easeInOut}",
              _hover: {
                color: "accent.primary",
              },
            })}
          >
            LOGIN
          </Link>
          <Link href="/subscribe">
            <Button variant="primary" size="md">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>

      {isMegamenuVisible && activeItem?.content && (
        <div
          ref={megamenuRef}
          className={css({
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "full",
            maxWidth: "container.xl",
            zIndex: "dropdown",
            transition:
              "opacity {animations.durations.normal} {animations.easings.easeInOut}",
          })}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              clearTimeout(hoverTimeoutRef.current);
              hoverTimeoutRef.current = null;
            }
            setMegamenuVisible(true);
          }}
          onMouseLeave={hideMegamenu}
        >
          <activeItem.content />
        </div>
      )}
    </header>
  );
};

export default Header;
