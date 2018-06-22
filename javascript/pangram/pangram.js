var Pangram = function(word){
    this.word = word;
    this.isPangram = function() {
        var letters = Array.apply(null, Array(26)).map(() => false);
        word
        .toLowerCase()
        .split('')
        .filter((c) => c.match(/[a-z]/i))
        .map((d) => d.charCodeAt(0) - 97)
        .forEach((l) => letters[l] = true);
        
        return letters.every((x) => x);
    }
}

module.exports = Pangram;