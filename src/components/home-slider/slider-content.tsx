import React from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import Button from "../button";
import Link from "next/link";

const SliderContent: React.FC = () => {
  return (
    <div className={css({
      width: "799px",
      height: "541px",
      mt: "72",
      ml: "40",
      padding: "16",
    })}>
      <h2 className={css({
        fontSize: "lg",
        fontWeight: "bold",
        lineHeight: "normal",
        letterSpacing: "14px",
        textAlign: "left",
        mb: "2.5",
      })}>
        #SALESCHANNELS
      </h2>
      <h1 className={css({
        fontSize: "5xl",
        fontWeight: "bold",
        lineHeight: "tight",
        textAlign: "left",
        mb: "8",
      })}>
        Satış kanalları ile <br />
        <span className={css({ fontWeight: "normal" })}>
          dilediğiniz yerde satış <br />
          yapın.
        </span>
      </h1>
      <p className={css({
        fontSize: "lg",
        fontWeight: "normal",
        lineHeight: "snug",
        textAlign: "left",
        color: "gray.600",
        mb: "8",
        wordBreak: "break-words",
      })}>
        Arcu interdum dolor mattis sapien, justo fringilla. In pellentesque
        convallis orci adipiscing erat facilisi pellentesque duis tellus. Sagittis blandit
        euismod euismod urna, tincidunt ut egestas.
      </p>
      <div className={flex({
        direction: "row",
        gap: "8",
        alignItems: "center",
      })}>
        <Button 
          variant="primary"
          size="md"
        >
          GET STARTED
        </Button>
        <Link 
          href="/contact-sales"
          className={css({
            color: "text.primary",
            fontWeight: "semibold",
            fontSize: "md",
            textDecoration: "none",
            position: "relative",
            transition: "color 0.3s ease-in-out",
            _hover: {
              color: "accent.primary",
              _after: {
                width: "100%",
              },
            },
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: "0",
              width: "0",
              height: "2px",
              backgroundColor: "accent.primary",
              transition: "width 0.3s ease-in-out",
            },
            display: "inline-flex",
            alignItems: "center",
            gap: "2",
          })}
        >
          <span>Start a conversation with the sales team</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={css({ height: "5", width: "5", flexShrink: "0" })}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SliderContent;