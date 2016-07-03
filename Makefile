.PHONY : develop
develop : develop
	cd src && bower install && npm install
	cd src && ./node_modules/gulp/bin/gulp.js

.PHONY : test
test : test
	cd src && ./node_modules/karma/bin/karma start
