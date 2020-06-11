module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  /**
   * Custom task to create empty `index.html` file in all folders.
   */
  grunt.registerTask('createEmptyHtmlFiles', function() {

    var fileName = 'index.html',
        contents = ;

    grunt.file.expand({ filter: 'isDirectory' }, 'dist/**/*')
        .forEach(function(dirPath) {
          var htmlFilePath = dirPath + '/' + fileName;
          grunt.file.write(htmlFilePath, contents, { encoding: 'utf8'})
        });
  });

  grunt.registerTask('default', ['createEmptyHtmlFiles']);

};