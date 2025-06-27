const {add, sub, mult, div} = require('./calculator.js');

let arguments = process.argv.splice(2)
console.log(arguments)
if(arguments[0]=='add'){
    console.log(add(+arguments[1],+arguments[2]))
}else if(arguments[0]=='sub'){
    console.log(sub(+arguments[1],+arguments[2]))
}else if(arguments[0]=='mult'){
    console.log(mult(+arguments[1],+arguments[2]))
}else if(arguments[0]=='div'){
    console.log(div(+arguments[1],+arguments[2]))
}
