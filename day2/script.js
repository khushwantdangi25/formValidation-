let obj = [{pic:"https://plus.unsplash.com/premium_photo-1680667683160-5794fb14c940?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" , name:"city"} ,
     {pic:"https://images.unsplash.com/photo-1784273889978-624c76106b4b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" , name:"beach"},
     {pic:"https://plus.unsplash.com/premium_photo-1676478746561-8feeaa7a307a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" , name :"bloom"} ,
     {pic:"https://images.unsplash.com/photo-1779448069973-2b8f2d928cb0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" , name :"flower"}]

let parent = document.querySelector(".main");
let add = document.querySelector(".add");
let input = document.querySelector("input");



input.addEventListener("input", function (e) {
    let nw = obj.filter(u =>
        u.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    parent.innerHTML = ""; 

    nw.forEach((i) => {
        let h1 = document.createElement("h1");
        let card = document.createElement("div");
        card.classList.add("card");

        let im = document.createElement("img");
        im.setAttribute("src", i.pic);

        im.style.width = "150px";
        im.style.height = "150px";
        im.style.objectFit = "cover";

        h1.textContent = i.name;

        card.appendChild(im);
        card.appendChild(h1);
        parent.appendChild(card);
    });
});


