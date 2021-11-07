import { Router, Switch, Redirect, Route } from "react-router"
import history from "./history"

import PortalLayout from "../layout/portal/Portal";
import PublicLayout from "../layout";
import NotFound from "../Pages/NotFound";

import portal from './portal.routes'
import publicRoutes from './public.routes'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path={portal} render={props => <PortalLayout {...props} />} />
            <Route path={publicRoutes} render={props => <PublicLayout {...props} />} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Routes