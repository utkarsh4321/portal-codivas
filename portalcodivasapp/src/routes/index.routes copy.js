
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Profile } from "../Pages/Profile";
import { Forum } from "../Pages/Forum";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "ni ni-tv-2 text-primary",
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-primary",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/forum",
    name: "Forum",
    icon: "ni ni-tv-2 text-primary",
    component: Forum,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-tv-2 text-primary",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-tv-2 text-primary",
    component: Register,
    layout: "/auth",
  },
  
];
export default routes;