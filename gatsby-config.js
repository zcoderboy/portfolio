module.exports = {
  siteMetadata: {
    title: `Samba Ndiaye - Web developer`,
    description: `Samba Ndiaye's personal website`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
  ],
}