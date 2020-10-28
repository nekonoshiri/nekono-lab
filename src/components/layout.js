import React from "react"
import styled from "@emotion/styled"
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
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)
