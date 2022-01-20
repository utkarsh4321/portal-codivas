import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 100%;
  height: 100%;
  overflow: hidden;
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContent = styled.main`
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
export default Layout
