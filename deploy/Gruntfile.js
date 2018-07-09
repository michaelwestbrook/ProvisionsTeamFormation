const addonConfig = require('./config');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: [`${addonConfig.buildFolder}/${addonConfig.modName}`],
      deploy: [`${addonConfig.esoAddonDir}/${addonConfig.modName}`],
      options: {
        force: true
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            // Assumes we are running from a sub-folder located inside the addon.
            cwd: '../',
            src: addonConfig.sourceFiles,
            dest: `${addonConfig.buildFolder}/${addonConfig.modName}`
          }
        ],
      },
      deploy: {
        files: [
          {
            expand: true,
            cwd: addonConfig.buildFolder,
            src: [`${addonConfig.modName}/**`],
            dest: addonConfig.esoAddonDir
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
}