# webpack 4 快速使用教程
> Webpack 4.0.0 正式版已发布，Webpack 是一个现代 JavaScript 应用程序的模块打包器 (module bundler) 。当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。

## 1.初始化一个项目
`yarn init`
## 2.安装webpack
`yarn add webpack webpack-cli --dev`
## 3.script命令行配置 - 生产模式和开发模式
**webpack4无需任何配置文件**
**只需定义--mode标记，即可免费获得一切**
```javascript
"scripts": {
    "start": "webpack",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  }
```
## 4.新建src开发目录
`src/index.js // webpack默认入口`
## 5.ES6
`yarn add babel-preset-env` 安装babel-preset-env包
新建.babelrc文件并且配置
```javascript
{
  "presets": [
    "env"
  ]
}
```
## yarn dev/build 打包编译
`yarn dev` `yarn build`

## 更多特性
> - sideEffects 设置 —— 在打包体积上巨大的胜利
> - 支持 JSON 和 Tree Shaking
> - 升级到 UglifyJS2
> - 模块类型的引入 + 支持 .mjs
> - javascript/auto: (在 webpack 3 默认启用) 启用了所有的 Javascript 模块系统：CommonJS，AMD，ESM
> - javascript/esm: EcmaScript 模块，所有的其他模块系统不可用（默认 .mjs 文件）
> - javascript/dynamic: 只有 CommonJS 和，EcmaScript 模块不可用
> - json: JSON 数据，它可以通过 require 和 import 来引入使用（默认 .json 的文件）
> - webassembly/experimental: WebAssembly模块（当前为 .wasm 文件的实验文件和默认文件）
> - 另外 webpack 现在支持查找 .wasm, .mjs, .js 和 .json 拓展文件来解析
> - 支持 WebAssembly
> - 去除 CommonsChunkPlugin
