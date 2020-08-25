import React from 'react'
import {Helmet} from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Global,css } from '@emotion/core'

const Layout = ({ children }) => {
  const { title, description, image, siteUrl, social, author} = useSiteMetadata();
  return (
    <div>
      <Global
        styles={css`
          body{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Spartan',sans-serif;
            background-color: #f5f5f5;
          }
          html,body{
            overflow-x: hidden;
          }
          .animated-button::hover{
            color: #fff;
          }
          .animated-button:hover{
            ::before{
              transform: scaleX(1);
            }
            color: #fff;
            border-color: #E8505B;
          }
          .animated-button{
            position: relative;
          }
          .animated-button::before{
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #E8505B;
            transform: scaleX(0);
            transform-origin: 0 50%;
            transition-property: transform;
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
          }
          @media screen and (max-width:630px){
            .swiper-slide{
              width: 80%;
              height: auto;
            }
            .swiper-container{
              padding-left: 5vw;
              margin-top: 30px;
            }
          }
        `}
      />
      <Helmet>
        <html lang="fr" />
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="author" content={author} />
        <link rel="canonical" href={siteUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="Samba Ndiaye | Web developer from Senegal" />
        <meta name="twitter:creator" content={social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <link rel="icon" type="image/png" href={`favicon.ico`} sizes="16x16" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Spartan&display=swap" rel="stylesheet" as="font" crossOrigin></link>
        <meta name="description" content={description} />
        <script async src="https://use.fontawesome.com/8f41b465ce.js"></script>
      </Helmet>
      {children}
    </div>
  )
}

export default Layout