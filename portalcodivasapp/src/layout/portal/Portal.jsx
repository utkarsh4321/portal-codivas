import Navigation from "../../Components/Navigation";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MainContainer, Layout, MainContent } from "./components/layout";

import { root, Pages } from '../../routes/portal.routes'
import CustomRoute from '../../routes/CustomRoute';

const Content = () => {
  return (
    <MainContent className="main-content">
      <CustomRoute pages={Pages} root={root} isPrivate={true} />
    </MainContent>
  );
};

function PortalLayout() {
  // Links get added to mobile and normal nav
  const links = Pages
        .filter(({ uri }) => (
          /* itens para remover do menu */![
            "*"
          ].includes(uri)
        ))
        .map(({ uri, name }) => ({
            path: root + uri, 
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

export default PortalLayout;
