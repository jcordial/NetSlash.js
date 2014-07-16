module.exports = function(grunt) {
	grunt.initConfig({
	coffee : {
	default: { options : { sourceMap : true,
			}, files : {
				'NetSlash/bin/NetSlash.js' :['NetSlash/coffee/*.coffee']
			}
		}
	}, watch: {
		default: { scripts: { files: ['**/*.js'],
				tasks: ['jshint'],
				options: { spawn: false,
					}
				}
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-coffee');

grunt.registerTask('default', ["coffee"]);

}; 