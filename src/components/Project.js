import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const Project = ({name,github,image,website,techs,description,align}) => {
  return(
    <div css={css`
      max-width: 100%;
      flex-basis: 100%;
      display:flex;
      margin-bottom: 70px;
      padding-left: 15px;
      position: relative;
      padding-right:15px;
      flex-direction:row;
      .project-img{
        transition: .4s;
      }
      :hover{
        .project-img{
          transform: scale(1.025)
        }
      }
      @media screen and (max-width:630px){
        max-width: 100%;
        flex-basis: 100%;
        margin-bottom: 50px;
        padding: 0 10px;
        flex-direction: column;
        align-items:center;
        > *:not(:first-child){
          margin-left: 0px;
        }
      }
      > *:not(:first-child){
        margin-left: 13px;
        @media screen and (max-width:630px){
          margin-left: 0px;
        }
      }
      > * + *{
        margin-top: 8px;
      }
      span{
        font-size: 14px;
      }
      a{
        padding: .4rem;
        text-decoration: none;
        color: #E8505B;
        border: 1px solid #E8505B;
        width: 35%;
        text-align: center;
      }
    `} data-aos={align === "left" ? 'fade-left' : 'fade-right'}>
      <Img
        fluid={image.childImageSharp.fluid}
        css={css`
          width:60%;
          @media screen and (max-width:630px){
            width: 100%;
            order: 0;
          }
          order: ${align == 'right' ? '0' : '2'}
        `}
        className="project-img"
      />
      <div css={css`
        display: flex;
        flex-direction: column;
        margin-left: 5%;
        padding: 0px 1.5rem;
        .title{
          font-size: 30px;
        }
        span{
          color: #E8505B;
        }
        p{
          width: 60%;
        }
        img{
          object-fit: cover;
        }
        @media screen and (max-width:630px){
          padding: 0;
          p{
            width: 100%;
            text-align: justify;
            font-size: 14px;
            line-height: 1.5;
          }
          .title{
            font-size: 24px;
            text-align: center;
            margin-top: 10px;
          }
          img{
            object-fit: contain;
            width: 28px;
            height: 28px;
          }
        }
      `}>
        <span className="title">{name}</span>
        <p>{description}</p>
        <div css={css`
          > * + *{
            margin-left: 10px;
          }
        `}>
          { 
            techs.map(tech => {
              return (
                <Img
                  fixed={tech.image.src.childImageSharp.fixed}
                  alt="logo"
                />
              )
            })
          }          
        </div>
        <div css={css`
          display: flex;
          align-items: center;
          align-self: flex-end;
          > * + *{
            margin-left: 18px;
          }
          i{
            font-size: 25px;
          }
          a{
            color: #000;
            border: none;
          }
        `}>
          {github && github !== "false" && <a href={github} aria-label="github" target="blank"><i className="fa fa-github"></i></a>}
          <a aria-label="website" href={website} target="blank"><i className="fa fa-external-link"></i></a>
        </div>
        {/* <a href={website} target="blank" className="animated-button">Website</a> */}
      </div>
    </div>
  )
}

export default Project