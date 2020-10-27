import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.header``

export default () => (
  <Header>
    <h1>猫野研究室</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/profile/">Profile</Link>
        </li>
        <li>
          <Link to="/work/">Work</Link>
        </li>
        <li>
          <Link to="/link/">Link</Link>
        </li>
      </ul>
    </nav>
  </Header>
)
