import React from "react"
import { Global, css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

import ress from "ress"

export default ({ children }) => (
  <>
    <Global
      styles={css`
        ${ress}
        body {
          background-color: ivory;
          font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans",
            "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo",
            sans-serif;
        }
      `}
    />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
