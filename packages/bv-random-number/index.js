module.exports = {
  build: function (n) {
    n = n || 100
    return 'console.log(' + (Math.random() * n).toFixed(2) + ')\n' +
      'BV["bv-random-number"].processConfig(function (cfg) { console.log("bv-random-number config", cfg) })'
  }
}
