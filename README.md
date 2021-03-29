# Nuxt Linkedin Insight Tag

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

> Add Linkedin Insight Tag to your nuxt.js application.

**Note:** nuxt linkedin is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `nuxt-linkedin-insight-tag` dependency using yarn or npm to your project ```npm install nuxt-linkedin-insight-tag``` or ```yarn install nuxt-linkedin-insight-tag```
- Add `nuxt-linkedin-insight-tag` to `modules` section of `nuxt.config.js`

```js
modules: [
    ['nuxt-linkedin-insight-tag', { 
      linkedin_id: 'your-partner-id', 
  }],
]
```

You can find partner id on your Linkedin Business Page, under **Assets Account > Insight Tag**

## Options

### `linkedin_id`
- Required
- Linkedin Partner ID


## License

MIT © [Hamjs](https://hamjs.com)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-linkedin-insight-tag/latest.svg
[npm-version-href]: https://www.npmjs.com/package/nuxt-linkedin-insight-tag

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-linkedin-insight-tag.svg
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-linkedin-insight-tag
