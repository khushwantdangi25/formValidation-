const inp = document.querySelector("#inp");
const add = document.querySelector("#addNote");
const clear = document.querySelector("#clear");
const count = document.querySelector("#count");
const list = document.querySelector("#display");
const form = document.querySelector("form");

let total = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (inp.value.trim() === "") {
        alert("Input is Empty");
        return;
    }

    const li = document.createElement("h3");
    const span = document.createElement("span");
    span.innerText = inp.value + " ";

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "delete";

    li.append(span, del);

    del.addEventListener("click", function () {
        li.remove();
        total--;
        count.innerText = total;
    });

    list.append(li);

    total++;
    count.innerText = total;

    inp.value = "";

    clear.addEventListener("click" , function(){
        list.innerHTML = "";
        total = 0
        count.innerText = total;
    })
});