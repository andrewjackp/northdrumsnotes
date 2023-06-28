let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(countEl)

function increment(){
    count++;
    countEl.textContent = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = count * 0;
    console.log(count)
}

// let welcomeEl = document.getElementById("welcome-el");
// let name = "andy ";
// let greeting = "sup ";
// welcomeEl.innerText = greeting + name;
// welcomeEl.innerText += "😁";
