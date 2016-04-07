const path = require('path')
const aws = require('aws-sdk')

const s3 = new aws.S3({ apiVersion: '2006-03-01' })

module.exports = function (packageDir) {
  // TODO validate these things.
  const manifest = require(path.resolve(packageDir, 'package.json'))
  const app = require(path.resolve(packageDir, manifest.main))

  const output = app.build()
  const filename = `${manifest.name}-${manifest.version}.js`

  const params = {
    ACL: 'public-read',
    Body: output,
    // TODO: Get our own bucket.
    Bucket: 'primary-ratings-summary',
    ContentType: 'text/javascript;charset=UTF-8',
    // Do not cache, for now.
    CacheControl: 'max-age=0',
    Key: `apps/${filename}`
  }

  // TODO bail if file exists?
  return new Promise(function (resolve, reject) {
    s3.putObject(params, function(error, data) {
      if (error) {
        reject(`Uploading ${filename} failed: ${error}`)
      }
      else {
        console.log(`Published to ${params.Bucket}/${params.Key} successfully.`)
        resolve()
      }
    })
  })
}
