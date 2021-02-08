module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Tecnoffice`,
    description: `Tecnoffice printing & lease.`,
    author: `Marco Genualdo`,
    email: `tecnoffice.@gmail.it`,
    phone: `333 3333333`,
    address: `Via Pio Paschini, 45, 00126 Roma RM`,
    addressLink: `https://www.google.com/maps/search/tecnoffice/@41.7754095,12.3454236,14.5z?hl=en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tecnoffice`,
        short_name: `TO`,
        description: `Tecnoffice printing & lease.`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
