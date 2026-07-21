/* ===================================
   OVEN THERAPY
   INTERACTIVE WEBSITE SCRIPT
=================================== */



// ================================
// SCROLL REVEAL ANIMATION
// ================================


const animatedElements = document.querySelectorAll(
    ".flavor-card, .why-card, .story, .order, .contact"
);


function revealOnScroll(){

    const triggerPoint = window.innerHeight * 0.85;


    animatedElements.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < triggerPoint){

            element.classList.add("show");

        }


    });


}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();







// ================================
// NAVBAR EFFECT
// ================================


const nav = document.querySelector("nav");


window.addEventListener("scroll", ()=>{


    if(!nav) return;


    if(window.scrollY > 50){


        nav.style.background =
        "rgba(245,239,229,0.98)";


        nav.style.boxShadow =
        "0 5px 20px rgba(61,45,34,0.15)";


    }

    else{


        nav.style.background =
        "rgba(245,239,229,0.9)";


        nav.style.boxShadow =
        "none";


    }


});









// ================================
// HERO IMAGE PARALLAX EFFECT
// ================================


const heroImage = document.querySelector(".hero-image img");


window.addEventListener("scroll", ()=>{


    if(!heroImage) return;


    const scrollY = window.scrollY;


    heroImage.style.transform =
    `translateY(${scrollY * 0.08}px)`;


});









// ================================
// SMOOTH ORDER BUTTON
// ================================


const orderButtons = document.querySelectorAll("button");


orderButtons.forEach(button => {


    if(button.textContent.includes("Order")){


        button.addEventListener("click", ()=>{


            const flavors =
            document.getElementById("flavors");


            if(flavors){


                flavors.scrollIntoView({

                    behavior:"smooth"

                });


            }


        });


    }


});









// ================================
// ACTIVE NAVIGATION LINK
// ================================


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener("scroll", ()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.style.color="#3D2D22";


        if(link.getAttribute("href") === "#" + current){

            link.style.color="#A86F4B";

        }


    });


});
