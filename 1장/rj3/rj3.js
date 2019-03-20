// 다른 전역 변수와 충돌을 피하기 위해 이름공간을 생성한다.
var rj3 = {};

// svg 라는 하위 이름공간을 만든다.
rj3.svg = {};

// rj3.svg 이름공간에 line 함수를 넣는다.
rj3.svg.line = function() {
	var getX = function(point) {
				return point[0];
	},
			getY = function(point) {
				return point[1];
	},
			interpolate = function(points) {
				// join 은 여러 변수를 구분자를 지정하여 합칠 수 있게 해준다
				// ex) points = [0, null, 2, undefined, 4]
				// points.join("L") ==> [0LL2LL4]
				return points.join("L");
	};

	function line(data) {
		var segments = [],
				points = [],
				i = -1,
				n = data.length,
				d;
		
		function segment() {
			segments.push("M", interpolate(points));
		}

		while (++i < n) {
			d = data[i];
			points.push([+getX.call(this, d, i), +getY.call(this, d, i)]);
		}
		if(points.length) {
			segment();
		}

		return segments.length ? segments.join("") : null;
	}

	line.x = function(funcToGetX) {
		if(!arguments.length) return getX;
		getX = funcToGetX;
		return line;
	};

	line.y = function(funcToGetY) {
		if(!arguments.length) return getY;
		getY = funcToGetY;
		return line;
	};

	return line;
}