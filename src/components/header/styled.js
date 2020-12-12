import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderS = styled.header`
  width: 100%;
  height: 60px;
  background-color: #41b55d;
  display: flex;
  padding: 10px 30px;
`;

export const IconBlock = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  font-size: 14px;
  color: darkblue;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
