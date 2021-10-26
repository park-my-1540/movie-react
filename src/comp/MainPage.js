import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HashRouter from "../router/HashRouter"

/**
 * 하는 일 : Route 설정. Router 오타 x
 */

const NavStyle= styled(NavLink)`
  color:#000;
  text-decoration : none;
`;
export default function MainPage() {
  return (
    <>
      <div className="gnb-wrap">
        <NavStyle to="/" exact={true}>HOME</NavStyle>
        <NavStyle to="/moviepage" >영화검색</NavStyle>
      </div>
      <HashRouter/>
    </>
  );
}
