import styled from "@emotion/styled"
import React from "react"

import Footer from "./footer"
import Header from "./header"
import Helmet from "./helmet"

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

  ul {
    padding-left: 1rem;
  }
`

export default ({ pageTitle, children }) => (
  <Layout>
    <Helmet pageTitle={pageTitle} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Layout>
)
