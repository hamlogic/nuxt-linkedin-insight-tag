const path = require("path");
const { defaultsDeep } = require("lodash");

module.exports = function(_options) {
    const options = defaultsDeep({}, _options, this.options.linkedin, {
        linkedin_id: null,
    });

    // Don't include when run in dev mode
    if (options.dev) {
        return;
    }

    // Don't include when no linkedin id is given
    if (!options.linkedin_id) {
        return;
    }

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "linkedin.js",
        ssr: false,
        options
    });
};

module.exports.meta = require("../package.json");