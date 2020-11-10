import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default ({ pageTitle }) => {
  const siteMetadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
        }
      }
    }
  `).site.siteMetadata

  const title = pageTitle
    ? `${pageTitle} | ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <Helmet>
      <html lang={siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={siteMetadata.description} />
    </Helmet>
  )
}
