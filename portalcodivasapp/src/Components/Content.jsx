import { Switch, Route } from "react-router-dom";

const Content = () => {
    return (
        <main className="main-content">
            <Switch>
                <Route exact path="/">
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
                <Route path="/projects">
                    <h2>PROJECTS</h2>
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
            </Switch>
        </main>
    )
}

export default Content;