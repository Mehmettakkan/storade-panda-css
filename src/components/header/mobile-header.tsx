import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { flex, vstack } from "../../../styled-system/patterns";
import MobileMegaMenuContentIntegrations from "@/app/(inner)/integrations/megamenu/mobile-mega-menu-content-integrations";
import MobileMegaMenuContentResources from "@/app/(inner)/resources/megamenu/mobile-mega-menu-content-resources";
import MobileMegaMenuContentSupport from "@/app/(inner)/support/megamenu/mobile-mega-menu-content-support";
import Button from "../button";
import MobileMegaMenuContentProducts from "@/app/(inner)/products/megamenu/mobile-mega-menu-content-products";

const menuItems = [
  { name: "Products", megaMenu: MobileMegaMenuContentProducts },
  { name: "Integrations", megaMenu: MobileMegaMenuContentIntegrations },
  { name: "Customers", megaMenu: null },
  { name: "Pricing", megaMenu: null },
  { name: "Resources", megaMenu: MobileMegaMenuContentResources },
  { name: "Support", megaMenu: MobileMegaMenuContentSupport },
];

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    setActiveMegaMenu(null);
  }, []);

  const toggleMegaMenu = useCallback((menuName: string) => {
    setActiveMegaMenu((prev) => (prev === menuName ? null : menuName));
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={css({
        bg: "{colors.base.white}",
        boxShadow: "{shadows.elevation.sm}",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: "{zIndices.header}",
      })}
    >
      <div
        className={flex({
          maxWidth: "{sizes.container.xl}",
          mx: "auto",
          px: "{spacing.4}",
          py: "{spacing.3}",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
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
            width={120}
            height={23}
            className={css({
              width: { base: "{sizes.24}", sm: "{sizes.28}" },
              height: "auto",
            })}
          />
        </Link>
        <button
          onClick={toggleMenu}
          className={css({
            color: "{colors.gray.600}",
            _focus: {
              outline: "none",
              boxShadow: "{shadows.focus.default}",
              borderRadius: "{radii.md}",
            },
          })}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className={css({
            bg: "{colors.base.white}",
            boxShadow: "{shadows.elevation.md}",
            maxHeight: "calc(100vh - {sizes.14})",
            overflowY: "auto",
            transition: "opacity 0.2s ease-in-out",
            opacity: isMenuOpen ? 1 : 0,
          })}
        >
          <ul className={vstack({ alignItems: "stretch" })}>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={css({
                  borderBottom: "1px solid",
                  borderColor: "{colors.gray.100}",
                  _last: { borderBottom: "none" },
                })}
              >
                <button
                  onClick={() => toggleMegaMenu(item.name)}
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    px: "{spacing.4}",
                    py: "{spacing.3}",
                    textAlign: "left",
                    _focus: {
                      outline: "none",
                      bg: "{colors.gray.50}",
                    },
                  })}
                  aria-expanded={activeMegaMenu === item.name}
                >
                  <span
                    className={css({
                      color: "{colors.gray.900}",
                      fontWeight: "{fontWeights.medium}",
                      fontSize: "{fontSizes.lg}",
                    })}
                  >
                    {item.name}
                  </span>
                  {item.megaMenu &&
                    (activeMegaMenu === item.name ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    ))}
                </button>
                {activeMegaMenu === item.name && item.megaMenu && (
                  <div
                    className={css({
                      bg: "{colors.gray.50}",
                      px: "{spacing.4}",
                      py: "{spacing.2}",
                      transition: "height 0.2s ease-in-out",
                      height: activeMegaMenu === item.name ? "auto" : 0,
                      overflow: "hidden",
                    })}
                  >
                    <item.megaMenu />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div
            className={vstack({
              gap: "{spacing.2}",
              p: "{spacing.4}",
              borderTop: "1px solid",
              borderColor: "{colors.gray.200}",
            })}
          >
            <Link
              href="/login"
              className={css({ display: "block", width: "100%" })}
            >
              <Button
                variant="secondary"
                size={{ base: "md", sm: "md" }}
                fullWidth={{ base: true, sm: true }}
              >
                LOGIN
              </Button>
            </Link>
            <Link
              href="/subscribe"
              className={css({ display: "block", width: "100%" })}
            >
              <Button
                variant="primary"
                size={{ base: "md", sm: "md" }}
                fullWidth={{ base: true, sm: true }}
              >
                GET STARTED
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
