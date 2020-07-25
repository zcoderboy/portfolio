import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Header from '../components/Header'
import Me from '../../static/zcoderboy.jpeg'
import Frontend from "../../static/frontend.png"
import Backend from "../../static/server.png"

const Index = () => {
  return (
    <Layout>
      <Header/>
      <Container>
        <div css={css`
          display: flex;
          margin-top: 30px;
          @media screen and (max-width:630px){
            flex-direction: column;
            align-items: center;
          }
        `}>
          <img src={Me} css={css`
            width: 180px;
            height: 180px;
            object-fit: cover;
            object-position: center center;
            border: 1px solid #eee;
            border-radius: 50%;
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
            align-self: flex-start;
            margin-right: 30px;
            @media screen and (max-width:630px){
              align-self: center;
              margin-bottom: 10px;
            }
          `}/>
          <div css={css`
            display: flex;
            flex-direction: column;
            > * + *{
              margin-top: 20px;
            }
          `}>
            <p css={css`
              font-size: 20px;
              line-height: 1.4;
              @media screen and (max-width:630px){
                font-size: 18px;
              }
            `}>
              <span css={css`
                font-size: 40px;
                font-weight: bolder;
                @media screen and (max-width:630px){
                  font-size: 35px;
                }
              `}>Hello,</span><br/>
              my name is Samba Ndiaye and I am a web developer from Senegal<br/>
              focused on creating beautiful and user-friendly websites
            </p>
            <a href="#work" css={css`
              border-radius: 5px;
              padding: .5rem;
              border: 1px solid #100E08;
              color: #100E08;
              text-decoration: none;
              width: max-content;
              font-size: 14px;
            `}>CHECKOUT MY WORK</a>
            <div css={css`
              *{
                font-size: 25px;
                color: #E8505B;
              }
              > * + *{
                margin-left: 20px;
              }
            `}>
              <a href="https://www.linkedin.com/in/ndiaye-samba/" target="blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/zcoderboy" target="blank"><i className="fab fa-twitter"></i></a>
              <a href="https://medium.com/@juniornjay" target="blank"><i className="fab fa-medium"></i></a>
              <a href="https://github.com/zcoderboy/" target="blank"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div css={css`
          margin-top: 40px;
          width: 75%;
          display: flex;
          justify-content: space-between;
          @media screen and (max-width:630px){
            flex-direction: column;
            width: 100%;
            br{
              display: none;
            }
            > * + *{
              margin-top: 30px;
            }
          }
        `}>
            <div css={css`
              display: flex;
              flex-direction: column;
              img{
                width: 50px;
              }
              p{
                line-height: 1.4;
              }
              > * + *{
                margin-top: 15px;
              }
              h4{
                position: relative;
              }
              h4::before{
                content : "";
                position: absolute;
                left    : 0;
                bottom  : 0;
                height  : 1px;
                width   : 20%;  /* or 100px */
                border-bottom:2px solid #E8505B;
                border-radius: 2px;
                top: 25px;
              }
            `}>
              <img src={Frontend}/>
              <h4>Frontend development</h4>
              <p>I am super familiar with. frontend technologies <br/> 
                and crafting nice looking stuffs using <br/> 
                <b>HTML</b>, <b>CSS</b> and of course <b>JavaScript</b></p>
            </div>
            <div css={css`
              display: flex;
              flex-direction: column;
              img{
                width: 50px;
              }
              p{
                line-height: 1.4;
              }
              > * + *{
                margin-top: 15px;
              }
              h4{
                position: relative;
              }
              h4::before{
                content : "";
                position: absolute;
                left    : 0;
                bottom  : 0;
                height  : 1px;
                width   : 20%;  /* or 100px */
                border-bottom:2px solid #E8505B;
                border-radius: 2px;
                top: 25px;
              }
            `}>
              <img src={Backend}/>
              <h4>Backend development</h4>
              <p>I also have work experience on the back end <br/> 
                using <b>PHP</b> (Drupal) plus I am a huge fan of <br/>
                the <b>Node.js</b> ecosystem</p>
            </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Index