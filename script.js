const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

el.classList.add("active");

}

});

});

const nav=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

nav.style.padding="15px 10%";

}else{

nav.style.padding="20px 10%";

}

});


const bg = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    bg.style.backgroundPosition = `center ${scroll * 0.4}px`;

});