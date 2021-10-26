import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

/**
 * 하는 일 : List에서 보내온 값들로 렌더링, 
 * 영화 상세정보 링크에 prop 전달
 * @parameter : cover_img, rating,id,title,desc
 */

export default function Item({cover_img, rating,id,title,desc}) {

  const LinkStyle= styled(Link)`
    display:inline-block;
    text-decoration:none;
  `;

  return (
    <>
      <li id={id}>
        <LinkStyle to={{
          pathname:"/movedetail",
          state : {cover_img,rating,title,desc}
        }}>
          <div className="movie-item">
            <div className="img-box">
              <img src={cover_img} alt="" />
            </div>
            <div className="txt-box">
              <span className="title">{title}</span>
              <span className="rating">{rating}</span>
            </div>
          </div>
        </LinkStyle>
      </li>
    </>
  )
}

