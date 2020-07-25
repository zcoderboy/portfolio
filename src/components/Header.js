import React from 'react'
import { css } from "@emotion/core"
import Container from './Container'


const Header = () => {
  const toggleActive = (e) => {
    e.target.classList.add('active')
    e.target.parentNode.parentNode.childNodes.forEach((node)=>{
      if(node.firstChild.classList.contains('active') && node.firstChild !== e.target){
        node.firstChild.classList.remove('active')
      }
    })
  }

  return(
    <header css={css`
      background-color: #100E08;
      height: 60px;
      color: white;
      > div {
        height: 100%;
      }
    `}>
      <Container>
        <div css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          height: 100%;
        `}>
          <h4>SAMBA NDIAYE</h4>
          <ul css={css`
            list-style-type: none;
            display: flex;
            > * + *{
              margin-left: 25px;
            }
            a{
              color: #fff;
              text-decoration: none;
              transition: .3s;
            }
            a.active{
              border-bottom: 2px solid #E8505B;
              border-radius: 1.5px;
              padding-bottom: 3px;
            }
          `}>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>work</a></li>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>portfolio</a></li>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>articles</a></li>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>testimonies</a></li>
            <li><a href="#">resume</a></li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header