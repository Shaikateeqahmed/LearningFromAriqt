
let ingredients = JSON.parse(localStorage.getItem("ingredients"));

document.getElementById("img").innerHTML = `<img src=${ingredients.image} />`
document.getElementById("name").innerHTML = `${ingredients.name}`

console.log(ingredients)
let table = document.getElementById("table");
let i = 1;
function appendToTable(data){
    table.innerHTML = null;
    data.map((el)=>{
        let tr = document.createElement("tr");

        let sno = document.createElement("td");
        sno.innerText = i;
        let name = document.createElement("td");
        name.innerText = el.name
        let qnt = document.createElement("td");
         qnt.innerText = el.amount.us.value;
        let unit = document.createElement("td");
        unit.innerText = el.amount.us.unit;
    
        tr.append(sno,name,qnt,unit);
        table.append(tr);
        i++;
    })
    
}

appendToTable(ingredients.ingredients)
