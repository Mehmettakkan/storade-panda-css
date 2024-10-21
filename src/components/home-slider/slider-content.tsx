import React from "react";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import Button from "../button";
import Link from "next/link";

const SliderContent: React.FC = () => {
  return (
    <div
      className={css({
        width: "100%",
        maxWidth: { base: "100%", md: "799px" },
        minHeight: { base: "auto", md: "541px" },
        padding: { 
          base: "6", 
          sm: "8", 
          md: "12",
          lg: "16" 
        },
        marginTop: { base: "16", md: "20" },
        marginBottom: { base: "16", md: "20" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      })}
    >
      <h2
        className={css({
          fontSize: { base: "sm", md: "md" },
          fontWeight: "bold",
          lineHeight: "normal",
          letterSpacing: { base: "8px", md: "12px" },
          textAlign: { base: "center", md: "left" },
          mb: "4",
        })}
      >
        #SALESCHANNELS
      </h2>
      <h1
        className={css({
          fontSize: { base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" },
          fontWeight: "bold",
          lineHeight: "tight",
          textAlign: { base: "center", md: "left" },
          mb: { base: "6", md: "8" },
        })}
      >
        Satış kanalları ile <br />
        <span className={css({ fontWeight: "normal" })}>
          dilediğiniz yerde satış <br />
          yapın.
        </span>
      </h1>
      <p
        className={css({
          fontSize: { base: "sm", md: "md", lg: "lg" },
          fontWeight: "normal",
          lineHeight: "relaxed",
          textAlign: { base: "center", md: "left" },
          color: "gray.600",
          mb: { base: "8", md: "10" },
          maxWidth: "600px",
        })}
      >
        Arcu interdum dolor mattis sapien, justo fringilla. In pellentesque
        convallis orci adipiscing erat facilisi pellentesque duis tellus.
        Sagittis blandit euismod euismod urna, tincidunt ut egestas.
      </p>
      <div
        className={flex({
          direction: { base: "column", sm: "row" },
          gap: { base: "4", sm: "6", md: "8" },
          alignItems: { base: "stretch", sm: "center" },
          justifyContent: { base: "center", md: "flex-start" },
        })}
      >
        <Link href="/subscribe">
          <Button
            variant="primary"
            size={{ base: "lg", sm: "lg", lg: "md" }}
            fullWidth={{ base: true, sm: false }}
          >
            GET STARTED
          </Button>
        </Link>
        <Link
          href="/contact-sales"
          className={css({
            color: "text.primary",
            fontWeight: "semibold",
            fontSize: { base: "sm", md: "md" },
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
            justifyContent: { base: "center", md: "flex-start" },
            gap: "2",
            textAlign: { base: "center", md: "left" },
            width: { base: "100%", sm: "auto" },
            padding: { base: "2", sm: "0" },
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