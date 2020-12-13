import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { Wraper } from "./components/common/styled";
import { Header } from "./components/header";
import { Main } from "./components/page/allProduct";
import { Basket } from "./components/page/basket";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("basket")) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Wraper>
        <Switch>
          <Route path="/list" component={Main} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </Wraper>
    </div>
  );
};

export default App;
