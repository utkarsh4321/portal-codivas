import React from "react";
import styled from "styled-components";

const SpaceStyled = styled.div`
  ${({ height }) => height && `height: ${height}px;`}
`;

export const Space = (props) => {
  return <SpaceStyled {...props}></SpaceStyled>;
};
