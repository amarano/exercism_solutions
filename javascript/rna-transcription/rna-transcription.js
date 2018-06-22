var DnaTranscriber = function() {

	this.dnaTranslationTable = {};
	this.dnaTranslationTable['G'] = 'C';
	this.dnaTranslationTable['C'] = 'G';
	this.dnaTranslationTable['T'] = 'A';
	this.dnaTranslationTable['A'] = 'U';

	this.rnaTranslationTable = {};
	this.rnaTranslationTable['C'] = 'G';
	this.rnaTranslationTable['G'] = 'C';
	this.rnaTranslationTable['A'] = 'T';
	this.rnaTranslationTable['U'] = 'A';

	this.translate = function(table){
		return function(str) {
			return str.split('').map(function(c){
				var translated = table[c];
				return translated ? translated : c;
			}).join('')
		}
	}

	var self = this;
	
	var transcriber = {
		toRna : function(dna) {
			return self.translate(self.dnaTranslationTable)(dna);
		},
		toDna : function(rna){
			return self.translate(self.rnaTranslationTable)(rna);
		}
	}
	
	return transcriber;
}

module.exports = DnaTranscriber;