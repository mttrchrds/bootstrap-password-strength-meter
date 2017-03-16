/*
 * Simple jQuery plugin to display strength of user's password using Twitter Bootsrap components and zxcvbn.
 * Author: Matt Richards, http://github.com/mattyrichards
 * Licensed under the MIT license
 */
;(function( $, window, document, undefined ){

    var BootstrapPasswordStrengthMeter = function( elem, options ){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        self = this;
    };

    BootstrapPasswordStrengthMeter.prototype = {
        defaults: {
          minPasswordLength: 6,
          level0ClassName: 'progress-bar-danger',
          level0Description: 'Weak',
          level1ClassName: 'progress-bar-danger',
          level1Description: 'Not great',
          level2ClassName: 'progress-bar-warning',
          level2Description: 'Better',
          level3ClassName: 'progress-bar-success',
          level3Description: 'Strong',
          level4ClassName: 'progress-bar-success',
          level4Description: 'Very strong',
          parentContainerClass: '.form-group'
        },

        init: function() {
            this.config = $.extend({}, this.defaults, this.options);
            this.$elem.on("keyup", function() {
              self.processPassword();
            });
        },

        processPassword: function() {
          var currentPassword = this.$elem.val();
          var progressBar = this.$elem.closest(self.config.parentContainerClass).find('.progress-bar');
          var progressBarWidth = 0;
          var progressBarDescription = '';
          if (currentPassword.length >= self.config.minPasswordLength) {
            var zxcvbnObj = zxcvbn(currentPassword);
            progressBar.removeClass(this.config.level0ClassName)
              .removeClass(this.config.level1ClassName)
              .removeClass(this.config.level2ClassName)
              .removeClass(this.config.level3ClassName)
              .removeClass(this.config.level4ClassName);
            progressBar.data('score', zxcvbnObj.score);
            progressBar.attr('data-score', zxcvbnObj.score);
            switch (zxcvbnObj.score) {
              case 0:
                progressBarWidth = 25;
                progressBar.addClass(this.config.level0ClassName);
                progressBarDescription = this.config.level0Description;
                break;
              case 1:
                progressBarWidth = 25;
                progressBar.addClass(this.config.level1ClassName);
                progressBarDescription = this.config.level1Description;
                break;
              case 2:
                progressBarWidth = 50;
                progressBar.addClass(this.config.level2ClassName);
                progressBarDescription = this.config.level2Description;
                break;
              case 3:
                progressBarWidth = 75;
                progressBar.addClass(this.config.level3ClassName);
                progressBarDescription = this.config.level3Description;
                break;
              case 4:
                progressBarWidth = 100;
                progressBar.addClass(this.config.level4ClassName);
                progressBarDescription = this.config.level4Description;
                break;
            }
          } else {
            progressBarWidth = 0;
            progressBarDescription = '';
          }
          progressBar.css('width', progressBarWidth + '%');
          progressBar.text(progressBarDescription);
        }
    };

    BootstrapPasswordStrengthMeter.defaults = BootstrapPasswordStrengthMeter.prototype.defaults;

    $.fn.bootstrapPasswordStrengthMeter = function(options) {
        return this.each(function() {
            new BootstrapPasswordStrengthMeter(this, options).init();
        });
    };

})( jQuery, window , document );
