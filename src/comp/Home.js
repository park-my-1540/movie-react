import React ,{useEffect} from "react";
import axios from "axios";
import useAsync from "../lib/useAsync";
import {useQueryContext} from "../lib/Provider";
import MovieList from "./List";

/**
 * 하는 일 : home 페이지
 */

export default function Home() {
  const getData = async()=>{
    const {data : {data: {movies}}} = await axios.get(`https://yts-proxy.now.sh/list_movies.json`);
    return movies;
  }
  const [state,refetch] = useAsync(getData,[]);
  const mainData = state.data;
  console.log(mainData);
  return (
  <>
    <h1 className="tit">HOME</h1>
    <MovieList state={state} />
  </>
    )
}
