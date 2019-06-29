
module.exports = {
   siteMetadata:{
    title: "Unnati",
    description: "A Knowledge Hub For Civil Aspirants",
    author:'@Unnati',
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
