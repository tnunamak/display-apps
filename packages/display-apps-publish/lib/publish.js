const path = require('path')

module.exports = function (packageDir) {
  // TODO validate these things.
  const manifest = require(path.resolve(packageDir, 'package.json'))
  const app = require(path.resolve(packageDir, manifest.main))

  const output = app.build()

  const filename = `${manifest.name}-${manifest.version}.js:`
  console.log(filename)
  console.log(output)

  // TODO upload output to S3
}
