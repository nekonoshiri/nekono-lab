import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = styled.footer`
  text-align: center;
  background-color: lightsteelblue;

  p {
    margin: 10px 0;
  }

  ul {
    list-style: none;
    font-size: 2rem;

    display: flex;
    justify-content: center;

    li {
      margin: 10px;
    }

    a {
      color: black;
    }
  }
`

export default () => (
  <Footer>
    <p>
      <small>&copy; 2020 Shiri Nekono</small>
    </p>

    <ul>
      <li>
        <a href="https://twitter.com/CyLomw">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="https://github.com/nekonoshiri">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </Footer>
)
