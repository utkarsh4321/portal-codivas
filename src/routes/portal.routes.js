import Home from "../Pages/Home";
import Codivas from "../Pages/Codivas";
import Contato from "../Pages/Contato";

export const root = "/portal"

export const Pages = [
    {
        uri: "/home",
        name: "Home",
        icon: "ni ni-tv-2 text-primary",
        Component: Home,
    },
    {
        uri: "/codivas",
        name: "Codivas",
        icon: "ni ni-tv-2 text-primary",
        Component: Codivas,
    },
    {
        uri: "/contato",
        name: "Contato",
        icon: "ni ni-tv-2 text-primary",
        Component: Contato,
    },
    
    
];

export default root