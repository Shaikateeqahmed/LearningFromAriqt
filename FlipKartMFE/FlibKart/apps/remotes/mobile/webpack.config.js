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
    uniqueName: "mobile",
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
        name: "mobile",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './apps/remotes/mobile/src/app/view-mobile/view-mobile.module.ts',
        },

        // For hosts (please adjust)
        // remotes: {
        //     "electronics": "http://localhost:5200/remoteEntry.js",
        //     "fashion": "http://localhost:6200/remoteEntry.js",
        //     "gaming": "http://localhost:5201/remoteEntry.js",
        //     "kids": "http://localhost:4200/remoteEntry.js",
        //     "laptop": "http://localhost:5202/remoteEntry.js",
        //     "men": "http://localhost:4200/remoteEntry.js",
        //     "profile": "http://localhost:4200/remoteEntry.js",
        //     "women": "http://localhost:4200/remoteEntry.js",
        //     "shell": "http://localhost:4200/remoteEntry.js",

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
