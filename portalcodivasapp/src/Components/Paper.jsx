import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 16px 24px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background-color: #fff;
  margin: 8px;
  display: flex;
  flex-direction: column;
  height: auto;

  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
`;

export const Paper = (props) => {
  return <Content {...props}>{props.children}</Content>;
};
