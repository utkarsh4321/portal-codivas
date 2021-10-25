import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faPaperPlane,
  faBell,
  faUserAlt,
  faBars,
  
} from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "./Admin";
import AuthLayout from "./Auth";
import "./Assets/Sass/index.scss";
import styled from 'styled-components'
import './fonts/SpaceGrotesk-Regular.ttf'

function App() {
  library.add([faSearch, faPaperPlane, faBell, faUserAlt, faBars]);
  dom.watch();
  // Links get added to mobile and normal nav

  return (
    <BrowserRouter>
    <Body>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/home" />
    </Switch>
    </Body>
  </BrowserRouter>
  );
}

const Body = styled.div`
  font-family: 'Space Grotesk', sans-serif;
`

export default App;
