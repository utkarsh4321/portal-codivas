import { Route } from 'react-router-dom'

import Navigation from "../../Components/Navigation";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { MainContainer, Layout, MainContent } from "./components/layout";

import { root, Pages } from '../../routes/portal.routes'


const Content = () => {
  return (
    <MainContent className="main-content">
      {Pages.map(Page => (
        <Route path={root + Page.uri}>
            <Page.Component />
        </Route>
    ))}
    </MainContent>
  );
};


function PortalLayout() {
  // Links get added to mobile and normal nav
  const links = Pages.map(({ uri, name}) => ({
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
