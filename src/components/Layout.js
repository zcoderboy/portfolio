import React from 'react'
import {Helmet} from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Global,css } from '@emotion/core'
import Font from '../../static/hiragino-sans-gb-w3.otf'
import favicon from "../../static/favicon.ico"
const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Global
        styles={css`
          @font-face {
            font-family: hirogina;
            src: url(${Font});
          }
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: hirogina;
          }
          body{
            overflow-x: hidden;
          }
        `}
      />
      <Helmet>
        <html lang="fr" />
        <title>{title}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"></link>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  )
}

export default Layout