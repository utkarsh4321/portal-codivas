import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Grid = (props) => {
  return <GridContainer {...props}>{props.children}</GridContainer>;
};
