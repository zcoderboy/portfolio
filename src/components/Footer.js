import React from 'react'
import {css} from '@emotion/core'

const Footer = () => (
  <footer css={css`
    margin-top: 80px;
    background-color: #E8505B;
    padding: 2.5rem 0rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    @media screen and (max-width:630px){
      margin-top: 50px;
      padding: 1.5rem 0rem;
    }
    > * + span{
      margin-top: 8px;
    }
  `}>
    <span css={css`
      font-size: 25px;
      display: block;
      @media screen and (max-width:630px){
        font-size: 19px;
      }
    `}>Thanks for checking out my website</span>
    <span css={css`
      font-size: 17px;
      position: relative;
      @media screen and (max-width:630px){
        font-size: 15px;
        text-align: center;
      }
      :after{
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        margin-left: 30px;
        top: 50%;
        border: 1px solid #fff;
        @media screen and (max-width:630px){
          display: none;
        }
      }
      :before{
        content: "";
        display: inline-block;
        position: absolute;
        width: 80px;
        margin-right: 30px;
        top: 50%;
        left: -110px;
        border: 1px solid #fff;
        @media screen and (max-width:630px){
          display: none;
        }
      }
    `}>Shoot me an email if you want to build something with me</span>
    <a href="#" css={css`
      text-decoration: none;
      color: #fff;
      padding: .5rem 1rem;
      border: 1px solid #fff;
      margin: 18px 0;
      i{
        margin-right: 8px;
      }
    `}><i className="fa fa-envelope-o"></i>EMAIL ME</a>
    <div css={css`
      *{
        font-size: 25px;
        color: #fff;
      }
      > * + *{
        margin-left: 20px;
      }
    `}>
      <a href="https://www.linkedin.com/in/ndiaye-samba/" target="blank"><i className="fa fa-linkedin-square"></i></a>
      <a href="https://twitter.com/zcoderboy" target="blank"><i className="fa fa-twitter"></i></a>
      <a href="https://medium.com/@juniornjay" target="blank"><i className="fa fa-medium"></i></a>
      <a href="https://github.com/zcoderboy/" target="blank"><i className="fa fa-github"></i></a>
    </div>
  </footer>
)

export default Footer