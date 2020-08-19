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
          position: relative;
        `}>
          <h4>SAMBA NDIAYE</h4>
          <ul id="menu" css={css`
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
            @media only screen and (max-width:630px){
              flex-direction: column;
              background-color: #100e08;
              position: absolute;
              align-items: center;
              transition: .7s;
              transition: .25s;
              right: -100vw;
              bottom: -263px;
              z-index: 100;
              width: 85%;
              padding: 1rem 0;
              border-bottom-left-radius: 0px;
              height: 250px;
              > * + *{
                margin-left: 0px;
                margin-top: 20px;
              }
              &.open{
                border-bottom-left-radius: 250px;
                right: -75px;
                bottom: -292px;
                box-shadow: 0 2.5rem 1.9rem rgba(0,0,0,.175);
              }
            }
          `}>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>work</a></li>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>portfolio</a></li>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>articles</a></li>
            <li><a href="#" onClick={(event)=>{toggleActive(event)}}>testimonies</a></li>
            <li><a href="#">resume</a></li>
          </ul>
          <div id="nav-icon1" onClick={ (event)=> {
            if(event.target.tagName === "DIV"){
              event.target.classList.toggle('open')
            }else{
              event.target.parentNode.classList.toggle('open')
            }
            document.getElementById('menu').classList.toggle('open')
          }} css={css`
              width: 26px;
              height: 22px;
              position: relative;
              -webkit-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
              -webkit-transition: .5s ease-in-out;
              -moz-transition: .5s ease-in-out;
              -o-transition: .5s ease-in-out;
              transition: .5s ease-in-out;
              cursor: pointer;
              span{
                display: block;
                position: absolute;
                height: 3px;
                width: 100%;
                background: #fff;
                border-radius: 9px;
                opacity: 1;
                left: 0;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: .25s ease-in-out;
                -moz-transition: .25s ease-in-out;
                -o-transition: .25s ease-in-out;
                transition: .25s ease-in-out;
              }
              span:nth-child(1) {
                top: 0px;
              }

              span:nth-child(2) {
                top: 8px;
              }

              span:nth-child(3) {
                top: 16px;
              }
              &.open span:nth-child(1) {
                top: 9px;
                -webkit-transform: rotate(135deg);
                -moz-transform: rotate(135deg);
                -o-transform: rotate(135deg);
                transform: rotate(135deg);
              }

              &.open span:nth-child(2) {
                opacity: 0;
                left: -60px;
              }

              &.open span:nth-child(3) {
                top: 9px;
                -webkit-transform: rotate(-135deg);
                -moz-transform: rotate(-135deg);
                -o-transform: rotate(-135deg);
                transform: rotate(-135deg);
              }
          `}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header