// 걸프 의존성을 여기 씁니다
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	// 걸프 작업을 여기 씁니다
	// ESLint 실행
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	// 노드 소스
	gulp.src("es6/**/*.js")     
		.pipe(babel())
		.pipe(gulp.dest("dist"));
	// 브라우저 소스
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});

/*  ** :서브 디렉터리를 포함해 모든 디렉터리
*   이 소스 필터는 서브디렉터리 깊이에 관계없이 es6에 있는 모든 .js 파일을 선택한 다음
*   이 소스 파일을 바벨에 파이프로 연결하고,
*   바벨은 ES6 코드를 ES5 코드로 변형해서 컴파일된 ES5 코드를 dist 디렉터리에 저장할 것임.
*/