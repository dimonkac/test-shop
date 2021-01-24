import React from "react";

// import { Heding, Flex, Container, Count, ButtonS } from "../../common/styled";
// import { Products } from "../../products/index";
import { Main } from "./Main";
import { Card } from "../../common/styled";

export const Cardp = (props) => {
  return (
    <Card>
      <img src={props.img_adres} alt="img" />
      <h4>{props.name}</h4>
      <h5>{props.price + " $/kg"}</h5>
      <Main name={props.name} price={props.price} />
    </Card>
  );
};
