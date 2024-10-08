const navButton =document.querySelector(".navMenuButton");
const header=document.querySelector(".header")

const toggleButton=()=>{
  
  header.classList.toggle("active");
}

navButton.addEventListener("click",()=>toggleButton());