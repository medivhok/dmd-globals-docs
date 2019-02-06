[![npm version](https://img.shields.io/npm/v/dmd-globals-docs.svg)](https://www.npmjs.com/package/dmd-globals-docs)
[![npm downloads](https://img.shields.io/npm/dm/dmd-globals-docs.svg)](https://www.npmjs.com/package/dmd-globals-docs)

# dmd-globals-docs

Plugin for [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown) to include
[globals-docs](https://github.com/documentationjs/globals-docs) in the generated
documentation.

## Installation

With npm:

```shell
$ npm install dmd-globals-docs --save-dev
```

With yarn:

```shell
$ yarn add dmd-globals-docs --dev
```

## Usage

Pass the plugin name to `jsdoc2md` with the `--plugin` argument:

```shell
$ jsdoc2md --plugin dmd-globals-docs --files lib/**/*.js
```
