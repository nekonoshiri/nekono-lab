import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Header = styled.header`
  padding-top: 10px;
  background-color: lavender;

  h1 {
    text-align: center;
  }

  ul {
    list-style: none;

    display: flex;

    li {
      flex-grow: 1;
      height: 3rem;
    }

    a {
      color: black;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      width: 100%;

      &.active {
        background-color: cornsilk;
      }

      &:hover {
        background-color: orange;
      }
    }
  }
`

export default () => (
  <Header>
    <h1>猫野研究室</h1>
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Top
          </Link>
        </li>
        <li>
          <Link to="/profile/" activeClassName="active">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/work/" activeClassName="active">
            Work
          </Link>
        </li>
        <li>
          <Link to="/link/" activeClassName="active">
            Link
          </Link>
        </li>
        <li>
          <a href="https://cylomw.hatenablog.com">Blog</a>
        </li>
      </ul>
    </nav>
  </Header>
)
