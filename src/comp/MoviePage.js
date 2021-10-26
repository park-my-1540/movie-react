import React from "react";
import styled from "styled-components";
import axios from "axios";
import useAsync from "../lib/useAsync";
import {useQueryContext} from "../lib/Provider";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import MovieList from "./List";

/**
 * 하는 일 : API 데이터 가져온 후 필요 컴포넌트에 전달.
 */
const Wrapper = styled.div`
  position:relative;
  overflow-x : hidden;
  padding-top:50px;
  width:100%;
`;
export default function MoviePage({match}) {

  var genre;
  match.params.category===undefined ? 
  genre='all': 
  genre = match.params.category;

  const [search]  = useQueryContext();

  const getData = async()=>{
    const {data : {data: {movies}}} = await axios.get(`https://yts-proxy.now.sh/list_movies.json?query_term=${search}&genre=${genre}`);
    return movies;
  }
  const [state,refetch] = useAsync(getData,[genre]);

  return (
    <>
    <Wrapper>
      <Categories category={genre}/> 
      <SearchBar refetch={refetch} />
      <MovieList state={state} />
    </Wrapper>
    </>
  );
}
