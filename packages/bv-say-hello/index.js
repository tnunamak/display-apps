const random = require('bv-random-number')

module.exports = {
  build: function () {
    n = random.build().length
    return 'console.log("' + (new Array(n).fill("hello").join(', ')) + '")'
  }
}
