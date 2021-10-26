import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
/**
 * 하는 일 : 선택한 카테고리 값을 전달하고, 선택한 링크 활성화 스타일이 입혀짐.
 */
const categoris=[
  'comedy',
  'romance',
  'horror',
  'drama',
  'crime'
]
const Block = styled.div`
  width : 500px;
  height : auto;
  a{
    padding: 10px;
    margin-right: 10px;
    background: #fff;
    color: #000;
    -webkit-text-decoration: none;
    text-decoration: none;
    border-radius: 13px;
  }
`;
const NavBlock=styled(NavLink)`
  &:active,&:hover{
    color:red;
  }
  &.active{
    color:red;
  }
`;
export default function Categories() {
  return (
  <>
  <Block>
    {
      categoris.map(c=>{
        return (<NavBlock 
                      key={c} 
                      to={c==='all'?'/moviepage':`/moviepage/${c}`} 
                      activeClassName='active'
                      exact>{c}
                      </NavBlock>
                      )
      })
    }
  </Block>
  
  </>);
}
