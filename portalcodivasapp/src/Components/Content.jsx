import { Switch, Route } from "react-router-dom";

const Content = () => {
    return (
        <main className="main-content">
            <Switch>
                <Route exact path="/">
                    <h2>HOME</h2>
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
                <Route path="/projects">
                    <h2>PROJECTS</h2>
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
                <Route path="/Login">
                     <h2>Login</h2>
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
            </Switch>
        </main>
    )
}

export default Content;