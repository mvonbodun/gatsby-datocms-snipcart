require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'VB Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MGEwYzZmZmMtOTQ3OS00M2U1LTlkMjMtY2Q3Nzg3MGQzMDQ1NjM3Mzg4MDc2ODE3ODgyMTY2',
        autopop: true
      }
    },
  ],
}
