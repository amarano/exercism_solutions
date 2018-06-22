var Words = function() {
		
	var count = function(word) {
		
		var counter = Object.create(null);
		
		word.trim().split(/\s+/).forEach(function(w) {
			if (counter[w]){
				counter[w] += 1;
			} else {
				counter[w] = 1;
			}
		})
		
		return counter;
		
	}
	
	var word = {
		count : count
	}
	
	return word;
}

module.exports = Words