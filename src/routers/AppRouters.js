// @flow
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "../components/Home";
// import UserForm from "../components/UserForm";
// import UserList from "../components/UserList";
// import UserDetails from "../components/UserDetails";
import NotFoundPage from "../components/NotFoundPage";
// import Header from "../components/Header";
import Hotels from "../components/Hotels_1";
import Hotels_old from "../components/Hotels";
import Hotel from "../components/Hotel";
import AddHotel from "../components/createHotel/AddHotel_1";
import HouseList from "../components/house/houses";
import AddHouse from "../components/house/AddHouse";

import HomePag from "../components/HomePage";
// import HomePag from "../components/playground/ModalExample";

const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePag} exact={true} />
        <Route path="/add" component={AddHotel} />
        <Route path="/houses" component={HouseList} />
        <Route path="/houseForm" component={AddHouse} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/hotels_old" component={Hotels_old} />
        <Route path="/hotel/:id" component={Hotel} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouters;

// {/* <Route path="/userDetails/:id" component={UserDetails} /> */}
// {/* <Route path="/userform" component={UserForm} /> */}
// {/* <Route path="/users" component={UserList} /> */}
