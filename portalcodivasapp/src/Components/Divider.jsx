import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Divider = () => {
  return <Line />;
};
