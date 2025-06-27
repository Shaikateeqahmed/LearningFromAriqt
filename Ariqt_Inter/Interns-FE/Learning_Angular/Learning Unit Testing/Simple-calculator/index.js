function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function(number){
    return this.total += number;
}

Calculator.prototype.sub = function(number){
    return this.total -= number;
}

Calculator.prototype.mul = function(number){
    return this.total *= number;
}

Calculator.prototype.div = function(number){
    if(number === 0 ){
        throw new Error('Number should not be 0')
    }
    return this.total /= number;
}