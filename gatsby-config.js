require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:`5scgf8fipkfk`,
        accessToken:`XbcjkxBlHg5rc8bOwkqU27QCg95T_Sb_g6il_T0mtaI`,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`, `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
  ],
}
