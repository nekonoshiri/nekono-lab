import "ress"

import React from "react"
import { Global, css } from "@emotion/core"

export const wrapPageElement = ({ element }) => (
  <>
    <Global
      styles={css`
        body {
          background-color: ivory;
          font-family: "Helvetica Neue", "Helvetica", "Hiragino Sans",
            "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo",
            sans-serif;
        }
        ul {
          padding-left: 1rem;
        }
      `}
    />
    {element}
  </>
)
