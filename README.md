## About

This is a monorepo of display applications built on [Lerna][lerna]. Each directory in packages/ represents a functionally independent web application. Applications implement a common build API and use a common asset publication tool.

## App Requirements

To add an application, add an npm package to packages/ with the following characteristics.

* The `prepublish` package.json script property includes the `display-apps-publish` command.
* The `main` package.json property references a module with a `build` method.
  * The `build` function returns the built application as a string.
* The `publishConfig` package.json property should have a registry property referring to the private BV npm registry.

Browse the apps in `packages/` for examples.

[lerna]: https://github.com/kittens/lerna
