import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./views/homepage/HomePage";
import ShopPage from "./views/shop/ShopPage";
import "./App.styles.scss";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
