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
import $ from 'jquery'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = ({data}) => {
  const [isSmall,setSmall] = useState(undefined)
  useEffect(() => {
    setSmall(window.innerWidth <= 630)
    $('#menu a').not('.resume-link').on('click',function(){
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
      },700)
    })
    AOS.init({
      offset: 350,
      duration: 1000
    })
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
          position: relative;
          margin-top: 50px;
          height: 100vh;
          @media screen and (max-width:630px){
            flex-direction: column;
            height: 100%;
            align-items: center;
            margin-bottom: 40px;
            margin-top: 30px;
          }
        `} id="about">
        <div>
        <Img
          fluid={images[5].node.childImageSharp.fluid}
          css={css`
            width: 200px;
            height: 200px;
            object-fit: cover;
            object-position: center center;
            border: 1px solid #eee;
            border-radius: 50%;
            margin-bottom: 30px;
            @media screen and (max-width:630px){
              align-self: center;
              margin-bottom: 30px;
              align-self: flex-start;
              width: 150px;
              height: 150px;
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
            @media screen and (max-width:630px){
              width: 100%;
            }
          `}>
            <p css={css`
              line-height: 1.4;
              font-size: 22px;
              @media screen and (max-width:630px){
                font-size: 16px;
              }
            `}>
              Hello my name is,<br/>
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
                  width: 20%;
                }
              `}>Samba Ndiaye</span>
            </p>
            <p css={css`
              font-size: 22px;
              line-height: 1.5;
              margin:0;
              @media screen and (max-width:630px){
                font-size: 16px;
              }
            `}>
              I am a web developer based in Dakar, Senegal
              focused on creating beautiful and user-friendly websites
            </p>
            <a href="#portfolio" className="animated-button" css={css`
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
                @media only screen and (max-width:630px){
                  display: none;
                }
              `}>
                <a href="https://www.linkedin.com/in/ndiaye-samba/" target="blank"><i className="fa fa-linkedin-square"></i></a>
                <a href="https://twitter.com/zcoderboy" target="blank"><i className="fa fa-twitter"></i></a>
                <a href="https://github.com/zcoderboy/" target="blank"><i className="fa fa-github"></i></a>
              </div>
          </div>
          <a href="mailto:juniornjay@gmail.com" aria-label="mail" css={css`
            background-color: #E8505B;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            position: absolute;
            left: 15px;
            bottom: 20vh;
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
            cursor: pointer;
            @media screen and (max-width:630px){
                right: 0px;
                bottom: 5%;
                left: auto;
            }
          `}>
            <i className="fa fa-envelope"></i>
          </a>
          </div>
        <div id="portfolio">
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
            margin-bottom: 50px;
            @media screen and (max-width:630px){
              margin-bottom: 50px;
              flex-direction: column;
              margin-bottom: 0px;
            }
          `}>
            {
              data.allProjectsJson.edges.map((project,index)=>{
                const {name,website,techs,id,image,description,github} = {...project.node}
                return (
                  <Project key={id} name={name} github={github} align={index % 2 == 0 ? 'right' : 'left' } website={website} techs={techs} description={description} image={images[image].node}/>
                )
              })
            }
          </div>
        </div>
        <div id="articles">
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
          techs {
            image{
              src {
                childImageSharp {
                  fixed(width: 30, height: 30) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
          github
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