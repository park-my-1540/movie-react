import React from "react";
import {useQueryContext} from "../lib/Provider";

/**
 * 하는 일 : 키워드 검색 시 키워드를 포함한 제목이 조회된다.
 * parameter : inputValue-> useState로 관리.
 */

export default function SearchBar({refetch}) {
  const [search,setSearch]  = useQueryContext();
  
  return (
    <>
      <div className="searchBar">
        <input type="text" value={search} name="search" onChange={(e)=> setSearch(e.target.value)}/>
        <button type="button" onClick={refetch}>검색</button>
      </div>
    </>
  );
}
