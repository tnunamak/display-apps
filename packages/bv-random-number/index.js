module.exports = {
  build: function (n) {
    n = n || 100
    return 'console.log(' + (Math.random() * n).toFixed(2) + ')'
  }
}
