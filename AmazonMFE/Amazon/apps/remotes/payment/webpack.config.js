const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "payment",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "payment",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './apps/remotes/payment/src/app/view-payment/view-payment.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "eCommerce": "http://localhost:4200/remoteEntry.js",
        //     "primeVideo": "http://localhost:5200/remoteEntry.js",
        //     "home": "http://localhost:4200/remoteEntry.js",
        //     "movies": "http://localhost:4200/remoteEntry.js",
        //     "order": "http://localhost:4202/remoteEntry.js",
        //     "produtc": "http://localhost:4200/remoteEntry.js",
        //     "profile": "http://localhost:4201/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
