import React from "react";
import styled from "styled-components";
import { Paper } from "./Paper";

const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const Content = styled.div`
  padding: 16px 24px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background-color: #fff;
  margin: 8px;
  position: absolute;
  top: -50%;
  left: 15%;
`;
export const Avatar = (props) => {
  return (
    <Content left="20" top="-50" bottom="150">
      <Image src={props.src} alt={props.alt} />
    </Content>
  );
};
