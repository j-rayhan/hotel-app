// @flow
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/common/NotFoundPage";
import Hotels from "../components/hotel/Hotels_1";
import Hotel from "../components/hotel/Hotel";
import AddHotel from "../components/createHotel/AddHotel_1";
import HouseList from "../components/house/houses";
import AddHouse from "../components/house/AddHouse";

import HomePag from "../components/home";
import LoginPage from "../components/authenticate/login";
import SignUpPage from "../components/authenticate/signup";
import SignUpPageWithEmail from "../components/authenticate/signup/WithEmail";
import SignUpPageWithPhone from "../components/authenticate/signup/WithPhone";

const AppRouters = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePag} exact={true} />
        <Route path="/add" component={AddHotel} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signupWithEmail" component={SignUpPageWithEmail} />
        <Route path="/signupWithPhone" component={SignUpPageWithPhone} />
        <Route path="/houses" component={HouseList} />
        <Route path="/houseForm" component={AddHouse} />
        <Route path="/hotels" component={Hotels} />
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
