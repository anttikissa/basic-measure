// Call `f` n times, return milliseconds passed.
function times(n, f) {
	var start = new Date();
	while (n--) {
		f();
	}
	var end = new Date();
	return end - start;
}

// Round number to given precision
function round(number) {
	// TODO
	return String(number);
}

function measure(f, options) {
	var totalTime, iterations = 1;
	do {
		totalTime = times(iterations, f);
		iterations *= 2;
	} while (totalTime < 500);

	var report = {
		f: f,
		name: f.name,
		totalTime: totalTime,
		iterations: iterations,
		time: totalTime / iterations,

		formatTime: function(time) {
			if (time > 1000) {
				return round(time / 1000) + ' s';
			}

			if (time > 1) {
				return round(time) + ' ms';
			}

			if (time > 0.001) {
				return round(time * 1000) + ' μs';
			}

			if (time > 0.000001) {
				return round(time * 1000000) + ' ns';
			}
			return round(time * 1000000000) + ' ps';
		},

		toString: function() {
			return this.name + ": " + this.formatTime(this.time);
		}
	};

	console.log(report.toString());

	return report;
}

module.exports = measure;

