var Leap = function(year) {
	this.year = year;
};

Leap.prototype.isLeap = function() {
	return this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0)
}

module.exports = Leap;