'use strict'

module.exports = function (grunt) {
  grunt.initConfig({
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          /* Index page */
          'html/index.html': ['pug/index.pug'],

          /* Sub-views */
          'html/views/main.html': ['pug/views/main.pug'],
          'html/views/grundlagen.html': ['pug/views/grundlagen.pug']
        }
      }
    },
    uglify: {
      static_js: {
        files: {
          'html/js/master.min.js': [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/particlesjs/dist/particles.min.js',
            'js/core.js',
            'js/routes.js',
            'js/main.js'
          ]
        }
      },
      options: {
        // Play nice with Angular:
        mangle: false
        // beautify: true
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'html/css/global.css': 'less/global.less'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'html/css/master.min.css': [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'html/css/global.css'
          ]
        }
      }
    },
    watch: {
      pug: {
        files: '**/*.pug',
        tasks: ['pug']
      },
      less: {
        files: '**/*.less',
        tasks: ['less', 'cssmin']
      },
      js: {
        files: 'js/*.js',
        tasks: ['uglify']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-pug')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.registerTask('default', ['pug', 'uglify', 'less', 'cssmin'])
}
