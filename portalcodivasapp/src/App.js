import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Main from "./Components/Main";
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
  library.add([faSearch, faPaperPlane, faBell,faUserAlt])
  dom.watch()

  return (
    <div className="layout">
      <Navigation />
      <div className="main-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
