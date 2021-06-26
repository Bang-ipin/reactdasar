import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateUser from "./Pages/CreateUser";
import EditUser from "./Pages/EditUser";
import DetailUser from "./Pages/DetailUser";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={CreateUser} />
          <Route path="/edit/:id" exact component={EditUser} />
          <Route path="/detail/:id" exact component={DetailUser} />
        </BrowserRouter>
      </div>
    );
  }
}
