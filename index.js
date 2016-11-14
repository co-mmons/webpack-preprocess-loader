var path = require("path");
var loaderUtils = require("loader-utils");
var preprocess = require("preprocess");

module.exports = function (source) {
    this.cacheable();

    var query = loaderUtils.parseQuery(this.query);
    var context = query.context ? query.context : {};
    var extension = path.extname(this.resourcePath).substr(1);

    var options = Object.assign({
        srcDir: this.context,
        type: extension
    }, query);

    return preprocess.preprocess(source, context, options);
}
