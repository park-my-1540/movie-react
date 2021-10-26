import React from "react";
/**
 * 하는 일 : 라우터로 전환하며 해당 영화의 디테일 정보를 나타내는 페이지.
 */
export default function MovieDetail({location,history}) {
  const { cover_img,title,rating ,desc} =location.state;
  return (<>
  <button type="button" onClick={()=>history.goBack()}>뒤로가기</button>
  <div className="detail_wrap">
    <div className="img_box">
      <img src={cover_img} alt={title} />
    </div>
    <p className="title">
      {title}
    </p>
    <p className="title">
      {desc}
    </p>
    <p className="desc">{rating}</p>
  </div>
  </>);
}
