const box = document.querySelector(".box");
const res = document.querySelector("#res")

// update student count 
 
function update(){
    res.innerText = `Total Sudents : ${box.children.length}`
}
update();


// delete card 

const del = document.querySelectorAll(".del")

for(let button of del){
    button.addEventListener("click" , function(){
       this.closest(".card").remove();
        update();
    })
}


// favorite card

const fav = document.querySelectorAll(".fav");

for(let button of fav){
    button.addEventListener("click" , function(){
        this.closest(".card").classList.add("favt");
    })
}


// next Student 
// next Sibling



const next = document.querySelectorAll(".next");

for (let button of next) {
    button.addEventListener("click", function () {
        let current = this.closest(".card");
        let nextc = current.nextElementSibling;

        if (nextc) {
            alert("Next Student: " + nextc.children[0].innerText);
        } else {
            alert("No next student");
        }
    });
}
const prev = document.querySelectorAll(".prev");

for (let button of prev) {
    button.addEventListener("click", function () {
        let current = this.closest(".card");
        let nextc = current.previousElementSibling;

        if (nextc) {
            alert("Prev Student: " + nextc.children[0].innerText);
        } else {
            alert("No Prev  student");
        }
    });
}