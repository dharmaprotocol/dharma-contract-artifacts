const fs = require("fs");

const artifactConfig = {};
const dir = `${__dirname}/versions/`;
const files = fs.readdirSync(dir);

files.forEach((fileName) => {
    if (fileName.endsWith(".json")) {
        artifactConfig[fileName] = readJsonSync(`${dir}/${fileName}`);
    }
});

const versions = Object.keys(artifactConfig).sort();

function readJsonSync(path) {
    return JSON.parse(fs.readFileSync(path, "utf8"));
}

exports.latest = artifactConfig[versions[versions.length - 1]];
Object.assign(exports, artifactConfig);
