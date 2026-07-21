/* ===================================
   OVEN THERAPY
   MOBILE TOUCH EFFECT + SCROLL
=================================== */


document.addEventListener("DOMContentLoaded", function(){



/* ==============================
   SCROLL REVEAL
============================== */


const elements = document.querySelectorAll(
    ".flavor-section, .why-card, .story, .contact"
);



elements.forEach(element=>{

    element.classList.add("hidden");

});




const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},
{
    threshold:0.15
}
);



elements.forEach(element=>{

    observer.observe(element);

});







/* ==============================
   NAVBAR SHADOW
============================== */


const nav = document.querySelector("nav");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }
    else{

        nav.classList.remove("scrolled");

    }


});







/* ==============================
   SMOOTH NAVIGATION
============================== */


document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

    e.preventDefault();


    target.scrollIntoView({

        behavior:"smooth"

    });

}



});


});








/* ==============================
   HERO ORDER BUTTON
============================== */


const orderButton =
document.querySelector(".hero button");



if(orderButton){


orderButton.addEventListener("click",()=>{


document
.querySelector("#flavors")
.scrollIntoView({

behavior:"smooth"

});


});


}








/* ==============================
   MOBILE HOLD EFFECT
============================== */


const products =
document.querySelectorAll(
".flavor-section"
);



products.forEach(product=>{


let timer;



product.addEventListener(
"touchstart",
function(){


timer = setTimeout(()=>{


this.classList.add("active");


},150);



});





product.addEventListener(
"touchend",
function(){


clearTimeout(timer);


this.classList.remove("active");


});





product.addEventListener(
"touchmove",
function(){


clearTimeout(timer);


this.classList.remove("active");


});


});





});
