import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home/Home';
import Result from './Result';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/result">
                    <Result />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);
