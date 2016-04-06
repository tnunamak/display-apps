Add the name of this package to the prepublish property in your `package.json` file. When your app is published, the `build` function on your main script is called and the output is published as the app-version.js asset.

```json
"scripts": {
  "prepublish": "display-apps-publish"
}
```
