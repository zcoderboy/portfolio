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
          @font-face {
            font-family: hirogina;
            src: url("hiragino-sans-gb-w3.otf");
          }
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: hirogina;
          }
          html,body{
            overflow-x: hidden;
          }
        `}
      />
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></link>
        <link rel="icon" type="image/png" href={`favicon.ico`} sizes="16x16" />
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout