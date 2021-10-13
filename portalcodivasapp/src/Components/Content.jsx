import { Switch, Route } from "react-router-dom";
import Links from "../Routes";

const getRouter = () =>{

    return Links.filter(path => path.layout === "/admin").map(path =>{
        return  ( 
        <Route path={path.layout + path.path}>
        <path.component/>

         </Route>
        )
    } )
}

const Content = () => {
    return (
        <main className="main-content">
            <Switch>
            {getRouter()}
              
            
            </Switch>
        </main>
    )
}

export default Content;