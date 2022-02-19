import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Inicio from '../App'
import Analisis from '../componentes/base'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ="/" component={Inicio}></Route>
                <Route exact path ="/base" component={Analisis}></Route>
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;