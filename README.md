# x-browser-update
[![](https://img.shields.io/travis/iview/iview.svg?style=flat-square)](https://travis-ci.org/x-browser-update/x-browser-update)
[![Version](https://img.shields.io/npm/v/x-browser-update.svg)](https://www.npmjs.com/package/x-browser-update)
[![License](https://img.shields.io/npm/l/x-browser-update.svg)](https://www.npmjs.com/package/x-browser-update)
[![NPM downloads](http://img.shields.io/npm/dm/x-browser-update.svg?style=flat-square)](https://npmjs.org/package/x-browser-update)
[![Downloads](https://img.shields.io/npm/dt/x-browser-update.svg)](https://www.npmjs.com/package/x-browser-update)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/x-browser-update/dist/XBrowserUpdate.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)

> A Vue.js browser-update plugin.

## Example

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Usage

``` bash
## Packages install
npm install x-browser-update --save

## main.js
import XBrowserUpdate from 'x-browser-update'

Vue.use(XBrowserUpdate)

## App.vue
<style lang="less">
  html {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  body {
    height: 100%;
    width: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
  .layout {
    background: #383838;
  }
</style>

<template>
  <div id="app" class="layout">
    <x-browser-update :config="browserUpdateConfig"></x-browser-update>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        browserUpdateConfig: {
          vs: {
            i: 11,
            f: -4,
            o: -4,
            s: 9,
            c: 40
          },
          // Specifies browser versions to notify. Negative numbers specify how much versions behind current version to notify.
          // f:22 ---> Firefox <= 22
          // c:-5 ---> Chrome <= 35 if current Chrome version is 40.
          reminder: 1,
          // after how many hours should the message reappear
          // 0 = show all the time
          reminderClosed: 150,
          // if the user explicitly closes message it reappears after x hours
          onshow: function (infos) {},
          onclick: function (infos) {},
          onclose: function (infos) {},
          // callback functions after notification has appeared / was clicked / closed
          l: false,
          // set a fixed language for the message, e.g. "en". This overrides the default detection.
          test: true,
          // true = always show the bar (for testing)
          text: '',
          // custom notification text (html)
          // Placeholders {brow_name} will be replaced with the browser name, {up_but} with contents of the update link tag and {ignore_but} with contents for the ignore link.
          // Example: Your browser, {brow_name}, is too old: <a{up_but}>update</a> or <a{ignore_but}>ignore</a>.
          text_xx: '',
          // custom notification text for language "xx"
          // e.g. text_de for german and text_it for italian
          newwindow: true,
          // open link in new window/tab
          url: null,
          // the url to go to after clicking the notification
          noclose: false,
          // Do not show the "ignore" button to close the notification
          nomessage: false,
          // Do not show a message if the browser is out of date, just call the onshow callback function
          jsshowurl: '//browser-update.org/update.show.min.js',
          // URL where the script, that shows the notification, is located. This is only loaded if the user actually has an outdated browser.
          container: document.body,
          // Element where the notification will be injected.
          api: 4
          // This is the version of the browser-update api to use. Please do not remove.
        }
      }
    }
  }
</script>
```

## Preview
![X-Browser-Update](https://raw.githubusercontent.com/OXOYO/X-Browser-Update-Vue/master/docs/images/img_001.png "X-Browser-Update")


## Links
- [browser-update](https://github.com/browser-update/browser-update)
- [vue](https://github.com/vuejs/vue)


## License
[MIT](http://opensource.org/licenses/MIT)
