

let nutrients = JSON.parse(localStorage.getItem("nutrients"));
console.log(nutrients[0]);
document.getElementById("img").innerHTML = `<img src=${nutrients[1].image} />`
document.getElementById("name").innerHTML = `${nutrients[2].name}`

console.log(nutrients)
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
         qnt.innerText = el.amount;
        let unit = document.createElement("td");
        unit.innerText = el.unit;
        let per = document.createElement("td");
        per.innerText = el.percentOfDailyNeeds
        tr.append(sno,name,qnt,unit,per);
        table.append(tr);
        i++;
    })
    
}

appendToTable(nutrients[0].nutrients);
