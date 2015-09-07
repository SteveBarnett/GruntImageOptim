/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      files: 'Gruntfile.js'
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['jshint']);

};
