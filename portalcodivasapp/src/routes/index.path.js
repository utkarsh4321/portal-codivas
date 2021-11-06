import { Switch, Redirect, Route } from "react-router"

import PortalLayout from "../layout/portal/Portal";
import AuthLayout from "../layout/Auth";

const Path = () => (
    <Switch>
        <Route path="/portal" render={(props) => <PortalLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/home" />
    </Switch>
)

export default Path