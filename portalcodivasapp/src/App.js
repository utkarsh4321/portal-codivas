import { BrowserRouter as Router, Link } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { 
  faSearch,
  faPaperPlane,
  faBell,
  faUserAlt
 } from '@fortawesome/free-solid-svg-icons'

 import './sass/index.scss';

function App() {
  library.add([faSearch, faPaperPlane, faBell, faUserAlt])
  dom.watch()

  return (
    <Router>
      <div className="layout">
        
          <Navigation>
            
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            
          </Navigation>
          <div className="main-container">
            <Header />
            <Content />
            <Footer />
          </div>
      </div>
    </Router>
  );
}

export default App;
