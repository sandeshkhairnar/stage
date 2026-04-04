/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const toolkit = require("gatsby-graphql-source-toolkit")
const originalWrap = toolkit.wrapQueryExecutorWithQueue

// Monkey-patch to implement rate-limiting (Hygraph free tier has 5 requests/sec limit)
toolkit.wrapQueryExecutorWithQueue = (executor, options) => {
  console.log(
    `[Hygraph-Throttler] Intercepting request queue. Concurrency: 1, Interval: 1s, Max Requests: 4`
  )
  return originalWrap(executor, {
    ...options,
    concurrency: 1, // Force sequential
    interval: 1000, // 1 second window
    intervalCap: 4, // Max 4 requests per second window
  })
}

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
