var Isogram = function(word){
    this.word = word;
    
    this.isIsogram = function(){
        var map = {};
        this.word
            .split('')
            .map((c) => c.toLowerCase())
            .filter((c) => c.match(/[a-z]/i))
            .forEach((x) => {
            if (map[x]){
                map[x]++;
            } else{
                map[x] = 1;
            }
        });
        return Object.keys(map).every(x => map[x] == 1);
    }
}

module.exports = Isogram;