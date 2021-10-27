import React from "react";
import styled from "styled-components";

const GridItemStyled = styled.div`
  padding: 12px;
  flex-grow: 0;
  max-width: 100%; flex-basis: 100%;
  
  @media only screen and (min-width: 960px) {
    ${({ md }) => {
      switch (md) {
        case "12":
          return `max-width: 100%; flex-basis: 100%;`;
        case "8":
          return `max-width: 66.66%; flex-basis: 66.66%;`;
        case "6":
          return `max-width: 50%; flex-basis: 50%;`;
        case "4":
          return `max-width: 33.33%; flex-basis: 33.33%;`;
        case "3":
          return `max-width: 25%; flex-basis: 25%;`;
        default:
          break;
      }
    }}
  }

  @media only screen and (max-width: 960px) {
    ${({ xs }) => {
      switch (xs) {
        case "12":
          return `max-width: 100%; flex-basis: 100%;`;
        case "6":
          return `max-width: 50%; flex-basis: 50%;`;
        case "4":
          return `max-width: 33.33%; flex-basis: 33.33%;`;
        case "3":
          return `max-width: 25%; flex-basis: 25%;`;
        default:
          break;
      }
    }}
  }
`;

export const GridItem = (props) => {
  return <GridItemStyled {...props}>{props.children}</GridItemStyled>;
};
