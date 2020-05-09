import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../view/login'
import Home from '../view/home'
import Detail from '../view/detail'
import About from '../view/about'
import ErrorPage from '../view/404'
export default function Routers() {
    return <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}>
                {/* 根据业务判断重定向 */}
                <Redirect to="/login"></Redirect>
            </Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="*" component={ErrorPage}></Route>
        </Switch>
    </Router>
}