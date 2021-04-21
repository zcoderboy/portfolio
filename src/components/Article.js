import React from 'react'
import Img from 'gatsby-image'
import {css} from "@emotion/core"
import { StaticImage } from "gatsby-plugin-image"

const Article = ({name,link,image,description}) => {
  return(
    <div css={css`
      max-width: 33.33333%;
      flex-basis: 33.33333%;
      display:flex;
      padding-left: 15px;
      padding-right:15px;
      flex-direction:column;
      @media screen and (max-width:630px){
        max-width: 100%;
        padding: 0;
        height: 100%;
      }
    `}>
      <div css={css`
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
        display: flex;
        flex-direction:column;
        overflow: hidden;
        :hover{
          .article-img{
            transform: scale(1.03);
          }
        }
        a{
          padding: .4rem;
          text-decoration: none;
          color: #E8505B;
          border: 1px solid #E8505B;
          display: block;
          width: 30%;
          text-align: center;
        }
        span{
          display: block;
          font-size: 17px;
          font-weight: bold;
          @media screen and (max-width:630px){
            font-size: 16px;
          }
        }
      `}>
        <img
          src={image}
          css={css`
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            transition: .4s;
            object-fit: cover;
            @media screen and (max-width:630px){
              height: 150px;
            }
          `}
          height="250px"
          alt="article-img"
          className="article-img"
        />
        <div css={css`
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          h3{
            margin: 0;
            @media screen and (max-width:630px){
              font-size: 16px;
            }
          }
          a{
            margin-top: auto;
          }
          @media screen and (max-width:630px){
            p{
              font-size: 14px;
            }
          }
        `}>
          <h3>{name}</h3>
          <p>
            {description.slice(0,100).concat('...')}
          </p>
          <a href={link} alt="Read more" className="animated-button" target="blank">Read</a>
        </div>
      </div>
    </div>
  )
}

export default Article