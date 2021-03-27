const path = require("path");
const { defaultsDeep } = require("lodash");

module.exports = function(_options) {
    const options = defaultsDeep({}, _options, this.options.statcounter, {
        sc_security: null,
        sc_project: null,
    });

    // Don't include when run in dev mode
    if (options.dev) {
        return;
    }

    // Don't include when no sc_security id is given
    if (!options.sc_security) {
        return;
    }

    // Don't include when no sc_project id is given
    if (!options.sc_project) {
        return;
    }

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "statcounter.js",
        ssr: false,
        options
    });
};

module.exports.meta = require("../package.json");