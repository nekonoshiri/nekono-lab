import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import ress from "ress"

import Header from "./header"
import Footer from "./footer"

const Main = styled.main`
  padding: 10px;

  max-width: 1000px;

  h2 {
    padding: 10px;
    margin-bottom: 20px;
  }

  h3 {
    padding: 10px;
    margin: 20px 0;
    background-color: lavenderblush;

    border-left: medium solid coral;
    border-bottom: medium solid silver;
  }

  h4 {
    margin: 20px 0;
  }
`

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
    <Main>{children}</Main>
    <Footer />
  </>
)
