import { Switch, Redirect, Route } from "react-router"

import PortalLayout from "../layout/portal/Portal";
import PublicLayout from "../layout";
import NotFound from "../Pages/NotFound";

import  portal  from './portal.routes'
import  publicRoutes  from './public.routes'

const homePage = "/portal/home"

const Routes = () => (
    <Switch>
        <Route path={ portal } render={ props => <PortalLayout {...props} />} />
        <Route path={ publicRoutes } render={ props => <PublicLayout {...props} />} />
        <Redirect from="/" to={homePage} />
    </Switch>
)

export default Routes