import React, { Component } from 'react';

import {BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./componentes/Login"
import Home from "./componentes/Home"

// import { Container } from './styles';

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login}  />
                <Route path="/home/:usuario" component = {Home}  />
                {/* para colocar um parametro na rota ultilizamos os dois pontos */}
            </Switch>
        </BrowserRouter>
    )
  }
}
