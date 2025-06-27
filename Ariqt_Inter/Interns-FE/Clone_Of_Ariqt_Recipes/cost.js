let cost = JSON.parse(localStorage.getItem("cost"));
console.log(cost);

document.getElementById("img").innerHTML = `<img src=${cost.image} />`
document.getElementById("name").innerHTML = `${cost.name}`


let table = document.getElementById("table");
let i = 1;
function appendToTable({ingredients,totalCost}){
    table.innerHTML = null;
    ingredients.map((el)=>{
        let tr = document.createElement("tr");

        let sno = document.createElement("td");
        sno.innerText = i;
        let name = document.createElement("td");
        name.innerText = el.name
        let qnt = document.createElement("td");
         qnt.innerText = el.amount.metric.value;
        let unit = document.createElement("td");
        unit.innerText = el.amount.metric.unit;
        let price = document.createElement("td");
        price.innerHTML = el.price
    
        tr.append(sno,name,qnt,unit,price);
        table.append(tr);
        i++;
    })
    let tr = document.createElement("tr");

    let sno = document.createElement("td");
    sno.innerText = "";
    let name = document.createElement("td");
    name.innerText = "Total Estimated Cost"
    name.style.backgroundColor = "teal"
    name.style.color = "white"
    let qnt = document.createElement("td");
     qnt.innerText = "";
    let unit = document.createElement("td");
    unit.innerText = "";
    let price = document.createElement("td");
    price.innerHTML = totalCost
    price.style.backgroundColor = "teal"
    price.style.color = "white"
    tr.append(sno,name,qnt,unit,price);
    table.append(tr);
    i++;
}

appendToTable(cost)
