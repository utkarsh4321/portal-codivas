import React from "react";
import styled from "styled-components";
import { Paper } from "./Paper";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  width: 120px;
  height: 120px;
  padding: 16px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
  top: -40px;
  left: 50%;
  margin-left: -60px;
`;
export const Avatar = (props) => {
  return (
    <Content>
      <Image src={props.src} alt={props.alt} />
    </Content>
  );
};
