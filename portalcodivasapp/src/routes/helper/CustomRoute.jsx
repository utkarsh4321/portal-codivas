import { Redirect, Route, Switch } from 'react-router';

import { useContext } from 'react'

import NotFound from "../../Pages/NotFound";
import { Context } from "../../context/AuthProvider"
import isNotAutenticate from "./autorizhation"


const CustomRoute = (props) => { // Roles
    const {
        pages: Pages,
        root,
        isPrivate 
    } = props;

    const { isAuth } = useContext(Context)

    if (isNotAutenticate({ isAuth, isPrivate })) return <Redirect to="/" />

    return (
        <>
            <Switch>
                {Pages.map(Page => (
                    <Route
                        exact
                        path={root + Page.uri}
                        component={Page.Component}
                    />
                ))}
                <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default CustomRoute;