Date.prototype.rewind = function() {
	this.setSeconds(0);
    this.setMinutes(0);
	this.setHours(0);
	return this;
}

var Gigasecond = function(birthDate) {
	var getGigaDate = function() {
		return new Date(birthDate.getTime()  + 1000000000000);
	}
	
	return {
		date : getGigaDate
	}
}

module.exports = Gigasecond;