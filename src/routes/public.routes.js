import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Codivas from "../Pages/Codivas";

export const root = ""

export const Pages = [
    {
        uri: "/",
        name: "Login",
        icon: "ni ni-tv-2 text-primary",
        Component: Login,
      },
      {
        uri: "/registro",
        name: "Registro",
        icon: "ni ni-tv-2 text-primary",
        Component: Register,
      },
      {
        uri: "/codivas",
        name: "Codivas",
        icon: "ni ni-tv-2 text-primary",
        Component: Codivas,
      },
]


export default root