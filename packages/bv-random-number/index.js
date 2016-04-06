module.exports = {
  build: function (n) {
    n = n || 100
    return (Math.random() * n).toFixed(2)
  }
}
