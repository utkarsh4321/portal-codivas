import { Router, Switch, Route } from "react-router"
import history from "./helper/history"

import PortalLayout from "../layout/portal/Portal";
import PublicLayout from "../layout";
import NotFound from "../Pages/NotFound";

import portal from './portal.routes'
import publicRoutes from './public.routes'

/**
  *
  * history - histórico de navegação do usuario.
  * Nova rota com multiplas paginas - para adicionar é necessário criar um arquivo nesse diretório chamado
chamado de  ' nome da nova rota '.routes.js, e o layout no diretorio layout, root é o diretorio raiz e 
Pages, são as paginas daquele diretorio.
  * Para adicionar uma página unica basta ir em public.routes.js e adiciona-la lá.
*/


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