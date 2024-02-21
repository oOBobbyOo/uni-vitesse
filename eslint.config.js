const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

// @see https://github.com/uni-helper/eslint-config
module.exports = uni(
  {
    // 启用 stylistic 格式化规则
    stylistic: true,

    // TypeScript 和 Vue 是自动检测的，你也可以显式启用它们:
    typescript: true,
    vue: true,

    // 禁用 json 和 yaml 支持
    jsonc: false,
    yaml: false,

    // 在 Flat 配置中不再支持 `.eslintignore`，请使用 `ignores` 代替
    ignores: ['dist', 'src/env.d.ts', 'vite.config.ts'],

    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
  unocss.configs.flat,
)
