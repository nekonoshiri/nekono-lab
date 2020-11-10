import "ress"

import { Global, css } from "@emotion/core"
import React from "react"

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
      `}
    />
    {element}
  </>
)
