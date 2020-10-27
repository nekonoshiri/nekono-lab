import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
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
  </header>
)
