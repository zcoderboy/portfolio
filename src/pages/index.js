import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Header from '../components/Header'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import Project from '../components/Project'
import Article from '../components/Article'
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../components/Footer'

const Index = ({data}) => {
  const [isSmall,setSmall] = useState(undefined)
  useEffect(() => {
    setSmall(window.innerWidth <= 630)
    console.log('effect')
  }, [])
  const images  = data.allFile.edges
  return (
    <Layout>
      <Header/>
      <Container>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
          height: 100vh;
          @media screen and (max-width:630px){
            flex-direction: column;
            align-items: center;
          }
        `}>
        <div>
        {/* <img src={'gee_me.png'} width="150px"/> */}
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
            margin-bottom: 30px;
            @media screen and (max-width:630px){
              align-self: center;
              margin-bottom: 30px;
              align-self: flex-start;
            }
          `}
        />
        </div>
          <div css={css`
            display: flex;
            flex-direction: column;
            width: 50%;
            > * + *{
              margin-top: 30px;
            }
          `}>
            <p css={css`
              font-size: 22px;
              line-height: 1.4;
              margin:0;
              @media screen and (max-width:630px){
                font-size: 18px;
              }
            `}>
              <span>Hello my name is,</span><br/>
              <span css={css`
                font-size: 50px;
                font-weight: bolder;
                position: relative;
                @media screen and (max-width:630px){
                  font-size: 30px;
                }
                ::after{
                  content: "";
                  height: 5px;
                  background-color: #E8505B;
                  border-radius: 1000px;
                  display: block;
                  width: 18%;
                }
              `}>Samba Ndiaye</span>I am a web developer based in Dakar, Senegal
              focused on creating beautiful and user-friendly websites
            </p>
            <a href="#work" className="animated-button" css={css`
              padding: 1rem;
              border: 1px solid #100E08;
              color: #100E08;
              text-decoration: none;
              width: max-content;
              font-size: 14px;
            `}>CHECKOUT MY WORK</a>
              <div css={css`
                *{
                  font-size: 30px;
                  color: #E8505B;
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
          </div>
          </div>
        {/* <div css={css`
          margin-top: 30px;
          width: 75%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
          @media screen and (max-width:630px){
            margin-bottom: 50px;
            flex-direction: column;
            width: 100%;
            br{
              display: none;
            }
            > * + *{
              margin-top: 30px;
            }
          }
          > div{
            display: flex;
            flex-direction: column;
            img{
              width: 50px;
            }
            p{
              line-height: 1.4;
              font-size: 15px;
              margin: 0;
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
              width   : 20%;
              border-bottom:2px solid #E8505B;
              border-radius: 2px;
              top: 25px;
            }
          }
        `}>
            <div>
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
            <div>
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
        </div> */}
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
              height  : 3px;
              width   : 100%; 
              background-color: #E8505B;
              border-radius: 1000px;
              top: 30px;
            }
          `}>Portfolio</span>
          <span css={css`
            font-size: 1rem;
            margin-top: 1rem; 
            display: block; 
            @media screen and (max-width:630px){
              font-size: 14px;
            }
          `}>Some apps and tools I’ve built or worked on</span>
          <div css={css`
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 80px;
            @media screen and (max-width:630px){
              margin-bottom: 50px;
              flex-direction: column;
              margin-bottom: 0px;
            }
          `}>
            {
              data.allProjectsJson.edges.map((project,index)=>{
                const {name,website,techs,id,image,description} = {...project.node}
                return (
                  <Project key={id} name={name} align={index % 2 == 0 ? 'right' : 'left' } website={website} techs={techs} description={description} image={images[image].node}/>
                )
              })
            }
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
              height  : 3px;
              width   : 100%; 
              background-color: #E8505B;
              border-radius: 1000px;
              top: 30px;
            }
          `}>Articles</span>
          <span css={css`
            font-size: 1rem;
            margin-top: 1rem; 
            display: block; 
            @media screen and (max-width:630px){
              font-size: 14px;
            }
          `}>On my free time I also write articles on Medium</span>
          {
            isSmall != undefined && !isSmall &&
            <div css={css`
            display: flex;
            margin-top: 30px;
            `}>
              {
                data.allArticlesJson.edges.map((article)=>{
                  const {name,link,image,description,id} = {...article.node}
                  return(
                    <Article key={id} name={name} link={link} image={images[image].node} description={description}/>
                  )
                })
              }
            </div>
          }
        </div>
      </Container>
      {
        isSmall != undefined && isSmall &&
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
        >
          {
            data.allArticlesJson.edges.map((article)=>{
              const {name,link,image,description,id} = {...article.node}
              return(
                <SwiperSlide key={id}>
                  <Article name={name} link={link} image={images[image].node} description={description}/>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      }
      <Footer/>
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
        }
      }
    }
    allProjectsJson{
      edges{
        node{
          name
          website
          description
          image
          techs
        }
      }
    }
    allArticlesJson{
      edges{
        node{
          id
          name
          description
          link
          image
        }
      }
    }
  }
`

export default Index