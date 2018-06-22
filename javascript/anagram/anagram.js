var Anagram = function(word){

    var w = word.toLowerCase().split('').sort().join('');

    this.matches = function(a){
        var args = Array.prototype.slice.call(arguments)
        args = args.reduce((x, y) => {
            var left = Array.isArray(x) ? x : [x];
            var right = Array.isArray(y) ? y : [y];
            return left.concat(right);
        }, [])        
        return args.filter((x) => x.toLowerCase() !== word.toLowerCase() && x.toLowerCase().split('').sort().join('') === w);
    }
}

module.exports = Anagram;