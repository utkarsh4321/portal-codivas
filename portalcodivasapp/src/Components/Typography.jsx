import React from "react";
import styled from "styled-components";

const Header = ({ tagName = "div", ...otherProps }) => {
  const Tag = tagName;

  return <Tag {...otherProps} />;
};

export const TypographyStyled = styled(Header)`
  ${({ center }) => center && `text-align: center;`}

  ${({ upper }) => upper && `text-transform: uppercase;`}

  ${({ light }) => light && `color: rgba(0, 0, 0, 0.4);`}
  
  ${(props) =>
    props.tiny &&
    `font-size: 12px;
      color: ${props.theme.textTiny};`}
  
    ${({ weight }) => {
    switch (weight) {
      case "100":
        return `font-weight: 100;`;
      case "200":
        return `font-weight: 200;`;
      case "300":
        return `font-weight: 300;`;
      case "400":
        return `font-weight: 400;`;
      case "500":
        return `font-weight: 500;`;
      case "600":
        return `font-weight: 600;`;
      case "700":
        return `font-weight: 700;`;
      case "800":
        return `font-weight: 800;`;
      case "900":
        return `font-weight: 900;`;
      default:
        break;
    }
  }}
`;

export const Typography = (props) => {
  return <TypographyStyled {...props}>{props.children}</TypographyStyled>;
};
