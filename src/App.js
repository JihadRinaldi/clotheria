import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./views/homepage/HomePage";
import ShopPage from "./views/shop/ShopPage";
import Header from "./components/header/Header";

import "./App.styles.scss";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
