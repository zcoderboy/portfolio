module.exports = {
  siteMetadata: {
    title: `Samba Ndiaye - Web Developer`,
    description: `I am passionate web developer looking to embellish the Web.`,
    siteUrl: 'https://www.samba-ndiaye.com',
    image: 'https://samba-ndiaye.com/website.png',
    organization: {
      logo: 'https://samba-ndiaye.com/favicon.ico',
    },
    social: {
      twitter: '@zcoderboy'
    },
  },
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-react-helmet',
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-176281299-1",
        head: false,
      },
    }
  ],
}