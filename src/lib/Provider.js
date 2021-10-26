import {React,useState,createContext,useContext} from "react";

/**
 * 하는 일 : 검색값 context로 관리. 
 */

const QueryContext = createContext();
export default function Provider({children}) {
  const [search,setSearch]  = useState('');
  return (
    <>
      <QueryContext.Provider value={[search,setSearch]}>
        {children}
      </QueryContext.Provider>
    </>
  );
}

export function useQueryContext(){
  return useContext(QueryContext);
}