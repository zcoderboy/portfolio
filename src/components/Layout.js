import React from 'react'
import {Helmet} from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Global,css } from '@emotion/core'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  // if(typeof document !== "undefined"){
  //   const link = document.createElement('link')
  //   link.rel = "stylesheet"
  //   link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/fontawesome.min.css"
  //   document.head.appendChild(link)
  // }
  return (
    <div>
      <Global
        styles={css`
          body{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat',sans-serif;;
          }
          html,body{
            overflow-x: hidden;
          }
        `}
      />
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <link rel="icon" type="image/png" href={`favicon.ico`} sizes="16x16" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" as="font" crossOrigin></link>
        <meta name="description" content={description} />
        <script async src="https://use.fontawesome.com/8f41b465ce.js"></script>
      </Helmet>
      {children}
    </div>
  )
}

export default Layout