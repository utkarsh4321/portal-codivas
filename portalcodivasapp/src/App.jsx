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

function App() {
  library.add([faSearch, faPaperPlane, faBell, faUserAlt, faBars]);
  dom.watch();
  // Links get added to mobile and normal nav

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/home" />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
