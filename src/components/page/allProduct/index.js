import React, { Fragment, useState, useEffect } from "react";

import { Heding, Flex, Container, Count, ButtonS } from "../../common/styled";
import Products from "../../products/index";

import { Card } from "../../common/styled";

export const Main = () => {
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

  let pricesale = 1;
  let sum = 1;

  const calc = (price, count) => () => {
    for (let i = 1; i <= count; i++) {
      if (count % 3 === 0) {
        pricesale = price / 2;
      } else {
        sum = price;
      }
    }
    setSale(sum + pricesale);
    console.log(_sale);
  };

  // useEffect(() => {
  //   calc();
  // }, []);

  const renderProduct = () => {
    return Products.getProduct.map(({ name, price, img_adres }) => (
      <Card key={name}>
        <img src={img_adres} alt="img" />
        <h4>{name}</h4>
        <h5>{price + " $/kg"}</h5>
        <Container>
          <ButtonS onClick={onIncrementMinus}>-</ButtonS>
          <Count>{count + "kg"}</Count>
          <ButtonS onClick={onIncrementPlas}>+</ButtonS>
        </Container>
        <ButtonS onClick={onAddBasket(name)}>Basket</ButtonS>
        <ButtonS onClick={calc(price)}>calc</ButtonS> <Count>{_sale}</Count>
      </Card>
    ));
  };

  useEffect(() => {
    renderProduct();
  }, []);

  return (
    <Fragment>
      <Heding>Products</Heding>
      <Flex>{renderProduct()}</Flex>
    </Fragment>
  );
};
