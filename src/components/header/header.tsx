import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "../../../styled-system/css";
import { container, hstack } from "../../../styled-system/patterns";
import { styled } from "../../../styled-system/jsx";
import Button from "../button";
import MegamenuContentProducts from "@/app/(inner)/products/megamenu/mega-menu-content-products";
import MegamenuContentIntegrations from "@/app/(inner)/integrations/megamenu/mega-menu-content-integrations";
import MegaMenuContentResources from "@/app/(inner)/resources/megamenu/mega-menu-content-resources";
import MegaMenuContentSupport from "@/app/(inner)/support/megamenu/mega-menu-content-support";

// Types
type MenuItem = {
  name: string;
  href: string;
  content: React.ComponentType | null;
};

// Constants
const MENU_ITEMS: MenuItem[] = [
  { name: "Products", href: "/products", content: MegamenuContentProducts },
  { name: "Integrations", href: "/integrations", content: MegamenuContentIntegrations },
  { name: "Customers", href: "/customers", content: null },
  { name: "Pricing", href: "/pricing", content: null },
  { name: "Resources", href: "/resources", content: MegaMenuContentResources },
  { name: "Support", href: "/support", content: MegaMenuContentSupport },
];

const HOVER_DELAY = 200;

// Styled components
const MegaMenuItem = styled("div", {
  base: {
    position: "relative",
    "& > a": {
      position: "relative",
      color: "{colors.gray.800}",
      fontWeight: "{fontWeights.medium}",
      fontSize: { lg: "{fontSizes.sm}", xl: "{fontSizes.md}" },
      lineHeight: "{lineHeights.snug}",
      transition: "color 0.2s ease-in-out",
      letterSpacing: "{letterSpacings.wide}",
      padding: { lg: "{spacing.1} {spacing.2}", xl: "{spacing.2} {spacing.3}" },
      borderRadius: "{radii.md}",
      whiteSpace: "nowrap",
      _hover: {
        color: "{colors.blue.500}",
        bg: "{colors.gray.50}",
      },
      _after: {
        content: '""',
        position: "absolute",
        bottom: "{spacing.-0.5}",
        left: "0",
        width: "0",
        height: "{sizes.0.5}",
        bg: "{colors.blue.500}",
        transition: "width 0.2s ease-in-out",
      },
    },
    '&[data-active="true"] > a::after': {
      width: "100%",
    },
  },
});

// Components
const Logo = () => (
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
      src="/images/logo/logo-dark.svg"
      alt="Storade Logo"
      width={150}
      height={29}
      className={css({
        width: { lg: "{sizes.32}", xl: "{sizes.40}" },
        height: "auto",
      })}
    />
  </Link>
);

const NavItem = ({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  item: MenuItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => (
  <MegaMenuItem
    data-active={isActive}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link href={item.href}>{item.name}</Link>
  </MegaMenuItem>
);

const Header = () => {
  const [isMegamenuVisible, setMegamenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megamenuRef = useRef<HTMLDivElement>(null);

  const showMegamenu = useCallback((menu: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(menu);
    setMegamenuVisible(true);
  }, []);

  const hideMegamenu = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setMegamenuVisible(false);
      setActiveMenu(null);
    }, HOVER_DELAY);
  }, []);

  const activeItem = MENU_ITEMS.find((item) => item.name === activeMenu);

  return (
    <header
      className={css({
        width: "full",
        bg: "{colors.base.white}",
        position: "sticky",
        top: "0",
        zIndex: "{zIndices.docked}",
        display: { base: "none", lg: "block" },
      })}
    >
      <div
        className={container({
          maxWidth: {
            lg: "{sizes.container.lg}",
            xl: "{sizes.container.xl}",
            "2xl": "{sizes.container.2xl}",
          },
          px: { lg: "{spacing.8}", xl: "{spacing.16}", "2xl": "{spacing.24}" },
          py: { lg: "{spacing.3}", xl: "{spacing.4}" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <div
          className={hstack({
            gap: {
              lg: "{spacing.4}",
              xl: "{spacing.8}",
              "2xl": "{spacing.16}",
            },
          })}
        >
          <Logo />

          <div className={hstack({ gap: { lg: "{spacing.4}", xl: "{spacing.8}" } })}>
            <div
              className={css({
                width: "{spacing.px}",
                height: { lg: "{spacing.6}", xl: "{spacing.8}" },
                bg: "{colors.gray.200}",
              })}
            />

            <nav
              className={css({
                display: "flex",
                alignItems: "center",
                gap: { lg: "{spacing.2}", xl: "{spacing.4}" },
              })}
            >
              {MENU_ITEMS.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeMenu === item.name}
                  onMouseEnter={() => showMegamenu(item.name)}
                  onMouseLeave={hideMegamenu}
                />
              ))}
            </nav>
          </div>
        </div>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: { lg: "{spacing.4}", xl: "{spacing.6}" },
          })}
        >
          <Link
            href="/login"
            className={css({
              color: "{colors.gray.800}",
              fontWeight: "{fontWeights.medium}",
              fontSize: { lg: "{fontSizes.sm}", xl: "{fontSizes.md}" },
              textDecoration: "none",
              transition: "color 0.2s ease-in-out",
              _hover: {
                color: "{colors.blue.500}",
              },
            })}
          >
            LOGIN
          </Link>
          <Link href="/subscribe">
            <Button variant="primary" size={{ lg: "sm", xl: "md" }}>
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>

      {/* Mega menu */}
      {isMegamenuVisible && activeItem?.content && (
        <div
          ref={megamenuRef}
          className={css({
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "full",
            maxWidth: {
              md: "{sizes.container.md}",
              lg: "{sizes.container.lg}",
              "xl": "{sizes.container.xl}",
            },
            zIndex: "{zIndices.dropdown}",
            transition: "opacity 0.2s ease-in-out",
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
          {activeItem.content && <activeItem.content />}
        </div>
      )}
    </header>
  );
};

export default Header;