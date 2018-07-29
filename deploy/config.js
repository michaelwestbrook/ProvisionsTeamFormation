const defaultBuildDir = 'build';
const addonConfig = {
  modName: "ProvisionsTeamFormation",
  buildFolder: defaultBuildDir,
  
  // Set addon directory in environment vars or set default above. Mine is set to 'C:\\Users\\Mike\\Documents\\Elder Scrolls Online\\live\\AddOns'
  esoAddonDir: process.env['ESO_ADDON_DIR'] || defaultBuildDir,
  sourceFiles: [
    'function/**',
    'lang/**',
    'libs/**',
    'Bindings.xml',
    'header.lua',
    'TeamFormation.lua',
    'TeamFormation.xml',
    'ProvisionsTeamFormation.txt'
  ]
};

module.exports = addonConfig
