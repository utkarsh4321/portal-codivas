import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login"

const Auth = () => {
    return (
        <main className="main-content">
            <Switch>
                <Route exact path="/auth/login">
                  <Login/>
                </Route>
           
            
            </Switch>
        </main>
    )
}

export default Auth;