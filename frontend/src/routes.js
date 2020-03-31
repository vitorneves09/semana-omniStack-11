import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './page/Logon';
import Register  from './page/Register';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/Register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}