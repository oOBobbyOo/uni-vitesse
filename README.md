<h2 align="center">
  Uni Vitese
</h2>

<p>
由 Uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI 驱动的跨端快速启动模板，使用 VS Code 开发，具有代码提示、自动格式化、统一配置、代码片段等功能，同时内置了大量平时开发常用的基本组件，开箱即用，让你编写 uniapp 拥有 best 体验。
</p>

## Features

- ⚡️ [Vue3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的约定式路由](https://github.com/uni-helper/vite-plugin-uni-pages)

- 📦 [组件自动化加载](./src/components) - 可配置化的组件加载方式，轻松加载组件

- 📑 [布局系统](./src/layouts) - 可配置自定义 layout

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动导入](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等

- 🦾 [TypeScript](https://www.typescriptlang.org/) , 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

- 🔧 [ESLint](https://github.com/uni-helper/eslint-config) - 代码格式化

- 🌈 [husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged) + [commitlint](https://commitlint.js.org/) - 保证代码提交质量

## &#x1F4C2; 安装

执行 `pnpm i` 安装依赖

## 📦 运行（支持热更新）

- web 平台： `pnpm dev:h5`, 然后打开 [http://localhost:5173/](http://localhost:5173/)。
- weixin 平台：`pnpm dev:mp-weixin` 然后打开微信开发者工具，导入本地文件夹，选择本项目的`dist/dev/mp-weixin` 文件。
- APP 平台：`pnpm dev:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/dev/app` 文件夹，选择运行到模拟器(开发时优先使用)，或者运行的安卓/ios 基座。

## 🔗 发布

- web 平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到 web 服务器，如 nginx 运行。如果最终不是放在根目录，可以在 `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。
- weixin 平台：`pnpm build:mp-weixin`, 打包后的文件在 `dist/build/mp-weixin`，然后通过微信开发者工具导入，并点击右上角的“上传”按钮进行上传。
- APP 平台：`pnpm build:app`, 然后打开 `HBuilderX`，导入刚刚生成的`dist/build/app` 文件夹，选择发行 - APP 云打包。
