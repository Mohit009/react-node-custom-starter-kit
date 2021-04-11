module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      console.log("using ignore plugin")
      config.plugins.push(new webpack.IgnorePlugin(/\.test\.js$/))
  
      // Important: return the modified config
      return config
    },
  }