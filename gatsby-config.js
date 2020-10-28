module.exports = {
  siteMetadata: {
    title: "猫野研究室",
    description:
      "猫野研究室ではかわいいとたのしいを研究しています。あと人生を少々と、ソフトウェアエンジニアリングもやってます。",
    lang: "ja",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
