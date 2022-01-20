import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormContainer = (props) => {
  return <Layout>{props.children}</Layout>;
};
