var Hamming = function() {};

Hamming.prototype.compute = function(strandOne, strandTwo){
	if (strandOne.length !== strandTwo.length){
		throw Error("DNA strands must be of equal length.")
	}
	
	var distance = 0;
	var strandTwoArray = strandTwo.split('');
	strandOne.split('').map(function(e, i) {
		if (strandTwoArray[i] != e){
			distance++;
		}
	})
	return distance;
}

module.exports = Hamming;