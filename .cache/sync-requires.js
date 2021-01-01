const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/.cache/dev-404-page.js"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/src/pages/blog.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/src/pages/index.tsx")))
}
