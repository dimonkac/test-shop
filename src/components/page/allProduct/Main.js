import React, { Fragment, useState } from "react";

import { Container, Count, ButtonS } from "../../common/styled";

export const Main = (props) => {
  const [count, setCount] = useState(1);
  const [_sale, setSale] = useState(1);
  const basket = JSON.parse(localStorage.getItem("basket"));
  const onAddBasket = (name) => () => {
    if (basket.includes(name)) {
      basket.splice(basket.indexOf(name), 1);
    } else {
      basket.push(name);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(localStorage);
  };
  const onIncrementMinus = () => {
    setCount(count - 1);
  };
  const onIncrementPlas = () => {
    setCount(count + 1);
  };

  let sum = 0;
  let sale = 0;

  const calc = (price, count) => () => {
    for (let i = 1; i <= count; i++) {
      if (i % 3 === 0) {
        sale += price / 2;
      } else {
        sum += price;
      }
    }
    let pricesale = sum + sale;
    setSale(pricesale);
  };

  return (
    <Fragment>
      <Container>
        <ButtonS onClick={onIncrementMinus}>-</ButtonS>
        <Count>{count + "kg"}</Count>
        <ButtonS onClick={onIncrementPlas}>+</ButtonS>
      </Container>
      <ButtonS onClick={onAddBasket(props.name)}>Basket</ButtonS>
      <ButtonS onClick={calc(props.price, count)}>calc</ButtonS>
      <Count>{_sale}</Count>
    </Fragment>
  );
};
