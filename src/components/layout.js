import React from "react"
import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"

const Layout = styled.main`
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  align-self: center;

  padding: 10px;
  width: 100%;
  max-width: 1000px;

  h2 {
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
  <Layout>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Layout>
)
