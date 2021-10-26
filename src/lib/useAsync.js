import {React,useReducer,useEffect} from "react";

/**
 * 하는 일 : state 관리. useEffect 설정.
 * @parameter : getData -> 콜백함수.
 *              [genre] -> 카테고리 바뀔 때마다 
 */

function reducer(state,action){
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS' : 
      return {  
      loading : false,
      data : action.data,
      error : null
    };
    case 'ERROR' : 
      return {
      loading : false,
      data : null,
      error : action.error
    };
    case 'END' : 
      return {
      loading : false,
      data : null,
      error : null
    }
    default : return false;
  }
}
export default function useAsync(callback,[genre]) {
  const [state,dispatch] = useReducer(reducer,{ ////!!!!!!!!!!!!!!!
    loading : false,
    data : null,
    error : null
  });
  const fetchData = async() => { 
    dispatch({type:'LOADING'});
    try{
      const movieData = await callback();
      dispatch({type:'SUCCESS',data:movieData});
    }catch(e){
      dispatch({type:'ERROR',error:e});
    }
  }
  useEffect(()=>{
    fetchData();
    return()=>dispatch({type:'END'})
  },[genre]);

  return [state,fetchData];/////!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
