// Manage bower dependencies
module.exports = {
	// Copy bower files into js vendor folder
	all: {
		dest: '<%= paths.theme.js %>/vendor',
		options: {
			checkExistence: true,
			overrides: {
				jquery: {
					main: "dist/jquery.js"
				},
				modernizr: {
					main: "modernizr.js"
				},
				html5shiv: {
					main: "dist/html5shiv.js"
				},
				respond: {
					main: "src/respond.js"
				}
			}
		}
	}
}
