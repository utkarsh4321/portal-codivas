import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Links from "./Routes";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 100%;
  height: 100%;
  overflow: hidden;
`;

function Admin() {
  // Links get added to mobile and normal nav
  const links = Links.map(({ path, name, layout }) => ({
    path: layout + path,
    text: name,
  }));

  return (
    <Layout>
      <Navigation links={links} />
      <MainContainer>
        <Header links={links} />
        <Content />
        <Footer />
      </MainContainer>
    </Layout>
  );
}

export default Admin;
