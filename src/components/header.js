import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.header`
  margin: 10px;
  padding: 10px;
  background-color: lavender;

  h1 {
    text-align: center;
  }

  ul {
    list-style: none;

    display: flex;
    justify-content: space-around;

    li {
      width: 5rem;
      height: 2rem;
      &:hover {
        background-color: orange;
      }
    }

    a {
      color: black;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
`

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
        <li>
          <a href="https://cylomw.hatenablog.com">Blog</a>
        </li>
      </ul>
    </nav>
  </Header>
)
