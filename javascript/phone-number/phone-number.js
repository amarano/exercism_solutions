var PhoneNumber = function(number){
    this.num = number;

    this.number = function() {
        var n = number.split('').filter((x) => /^\d+$/.test(x)).join('');
        console.log(n);
        if (n.length == 10){
            return n;
        } else if (n.length == 11 && n.substring(0,1) === '1') {
            return n.substring(1,11);
        } else{
            return "0000000000";
        }
    }
    this.areaCode = function() {
        return this.number().substring(0,3);
    }

    this.toString = function() {
        var n = this.number();
        return  "(" + n.substring(0,3) + ") " + n.substring(3,6) + "-" + n.substring(6,11)
    }
}

module.exports = PhoneNumber;