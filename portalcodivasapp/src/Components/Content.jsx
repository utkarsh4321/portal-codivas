import { Switch, Route } from "react-router-dom";
import Links from "../Routes";
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


const getRouter = () => {
  return Links.filter((path) => path.layout === "/admin").map((path) => {
    return (
      <Route path={path.layout + path.path}>
        <path.component />
      </Route>
    );
  });
};

const Content = () => {
  return (
    <MainContent className="main-content">
      <Switch>{getRouter()}</Switch>
    </MainContent>
  );
};

export default Content;
