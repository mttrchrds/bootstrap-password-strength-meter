# BootstrapPasswordStrengthMeter

Simple jQuery plugin to display strength of user's password. The plugin has been
written to seamlessly work with [Twitter Bootstrap](http://github.com/twbs/bootstrap) components. The strength of
the password is calculated using the [zxcvbn](http://github.com/dropbox/zxcvbn) algorithm.

A demo of the plugin is available [here](http://www.kreative.co.uk/github/bootstrapPasswordStrengthMeter/).

## Installation

1. Clone or download the repository.
2. Copy/move the minified JS file (bootstrapPasswordStrengthMeter.min.js)
from "dist" folder into your own project.
3. Link to the JS files in your own codebase. jQuery, Bootstrap and zxcvbn are
dependencies of the plugin, therefore ensure that you link to these before
bootstrapPasswordStrengthMeter in your markup (see below). The links to JS files
ought to be just before closing body tag for optimum performance.
```html
<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
</head>
...
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bootstrapPasswordStrengthMeter.min.js"></script>
<script src="bower_components/zxcvbn/dist/zxcvbn.js"></script>
</body>
```
4. Use the plugin as below. Use the password input element selector as the plugin
 selector.
```javascript
$(function() {
  $('#exampleInputPassword1').bootstrapPasswordStrengthMeter({
    minPasswordLength: 4
  });
});
```
- Options are:
- `minPasswordLength` integer value which matches the minimum password length in your own validation. Default value is 6.
- `transitionDelay` is a value, in seconds, of the delay between image transition. Default value is 10.
- `animationSpeed` is the speed at which the image will fade in (milliseconds). Default value is 1000.

### Customize

It's possible to easily modify or extend the BootstrapPasswordStrengthMeter plugin.
Simply download or clone the repository, the original plugin
JavaScript file is located in the "src" folder.

This file can be modified then viewed within the repo via "demo/index.html".

Using Gulp (instructions below), the source JS can be minified for distribution.

Install the NPM dependencies (assumes you already have NPM installed). Navigate
to the project root and run:
```sh
$ npm install
```

Install Gulp globally (if not already):
```sh
$ npm install -g gulp
```

Install Bower globally (if not already):
```sh
$ npm install -g bower
```

Install the Bower dependencies (Twitter Bootstrap, jQuery and zxcvbn). Navigate
to the project root and run:
```sh
$ bower install
```

To build the minified distrubution JS. Navigate
to the project root and run::
```sh
$ gulp build-js
```

## Credits

BootstrapPasswordStrengthMeter was written by Matt Richards. The plugin is based on
[Mark Dalgleigh's](http://markdalgleish.com/2011/05/creating-highly-configurable-jquery-plugins/)
popular jQuery plugin design pattern (subsequently modified by [Addy Osmani](http://www.smashingmagazine.com/2011/10/essential-jquery-plugin-patterns/#a-highly-configurable-and-mutable-plugin)).

The password strength algorithm is based on [zxcvbn](https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/).
