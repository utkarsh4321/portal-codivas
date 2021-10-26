import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 16px 24px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background-color: #fff;
  margin: 8px;

  ${({ relative }) => relative && `position: relative;`}
`;

export const Paper = (props) => {
  return <Content {...props}>{props.children}</Content>;
};
