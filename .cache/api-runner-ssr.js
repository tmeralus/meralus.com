var plugins = [{
      plugin: require('/home/tmeralus/github/web/meralus.com/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/tmeralus/github/web/meralus.com/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-markdown","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('/home/tmeralus/github/web/meralus.com/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/home/tmeralus/github/web/meralus.com/node_modules/gatsby-remark-autolink-headers","id":"84411983-3572-54e6-8782-dedc5abaf1a7","name":"gatsby-remark-autolink-headers","version":"2.3.11","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"defaultLayouts":{"default":"/home/tmeralus/github/web/meralus.com/src/Layout.tsx"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":["gatsby-remark-katex",{"resolve":"gatsby-remark-images","options":{"maxWidth":1035}},"gatsby-remark-autolink-headers",{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null,"showLineNumbers":true,"noInlineHighlight":false}}]},
    },{
      plugin: require('/home/tmeralus/github/web/meralus.com/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
