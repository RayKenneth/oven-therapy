/* ===================================
   OVEN THERAPY
   SIMPLE PREMIUM ANIMATION SCRIPT
=================================== */


document.addEventListener("DOMContentLoaded", () => {



/* ==============================
   SCROLL REVEAL
============================== */


const sections = document.querySelectorAll(
    ".flavor-section, .why-card, .story, .contact"
);



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



sections.forEach(section=>{


section.classList.add("hidden");

observer.observe(section);


});







/* ==============================
   NAVBAR EFFECT
============================== */


const nav = document.querySelector("nav");



window.addEventListener("scroll",()=>{


if(window.scrollY > 40){


nav.classList.add("scrolled");


}else{


nav.classList.remove("scrolled");


}



});







/* ==============================
   SMOOTH SCROLL
============================== */


document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",(e)=>{


const target =
document.querySelector(
link.getAttribute("href")
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
   HERO BUTTON
============================== */


const heroButton =
document.querySelector(".hero button");



if(heroButton){


heroButton.addEventListener("click",()=>{


document
.querySelector("#flavors")
.scrollIntoView({

behavior:"smooth"

});


});


}







});
