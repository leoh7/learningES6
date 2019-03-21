// 걸프 의존성을 여기 쓴다
const gulp = require('gulp');
// babel을 gulp와 함께 사용하기
const babel = require('gulp-babel');
// ESLint를 gulp와 함께 사용
const eslint = require('gulp-eslint');

gulp.task('default', function() {
	// 걸프 작업을 여기 쓴다

	// ESLint 실행
	gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());

	// 노드 소스
	gulp.src("es6/**/*.js")	// **는 서브디렉터리를 포함한 모든 디렉토리
		.pipe(babel({					// 선택한 파일들을 바벨에 연결(pipe)
			presets: ['@babel/preset-env']
		}))
		.pipe(gulp.dest("dist"));	// 연결된 파일들을 gulp로 컴파일해 dist 디렉터리에 저장
	// 브라우저 소스
	gulp.src("public/es6/**/*.js")
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(gulp.dest("public/dist"));
});