# babel-loader-bug

Reproduce:

```sh
npm install

webpack
```

error:

```sh
ERROR in ./src/main.js
Module build failed: Error: /home/ubuntu/workspace/babel-test/src/main.js: Invalid mapping: {"generated":{"line":19,"column":13},"source":"/home/ubuntu/workspace/babel-test/src/main.js","name":null}
```

If you are remove in webpack.config.js line:

```js
devtool: '#inline-source-map'
```

build will be fine