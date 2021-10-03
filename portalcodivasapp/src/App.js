import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import './sass/index.scss';

function App() {
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
