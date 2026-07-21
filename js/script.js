/* ===================================
   OVEN THERAPY
   SCROLL EXPERIENCE JAVASCRIPT
=================================== */



document.addEventListener("DOMContentLoaded", () => {





// ===============================
// FLAVOR SCROLL ACTIVATION
// ===============================


const flavorSections = document.querySelectorAll(
    ".flavor-section"
);



function activateFlavor(){


    flavorSections.forEach(section => {



        const position =
        section.getBoundingClientRect();



        const middle =
        window.innerHeight / 2;



        if(
            position.top < middle &&
            position.bottom > middle
        ){



            section.classList.add("active");



            const color =
            section.getAttribute("data-color");



            if(color){

                document.body.style.background =
                color;

            }



        }

        else{


            section.classList.remove("active");


        }



    });



}



window.addEventListener(
    "scroll",
    activateFlavor
);


activateFlavor();









// ===============================
// NAVBAR EFFECT
// ===============================


const nav =
document.querySelector("nav");



window.addEventListener("scroll",()=>{


    if(!nav) return;



    if(window.scrollY > 80){


        nav.style.background =
        "rgba(245,239,229,.98)";


        nav.style.boxShadow =
        "0 5px 25px rgba(61,45,34,.15)";


    }


    else{


        nav.style.background =
        "rgba(245,239,229,.9)";


        nav.style.boxShadow =
        "none";


    }


});









// ===============================
// HERO IMAGE PARALLAX
// ===============================


const heroImage =
document.querySelector(".hero-image img");



window.addEventListener("scroll",()=>{


    if(heroImage){


        let movement =
        window.scrollY * .12;



        heroImage.style.transform =
        `translateY(${movement}px)`;



    }



});









// ===============================
// ORDER BUTTON SCROLL
// ===============================


const buttons =
document.querySelectorAll("button");



buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        const flavors =
        document.getElementById("flavors");



        if(flavors){


            flavors.scrollIntoView({

                behavior:"smooth"

            });



        }



    });



});









// ===============================
// NAV LINK SMOOTH SCROLL
// ===============================


const links =
document.querySelectorAll("nav a");



links.forEach(link=>{


    link.addEventListener("click",(event)=>{


        const target =
        document.querySelector(
            link.getAttribute("href")
        );



        if(target){


            event.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });



        }



    });



});






});
