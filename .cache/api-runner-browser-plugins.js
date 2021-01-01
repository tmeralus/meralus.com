module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-markdown","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/home/tmeralus/github/web/meralus.com/node_modules/gatsby-remark-autolink-headers","id":"84411983-3572-54e6-8782-dedc5abaf1a7","name":"gatsby-remark-autolink-headers","version":"2.3.11","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onInitialClientRender","shouldUpdateScroll"],"ssrAPIs":["onRenderBody"]}],"defaultLayouts":{"default":"/home/tmeralus/github/web/meralus.com/src/Layout.tsx"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":["gatsby-remark-katex",{"resolve":"gatsby-remark-images","options":{"maxWidth":1035}},"gatsby-remark-autolink-headers",{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null,"showLineNumbers":true,"noInlineHighlight":false}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
