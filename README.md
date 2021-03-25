# Nuxt Linkedin Insight Tag

> Add Linkedin Insight Tag to your nuxt.js application.

**Note:** nuxt linkedin is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `nuxt-linkedin` dependency using yarn or npm to your project ```npm install nuxt-linkedin``` or ```yarn install nuxt-linkedin```
- Add `nuxt-linkedin` to `modules` section of `nuxt.config.js`

```js
modules: [
    ['nuxt-linkedin', { 
      linkedin_id: 'your-partner-id', 
  }],
]
```

You can find partner id on your Linkedin Business Page, under **Assets Account > Insight Tag**

## Options

### `id`
- Required
- Linkedin Partner ID


## License

MIT © [Hamjs](https://hamjs.com)