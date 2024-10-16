import React from "react";
import FooterNavigation from "./footer-navigation";
import FooterColumn from "./footer-column";
import FooterBottom from "./footer-bottom";
import { css } from "../../../styled-system/css";

const containerStyle = css({
  width: "100%",
  position: "relative",
});

const navigationStyle = css({
  position: "relative",
  zIndex: 3,
  marginBottom: "-90px", // Half of the FooterNavigation height (180px / 2)
});

const columnStyle = css({
  position: "relative",
  zIndex: 1,
  bg: "gray.100",
  pt: "90px", // To accommodate the overlapping part of FooterNavigation
});

const bottomStyle = css({
  position: "relative",
  zIndex: 2,
});

const FooterContainer: React.FC = () => {
  return (
    <footer className={containerStyle}>
      <div className={navigationStyle}>
        <FooterNavigation />
      </div>
      <div className={columnStyle}>
        <FooterColumn />
        <div className={bottomStyle}>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;