import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
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
]


export default root