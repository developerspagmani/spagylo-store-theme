// next.js configuration
const nextConfig = {
  images: {
    // loader: "imgix", // Uncomment this line for STATIC EXPORT
    // path: "", // Uncomment this line for STATIC EXPORT
  },
  env: {
    production_type: "server", // Change variable to "static" for STATIC EXPORT
  },
  // trailingSlash: true // Uncomment this line for STATIC EXPORT

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeUselessDefs",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
