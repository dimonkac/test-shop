import React, { useState, useEffect, Fragment } from "react";

import { Heding, Flex, Card } from "../../common/styled";
import { Products } from "../../products/index";

export const Basket = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );

  const getBasket = () => {
    const arr = Products.filter(({ name }) => basket.includes(name));
    setProducts(arr);
    console.log(arr);
  };

  useEffect(() => {
    getBasket();
  }, []);

  const renderBasket = () => {
    return products.map(({ name, price, img_adres }) => (
      <Card key={name}>
        <img src={img_adres} alt="img" />
        <h4>{name}</h4>
        <h5>{price + " $/kg"}</h5>
      </Card>
    ));
  };

  return (
    <Fragment>
      <Heding>Basket</Heding>
      <Flex>{renderBasket()}</Flex>
    </Fragment>
  );
};
