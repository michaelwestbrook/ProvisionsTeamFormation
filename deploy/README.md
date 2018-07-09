# Dependencies
- [Node.js](https://nodejs.org) - Follow link to install for your platform
- [Yarn](https://yarnpkg.com/) - After Node.js is installed run `npm install -g yarn`

# Configure <br />
See '[config.js](./config.js)' for available configurations. <br />
`modName`: Name of the mod. (duh) <br />
`defaultBuildDir`: Destination for 'built' addon files. <br /> 
`sourceFiles`: Provides the list of files to be deployed. New files that should be included with the addon should be added to the list. <br />
`esoAddonDir`: Specifies where to deploy game files. It looks to see if the `ESO_ADDON_DIR` environment variable is set.

# Available commands
All commands should be run from a terminal inside the [deploy](./) folder.
1. `yarn run build`
   - copies addon files to 'build' directory specified in [config.js](./config.js)
2. `yarn run deploy` 
   - Copies files from 'build' folder into the folder defined in `esoAddonDir` in [config.js](config.js)

