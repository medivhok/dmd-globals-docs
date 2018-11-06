/*
 * @module parse-jsdoc-to-md
 * @author Jean Gregory Verret <gregory.verret@gmail.com>
 */
module.exports = function(){
    return {
        partial: __dirname + "/../partials/**/*.hbs",
        helper: __dirname + "/../helpers/**/*.js"
    };
};
