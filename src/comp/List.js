import React from "react";
import Item from "./Item";
/**
 * 하는 일 : 데이터를 받아와서 Item에 넣어 Map을 통해 Item 렌더링.
 */
export default function List({state}) {

  const {data:movieData,loading} = state;

  if(loading) return (
    <div className="loading">Loading&#8230;</div>
    );
  if(!movieData) return false;
  
  return (
    <>
      <div className="movie-list">
        <ul>
          {
            movieData.map(movie=>{
              return(
                <Item 
                  id={movie.id} 
                  key={movie.id} 
                  cover_img={movie.medium_cover_image} 
                  rating={movie.rating} 
                  title={movie.title}
                  desc={movie.description_full}
                  />
              )
            })
          }
        </ul>
        
      </div>
    </>
  );
}
