import { Switch, Route } from "react-router-dom";
import { Routes } from "../routes/index.routes";
import styled from "styled-components";



const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContent = styled.main`
  height: 100%;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  /* ${FlexCenter} & { */
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
  /* } */
`;


const Content = () => {
  return (
    <MainContent className="main-content">
      <Pages />
    </MainContent>
  );
};

export default Content;
