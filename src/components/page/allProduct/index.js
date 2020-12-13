import React, { Fragment, useState, useEffect } from "react";

import { Heding, Flex, Container, Count, ButtonS } from "../../common/styled";
import Products from "../../products/index";

import { Card } from "../../common/styled";

export const Main = () => {
  const [count, setCount] = useState(1);
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

  // const Sale = () => {
  //   let i = 0;

  // }

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
      </Card>
    ));
  };

  return (
    <Fragment>
      <Heding>Products</Heding>
      <Flex>{renderProduct()}</Flex>
    </Fragment>
  );
};
