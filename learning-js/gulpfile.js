// 걸프 의존성을 여기 쓴다
const gulp = require('gulp');
// 바벨을 걸프와 함께 사용하기
const babel = require('gulp-babel');

gulp.task('default', function() {
	// 걸프 작업을 여기 쓴다

	// 노드 소스
	gulp.src("es6/**/*.js")	// **는 서브디렉터리를 포함한 모든 디렉토리
		.pipe(babel())				// 선택한 파일들을 바벨에 연결(pipe)
		.pipe(gulp.dest("dist"));	// 연결된 파일들을 gulp로 컴파일해 dist 디렉터리에 저장
	// 브라우저 소스
	gulp.src("public/es6/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("public/dist"));
});