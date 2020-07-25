import React from 'react'
import { css } from "@emotion/core"
const Container = ({children}) => {
  const styles = css`
    width: 92vw;
    margin: 0 auto;
    @media screen and (max-width:630px){
      width: 90vw;
    }
  `
  return(
    <div css={styles}>
      {children}
    </div>
  )
}

export default Container