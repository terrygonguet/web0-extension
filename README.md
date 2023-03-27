# web0.cc

Quickly run pages through the [web0.cc](https://web0.cc/) tool!

## Install

This extension is available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/web0cc/) and [any Chrome-like browser](https://chrome.google.com/webstore/detail/TBD) (Chrome, Brave, Edge etc...)

## Structure

This extension is composed of a simple background script that registers the context menu items and responds to the clicks. Nothing more.

## Building

Building requires node 16 and the build script uses [zx](https://www.npmjs.com/package/zx):

```sh
zx build.mjs
# or
chmod +x ./build.mjs
./build.mjs
```

Use the `-v` or `--verbose` flag to turn on detailed logging.

Use the `--mv2` and `--mv3` flags to build only for manifest V2 or V3 respectively.

The `dist` folder now contains all the extension files. You can use the [web-ext](https://www.npmjs.com/package/web-ext) tool from Mozilla to test and build the extension package.
