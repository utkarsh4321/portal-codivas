import React from "react";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 3px 1px -2px rgb(0 0 0 / 12%);

  ${({ full }) => full && `width: 100%;`}

  ${(props) => {
    switch (props.size) {
      case "small":
        return `font-size: 10px;`;
      case "large":
        return `padding: 14px; font-size: 16px;`;
      default:
        break;
    }
  }}

    ${({ color }) => color && `background-color: ${color};`}

    &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }
`;

export const Button = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};
