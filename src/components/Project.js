import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const Project = ({name,image,website,techs}) => {
  return(
    <div css={css`
      max-width: 25%;
      flex-basis: 25%;
      display:flex;
      padding-left: 15px;
      padding-right:15px;
      flex-direction:column;
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
        margin-bottom: 40px;
        align-items:center;
        > *:not(:first-child){
          margin-left: 0px;
        }
      }
      > *:not(:first-child){
        margin-left: 13px;
      }
      > * + *{
        margin-top: 8px;
      }
      span.title{
        font-size: 20px;
      }
      span{
        font-size: 14px;
      }
      a{
        padding: .4rem;
        text-decoration: none;
        color: #E8505B;
        border: 1px solid #E8505B;
        /* border-radius: 4px; */
        width: 35%;
        text-align: center;
      }
    `}>
      <Img
        fluid={image.childImageSharp.fluid}
        css={css`
          width:100%;
        `}
        className="project-img"
      />
      <span className="title">{name}</span>
      <span>{techs}</span>
      <a href={website} target="blank" className="animated-button">Website</a>
    </div>
  )
}

export default Project