import React from "react"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
