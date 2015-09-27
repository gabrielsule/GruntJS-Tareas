module.exports = function (grunt) {
  
	grunt.initConfig({
  
		pkg: grunt.file.readJSON('package.json'),
		
		//concatenar
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['js/src/*.js'],
				dest: 'js/dist/<%= pkg.name %>.js'
			}
		},
	  
		//minificar
		uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js: {
				files: [{
					cwd: 'js/dist/',
					expand: true,
					src: '*.js',
					dest: 'js/min/'
				}]
			}
		}
	 });
 
	//lee tareas
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//ejecuta tareas
	grunt.registerTask('default', ['concat', 'uglify']);
};