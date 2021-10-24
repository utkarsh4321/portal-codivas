import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register";

const Auth = () => {
    return (
        <main className="main-content">
            <Switch>
                
                <Route exact path="/auth/login">
                 <Login/>
                </Route>

                <Route exact path="/auth/register">
                 <Register/>
                </Route>
           
            
            </Switch>
        </main>
    )
}

export default Auth;