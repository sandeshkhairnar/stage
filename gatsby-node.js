/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// 🐒 Monkey patch to add delay between Hygraph requests (fix rate limit)
const { request: originalRequest } = require('gatsby-graphql-source-toolkit/dist/common/request.js');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Override the request function globally
global.request = async (...args) => {
  await delay(300); // 300ms delay = ~3.3 requests per second
  return originalRequest(...args);
};

// Also patch the module export directly
const requestModule = require('gatsby-graphql-source-toolkit/dist/common/request.js');
requestModule.request = global.request;

// Optional: log that patch is applied
exports.onPreInit = () => {
  console.log('🐒 Monkey patch applied: 300ms delay between Hygraph requests');
};

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}