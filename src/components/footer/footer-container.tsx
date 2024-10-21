import React from "react";
import FooterNavigation from "./footer-navigation";
import FooterColumn from "./footer-column";
import FooterBottom from "./footer-bottom";
import { css } from "../../../styled-system/css";

const FooterContainer: React.FC = () => {
  return (
    <footer className={css({
      position: "relative",
      width: "100%",
    })}>
      <div className={css({
        position: "relative",
        zIndex: 2,
        marginBottom: { base: 0, md: "-45px", lg: "-90px" }, // Responsive margin
      })}>
        <FooterNavigation />
      </div>
      <div className={css({
        position: "relative",
        zIndex: 1,
      })}>
        <div className={css({
          bg: "gray.100",
          pt: { base: 0, md: "45px", lg: "90px" }, // Responsive padding
        })}>
          <FooterColumn />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterContainer;