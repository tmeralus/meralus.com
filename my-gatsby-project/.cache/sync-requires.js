const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/my-gatsby-project/.cache/dev-404-page.js"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/my-gatsby-project/src/pages/blog.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/my-gatsby-project/src/pages/index.tsx"))),
  "component---src-templates-template-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/my-gatsby-project/src/templates/template.tsx")))
}

