const body=document.querySelector(".body");
const container=document.createElement("div");
container.classList.add("container");

const squares=document.querySelectorAll(".square");
const  clear=document.querySelector(".clear");



let colorpicker=document.querySelector
("#colorpicker")
colorpicker.value="#000";


let sqPerSide=16;
let selectedcolor="#000";
let  sqWidth=100/ sqPerSide/+"%";


window.onload=()=>{
    updateGrid(sqPerSide);
    container.style.border="10px solid rgb(176, 176, 228)";
    container.style.borderRadius="10px";
    body.appendChild(container);
    const squares=document.querySelectorAll(".square");

    clear.addEventListener("click",()=>{
        squares.forEach((square)=>{
            square.style.backgroundColor="white";
        })
      
    })
}

let click=false;
container.addEventListener("mousedown",()=>{
   click=true;
})


container.addEventListener("mouseup",()=>{
    click=false;
 })



function updateGrid(sqPerSide){
    sqWidth=  100 / sqPerSide+"%";
  
    for(let i=1;i<=sqPerSide *sqPerSide ;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.style.width=sqWidth;
        square.style.height=sqWidth;
        square.addEventListener("mouseover",()=>{
            if(click){
                square.style.backgroundColor=selectedcolor;
            }
        })
        container.appendChild(square)
    }
   
}



colorpicker.addEventListener("input",(e)=>{
    selectedcolor=e.target.value;
})

const eraser=document.querySelector(".eraser")
eraser.addEventListener("click",()=>{
  selectedcolor="white"
})




