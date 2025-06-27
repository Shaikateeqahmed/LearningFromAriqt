document.getElementById('inputvalue').addEventListener('change',calculate);

function calculate(event){
    const inputvalue = event.target.value;
    console.log(inputvalue);
    const expression = /\+|\*|\-|\+/;

    const numbers = inputvalue.split(expression).map(Number);
    const numberA = numbers[0];
    const numberB = numbers[1];
    const operation= inputvalue.match(expression);
    if(isNaN(numberA) || isNaN(numberB) || operation===null){
        document.querySelector('span').innerText = "Operation not recognized";
        return;
    }
    const operator = operation[0];
    console.log(numberA,numberB,operator);
    const cal = new Calculator();
    if(operator === "+"){
      cal.add(numberA);
      cal.add(numberB)
      document.querySelector('span').innerText = cal.total;
      document.getElementById('inputvalue').value = ""
    }else if(operator === "-"){
        cal.add(numberA);
        cal.sub(numberB);
        document.querySelector('span').innerText = cal.total;
        document.getElementById('inputvalue').value = ""
    }else if(operator === "*"){
        cal.add(numberA);
        cal.mul(numberB);
        document.querySelector('span').innerText = cal.total;
        document.getElementById('inputvalue').value = ""
    }else if(operator === "/"){
        cal.add(numberA);
        cal.div(numberB);
        document.querySelector('span').innerText = cal.total;
        document.getElementById('inputvalue').value = ""
    }
}