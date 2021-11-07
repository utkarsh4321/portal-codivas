import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import { Profile } from "../Pages/Profile";
import { Forum } from "../Pages/Forum";
import NotFound from "../Pages/NotFound";

export const root = "/portal"

export const Pages = [
    {
        uri: "/home",
        name: "Home",
        icon: "ni ni-tv-2 text-primary",
        Component: Home,
    },
    {
        uri: "/projects",
        name: "Projects",
        icon: "ni ni-tv-2 text-primary",
        Component: Projects,
    },
    {
        uri: "/profile",
        name: "Profile",
        icon: "ni ni-tv-2 text-primary",
        Component: Profile,
    },
    {
        uri: "/forum",
        name: "Forum",
        icon: "ni ni-tv-2 text-primary",
        Component: Forum,
    },
];

/* Essa pagina precisa ser a ultima */ Pages.push({
    uri: "*",
    name: "NotFound",
    icon: "ni ni-tv-2 text-primary",
    Component: NotFound,
  })

export default root