import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch,
  faPaperPlane,
  faBell,
  faUserAlt,
  faBars
 } from '@fortawesome/free-solid-svg-icons'

 import './sass/index.scss';

function App() {
  library.add([faSearch, faPaperPlane, faBell, faUserAlt, faBars])
  dom.watch()
  // Links get added to mobile and normal nav
  const links = [{path: "/", text: "Home"}, {path: "/projects", text: "Projects"}]
  return (
    <Router>
      <div className="layout">
          <Navigation links={links} />
          <div className="main-container">
            <Header links={links} />
            <Content />
            <Footer />
          </div>
      </div>
    </Router>
  );
}

export default App;
