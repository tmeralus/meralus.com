const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/src/pages/blog.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/src/pages/index.tsx"))),
  "component---src-templates-template-tsx": hot(preferDefault(require("/home/tmeralus/github/web/meralus.com/src/templates/template.tsx")))
}

