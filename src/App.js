import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./views/homepage/HomePage";
import ShopPage from "./views/shop/ShopPage";
import Header from "./components/header/Header";
import SigninSignupPage from "./views/signin-signup/SigninSignupPage";
import { auth } from "./firebase/firebase.utils";

import "./App.styles.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
