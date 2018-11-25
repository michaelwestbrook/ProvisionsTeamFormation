const defaultBuildFolder = "build";

const addonConfig = {
    modName: "ProvisionsTeamFormation",
    buildFolder: defaultBuildFolder,
    archiveFolder: "archive",

    // Set addon directory in environment vars or set default above. Mine is set to "C:\\Users\\Mike\\Documents\\Elder Scrolls Online\\live\\AddOns"
    esoAddonDir: process.env["ESO_ADDONS_PATH"] || defaultBuildFolder,
    sourceFiles: [
        "function/**",
        "lang/**",
        "libs/**",
        "Bindings.xml",
        "header.lua",
        "ProvisionsTeamFormation.txt",
        "README.md",
        "TeamFormation.lua",
        "TeamFormation.xml",
        "TF_low.jpg"
    ],
    filesWithVersionNumber: [
        ["ProvisionsTeamFormation.txt", 2],
        ["README.md", 1],
        ["header.lua", 1]
    ]
};

module.exports = addonConfig;

function getFileContent(filename) {
    return fs.readFileSync(filename).toString();
}
