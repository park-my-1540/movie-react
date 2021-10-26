import React from "react";
import {Route } from "react-router-dom";
import AboutPage from "../comp/AboutPage";
import Home from "../comp/Home";
import MoviePage from "../comp/MoviePage";
import MovieDetail from "../comp/MovieDetail";

/**
 * 하는 일 : Router 태그들을 감쌈.
 */

export default function HashRouter() {
  return (
  <>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/moviepage" exact={true} component={MoviePage}/>
    <Route path="/moviepage/:category"  exact={true} component={MoviePage}/> 
    <Route path="/aboutpage"  exact={true}  component={AboutPage}/>
    <Route path="/movedetail" exact={true}  component={MovieDetail}/> 
  </>
  );
}
