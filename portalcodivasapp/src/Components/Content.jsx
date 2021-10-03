import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <main className="main-content">
            <Switch>

                <Route exact path="/">
                    <h2>HOME</h2>
                </Route>

                <Route path="/projects">
                    <h2>PROJECTS</h2>
                </Route>
                
            </Switch>
        </main>
    )
}

export default Main;