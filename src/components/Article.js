import React from 'react'
import Img from 'gatsby-image'
import {css} from "@emotion/core"

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
        <Img
          fluid={image.childImageSharp.fluid}
          sizes={{...image.childImageSharp.fluid, aspectRatio: 3/1.5}}
          css={css`
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            transition: .4s;
          `}
          className="article-img"
        />
        <div css={css`
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          a{
            margin-top: auto;
          }
          @media screen and (max-width:630px){
            p{
              font-size: 14px;
            }
          }
        `}>
          <span>{name}</span>
          <p>
            {description}
          </p>
          <a href={link} alt="Read more" className="animated-button">Read</a>
        </div>
      </div>
    </div>
  )
}

export default Article