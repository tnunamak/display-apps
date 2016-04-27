/**
 * The index file houses the build function that returns the built application
 * as a string.
 */

// Local.
var markup = require('./app-dist/markup.js');

module.exports = {
  build: function () {
    return markup.getHTML();
  }
}