import React, { Fragment } from "react";

// import { Products } from "../../products/index";
import { Cardp } from "./Card";
import { Heding, Flex } from "../../common/styled";

export const CardProduct = (props) => {
  let renderProduct = props.Products.map((p) => (
    <Cardp name={p.name} price={p.price} img_adres={p.img_adres} />
  ));

  return (
    <Fragment>
      <Heding>Products</Heding>
      <Flex>{renderProduct}</Flex>
    </Fragment>
  );
};
