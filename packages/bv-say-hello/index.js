const random = require('bv-random-number')

module.exports = {
  build: function () {
    n = Math.ceil(random.build())
    return 'console.log(' + new Array(n).fill("hello").join(', ') + ')'
  }
}
