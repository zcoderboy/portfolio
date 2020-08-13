import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const Project = ({name,image,website,techs,description,align}) => {
  console.log(align)
  return(
    <div css={css`
      max-width: 100%;
      flex-basis: 100%;
      display:flex;
      margin-bottom: 70px;
      padding-left: 15px;
      position: relative;
      /* ::after{
        content: '';
        width: 50px;
        background-color: #000;
        border-radius: 5px;
        display: inline-block;
        position: absolute;
      } */
      /* ${
        align == "right" ? 'border-right: 2px solid #E8505B;' : 'border-left: 2px solid #E8505B;'
      } */
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
          width:40%;
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
                <img src={tech} alt="Logo" width="35px" height="35px"/>
              )
            })
          }          
        </div>
        <div css={css`
          display: flex;
          align-items: center;
          align-self: end;
          > * + *{
            margin-left: 18px;
          }
          i{
            font-size: 25px;
          }
        `}>
          <i className="fa fa-github"></i>
          <i className="fa fa-external-link"></i>
        </div>
        {/* <a href={website} target="blank" className="animated-button">Website</a> */}
      </div>
    </div>
  )
}

export default Project