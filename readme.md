Gruntjs - ejemplo
======
Les dejo la lista paso a paso para concatenar y minificar los archivos JavaScript y minificar los HTML de sus sites


## instalar el cliente
```
npm install -g grunt-cli
```

## ir a la carpeta del proyecto
```
cd dummy
```

## inicializar el json
```
npm init
```

## package.json
```
{
  "name": "Dummy",
  "version": "1.0.0",
  "description": "concatenacion y minificacion de scripts",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "gruntjs"
  ],
  "author": "Gabriel D. Sule",
  "license": "BSD",
  "devDependencies": {
    "grunt": "^0.4.5"
  }
}
```

## instalar grunt
```
npm install grunt --save-dev
```

## instalar dependencias
```
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-htmlcompressor --save-dev
```

## modificar el gruntfile.js
```
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
		},
		
	        //minificarHTML
	        htmlcompressor: {
	            compile: {
	                files: [{
	                        expand: true,
	                        cwd: 'pages/src/',
	                        src: '*.html',
	                        dest: 'pages/min/',
	                    },
	                ],
	                options: {
	                    type: 'html',
	                    preserveServerScript: true
	                }
	            }
	        }        
	 });
 
	//lee tareas
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-htmlcompressor');

	//ejecuta tareas
	grunt.registerTask('defaultJS', ['concat', 'uglify']);
    	grunt.registerTask('defaultHTML', ['htmlcompressor']);};
```


## ejecutar grunt para JS
```
grunt defaultJS
```

## ejecutar grunt para HTML
```
grunt defaultHTML
```

