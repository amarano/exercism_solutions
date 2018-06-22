//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

Array.prototype.last = function() {
	
	if (this.length === 0) {
		return null;
	}
	var index = this.length - 1;
	return this[index];
}

var Bob = function() {
	
	var isUppercase = function(s){
		return s.toUpperCase() === s && s.split('').some(function(c){
			return c.match(/[a-z]/i)
		});
	}
	
	var inputTypes = {
		Question : 1,
		Yelling : 2,
		Nonsense : 3,
		Statement : 4
	}
	
	var parse = function(input){
		if (isUppercase(input)){
			return inputTypes.Yelling
		}
		else if (input.trim() === ''){
			return inputTypes.Nonsense
		}
		else if (input.split('').last() === '?') {
			return inputTypes.Question
		}
		else{
			return inputTypes.Statement
		}
	}
	
	var bob = {
		hey : function(input) {
			switch (parse(input)){
				case inputTypes.Yelling:
					return 'Whoa, chill out!';
				case inputTypes.Nonsense:
					return 'Fine. Be that way!';
				case inputTypes.Question:
					return 'Sure.';
				case inputTypes.Statement:
				default:
					return 'Whatever.'
			}
		}
	}
	
	return bob;
}

module.exports = Bob;