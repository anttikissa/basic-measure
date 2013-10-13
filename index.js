// Call `f` n times, return milliseconds passed.
function times(n, f) {
	var start = new Date();
	while (n--) {
		f();
	}
	var end = new Date();
	return end - start;
}

function measure(f, options) {
	var time = times(1, f);

	var report = {
		f: f,
		name: f.name,
		totalTime: time,
		toString: function() {
			return this.name + ": " + this.totalTime + " ms";
		}
	};

	console.log(report.toString());

	return report;
}

module.exports = measure;

