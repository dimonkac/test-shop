import React from "react";
import { Switch, Route } from "react-router-dom";

import { Products } from "./components/products";

import { Wraper } from "./components/common/styled";
import { Header } from "./components/header";

const ProductList = () => {};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Wraper>
        <Switch>
          <Route path="/list" component={() => <div>list</div>} />
          <Route path="/basket" component={() => <div>basket</div>} />
        </Switch>
      </Wraper>
    </div>
  );
};

export default App;
