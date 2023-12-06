const outputConfig = {
    destPath: "./dist"
};

const entryConfig = [
    "./src/index.tsx",
];

const scssConfig = {
    destFileName: "css/app.min.css"
};

const wbConfig = {
    maximumFileSizeToCacheInBytes: 3000000,
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
        {
          urlPattern: /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 30 * 60,
            },
          },
        },
        {
          urlPattern: new RegExp('^https://fakestoreapi.com/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 30 * 60,
            },
          },
        },
      ],
}

module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.outputConfig = outputConfig;
module.exports.wbConfig = wbConfig;