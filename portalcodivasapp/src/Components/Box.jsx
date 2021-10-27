import React from "react";
import styled from "styled-components";

const BoxStyled = styled.div`
  width: 100%;
  height: 100%;
  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}

`;

export const Box = (props) => {
  return <BoxStyled {...props}>{props.children}</BoxStyled>;
};
