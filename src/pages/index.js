import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Header from '../components/Header'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

const Index = ({data}) => {
  const images  = data.allFile.edges
  console.log(images)
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
        <Img
          fluid={images[5].node.childImageSharp.fluid}
          css={css`
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
          `}
        />
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
          margin-bottom: 50px;
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
                font-weight: bold;
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
              <Img
                fluid={images[6].node.childImageSharp.fluid}
                css={css`
                  width:50px;
                `}
              />
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
                font-weight: bold;
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
              <Img
                fluid={images[4].node.childImageSharp.fluid}
                css={css`
                  width:50px;
                `}
              />
              <h4>Backend development</h4>
              <p>I also have work experience on the back end <br/> 
                using <b>PHP</b> (Drupal) plus I am a huge fan of <br/>
                the <b>Node.js</b> ecosystem</p>
            </div>
        </div>
        <div>
              <span css={css`
                font-size: 25px;
                font-weight: bolder;
                position: relative;
                :after{
                  content : "";
                  position: absolute;
                  left    : 0;
                  bottom  : 0;
                  height  : 1px;
                  width   : 100%;  /* or 100px */
                  border-bottom:2px solid #E8505B;
                  border-radius: 2px;
                  top: 28px;
                }
              `}>Portfolio</span>
              <div css={css`
                display: flex;
                margin-top: 40px;
                @media screen and (max-width:630px){
                  flex-direction: column;
                }
                > div{
                  max-width: 25%;
                  flex-basis: 25%;
                  display:flex;
                  padding-left: 15px;
                  padding-right:15px;
                  flex-direction:column;
                  @media screen and (max-width:630px){
                    max-width: 100%;
                    flex-basis: 100%;
                    margin-bottom: 40px;
                    align-items:center;
                  }
                }
                > div > *:not(:first-child){
                  margin-left: 13px;
                  @media screen and (max-width:630px){ 
                    margin-left: 0px;
                  }
                }
                > div > * + *{
                  margin-top: 8px;
                }
                > div span.title{
                  font-size: 20px;
                }
                >div span{
                  font-size: 14px;
                }
                > div a{
                  padding: .2rem;
                  text-decoration: none;
                  color: #E8505B;
                  border: 1px solid #E8505B;
                  border-radius: 4px;
                  width: 35%;
                  text-align: center;
                }
              `}>
                <div>
                  <Img
                    fluid={images[1].node.childImageSharp.fluid}
                    css={css`
                      width:100%;
                    `}
                  />
                  <span className="title">Comic book library</span>
                  <span>React, HTML, CSS, Marvel API</span>
                  <a href="https://react-marvel.netlify.app/" target="blank">Website</a>
                </div>
                <div>
                  <Img
                    fluid={images[2].node.childImageSharp.fluid}
                    css={css`
                      width:100%;
                    `}
                  />
                  <span className="title">Movie library</span>
                  <span>Angular, HTML, CSS, iMDB API</span>
                  <a href="https://my-movie-app.netlify.app/" target="blank">Website</a>
                </div>
                <div>
                  <Img
                    fluid={images[0].node.childImageSharp.fluid}
                    css={css`
                      width:100%;
                    `}
                  />
                  <span className="title">E-commerce store</span>
                  <span>React, Gatsby, HTML, CSS, Node.js</span>
                  <a href="https://www.lyna-boutique.com" target="blank">Website</a>
                </div>
                <div>
                  <Img
                    fluid={images[3].node.childImageSharp.fluid}
                    css={css`
                      width:100%;
                    `}
                  />
                  <span className="title">Portal website</span>
                  <span>Drupal 8, JS, HTML, CSS</span>
                  <a href="https://www.orange.sn" target="blank">Website</a>
                </div>
              </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" }}, sort:{fields: name,order: ASC}) {
        edges {
          node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
      }
    }
`

export default Index