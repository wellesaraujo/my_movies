import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './pages/home' //Importacao do arquivo index.jsx 
import Details from './pages/details' 
import { Header } from './components/header';

const browserHistory = createBrowserHistory(); //CRIAÇÃO DE HISTORICO DE ROTAS
export { browserHistory }; //EXPORT PARA SER ACESSADOS EM OUTROS COPONENTES/TELAS

//SWITCH cria um dicionario de rotas para os componentes, no caso temos apenas
// a rota para o componente "/Home"
// Home é criada na pasta src/pages/

export const Routes = () => {
    return <>
        <Header/>
        <p>learn react</p>
        <div className="containerBody">
            <Router history ={browserHistory}>
                <Switch> 
                <Route path="/details/:id" component={Details} /> 
                    <Route path="/"> 
                        <Home /> 
                    </Route>
                    
                </Switch>
            </Router>

        </div>
    </>
}