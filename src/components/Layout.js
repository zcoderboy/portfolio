import React from 'react'
import {Helmet} from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Global,css } from '@emotion/core'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

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
          @keyframes headShake {
            0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }

            6.5% {
              -webkit-transform: translateX(-6px) rotateY(-9deg);
              transform: translateX(-6px) rotateY(-9deg);
            }

            18.5% {
              -webkit-transform: translateX(5px) rotateY(7deg);
              transform: translateX(5px) rotateY(7deg);
            }

            31.5% {
              -webkit-transform: translateX(-3px) rotateY(-5deg);
              transform: translateX(-3px) rotateY(-5deg);
            }

            43.5% {
              -webkit-transform: translateX(2px) rotateY(3deg);
              transform: translateX(2px) rotateY(3deg);
            }

            50% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
          }
          @keyframes pulse {
            from {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }

            50% {
              -webkit-transform: scale3d(1.05, 1.05, 1.05);
              transform: scale3d(1.05, 1.05, 1.05);
            }

            to {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
          @keyframes heartBeat {
            0% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }

            14% {
              -webkit-transform: scale(1.3);
              transform: scale(1.3);
            }

            28% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }

            42% {
              -webkit-transform: scale(1.3);
              transform: scale(1.3);
            }

            70% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
          @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
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
        <title>{title}</title>
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