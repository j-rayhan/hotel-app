// @flow
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Hotels from "../components/Hotels";
import Hotel from "../components/Hotel";
import AddHotel from "../components/createHotel/AddHotel";

import HomePag from "../components/HomePage";

const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePag} exact={true} />
        <Route path="/a" component={AddHotel} exact={true} />
        <Route path="/userform" component={UserForm} />
        <Route path="/users" component={UserList} />
        <Route path="/userDetails/:id" component={UserDetails} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotel/:id" component={Hotel} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouters;
