function measure(f, options) {
	var start = new Date();
	f();
	var end = new Date();
	var report = {
		f: f,
		name: f.name,
		totalTime: end - start,
		toString: function() {
			return this.name + ": " + this.totalTime + " ms";
		}
	};

	console.log(report.toString());

	return report;
}

module.exports = measure;

