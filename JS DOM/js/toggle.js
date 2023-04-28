// const saveBtn = document.querySelector(".btn-save")
const btns = document.getElementsByClassName("btn-save")
const body = document.body
const toggle = document.querySelector(".checkbox")
const navbar = document.querySelector(".header")
const thead = document.querySelector(".head")
const trow = document.querySelector(".head tr")


// --- style by setAttribute method ---
// saveBtn.setAttribute("style", "padding: 5px 20px; background-color: rgb(1, 21, 66);color: #fff;border: none;border-radius: 5px;cursor: pointer;")


// --- style by direct method ---
// saveBtn.style.padding = "5px 20px";
// saveBtn.style.backgroundColor = "rgb(1, 21, 66)";
// saveBtn.style.color = "#fff";


// --- style by cssText method ---
// saveBtn.style.cssText = "padding: 5px 20px; background-color: rgb(1, 21, 66);color: #fff;border: none;border-radius: 5px;cursor: pointer;" 
// console.log(window.getComputedStyle(saveBtn)); 

toggle.addEventListener("click", ()=>{
    if(toggle.checked){
        body.style.background = "#5CDB95";
        navbar.style.background = "#04284c";
        thead.style.background = "#04284c";
        Array.from(btns).forEach((btn)=>{
            btn.style.background ="#04284c";
        })
    }else{
        body.style.background = "#04284c";
        navbar.style.background = "#5CDB95"
        thead.style.background = "#5CDB95";
        Array.from(btns).forEach((btn)=>{
            btn.style.background ="#5CDB95";
        })
    }
})

// toggle.addEventListener("click", ()=>{
//     if(toggle.checked){
//         body.classList.add("bg-green-500");
//         // navbar.classList.add("bg-blue-900");
//         // btns.forEach((btn)=>{
//         //     btn.classList.add("bg-blue-900");
//         // });
//     }else{
//         body.classList.remove("bg-green-500");
//         // navbar.classList.remove("bg-blue-900");
//         // btns.forEach((btn)=>{
//         //     btn.classList.remove("bg-blue-900");
//         // });
//     }
// });
