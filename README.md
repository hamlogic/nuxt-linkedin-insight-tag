# Nuxt Statcounter Modules

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> Add StatCounter Tag to your nuxt.js application.

**Note:** this modules is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `nuxt-statcounter` dependency using yarn or npm to your project ```npm i nuxt-statcounter``` or ```yarn install nuxt-statcounter```
- Add `nuxt-statcounter` to `modules` section of `nuxt.config.js`

```js
modules: [
    ['nuxt-statcounter', { 
      sc_project: 'your-project-id', // Example 12345678
      sc_security: 'your-security-id', // Example 1a2b3c4d
  }],
]
```

You can find project id and security id on your Statcounter project page, or after sign up process.

## Options

### `sc_project`
- Required
- Statcounter Project ID

### `sc_security`
- Required
- Statcounter Security ID


## License

MIT © [Hamjs](https://hamjs.com)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-statcounter/latest.svg
[npm-version-href]: https://www.npmjs.com/package/nuxt-statcounter

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-statcounter.svg
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-statcounter
