import React from "react";

import { HeaderS, IconBlock, Nav, NavLink } from "./styled";
import { ReactComponent as Icon } from "../../img/basket.svg";
import { ReactComponent as IconShop } from "../../img/shop.svg";

export const Header = () => {
  return (
    <HeaderS>
      <Nav>
        <NavLink to="/list">
          <IconBlock>
            <IconShop />
          </IconBlock>
        </NavLink>
        <NavLink to="/basket">
          <IconBlock>
            <Icon />
          </IconBlock>
        </NavLink>
      </Nav>
    </HeaderS>
  );
};
