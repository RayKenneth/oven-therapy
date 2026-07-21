/* ===================================
   OVEN THERAPY
   SCROLL ANIMATIONS
=================================== */


// Select elements

const animatedElements = document.querySelectorAll(
    ".flavor-card, .why-card, .story, .order, .contact"
);



// Add hidden class

animatedElements.forEach(element => {

    element.classList.add("hidden");

});




// Scroll reveal function

function revealOnScroll(){

    const triggerBottom = window.innerHeight * 0.85;


    animatedElements.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;



        if(elementTop < triggerBottom){

            element.classList.add("show");

        }


    });


}



window.addEventListener("scroll", revealOnScroll);


revealOnScroll();





// Navbar animation on scroll


const nav = document.querySelector("nav");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 50){

        nav.style.background = "rgba(245,239,229,0.98)";

        nav.style.boxShadow =
        "0 5px 20px rgba(61,45,34,.15)";

    }

    else{

        nav.style.background =
        "rgba(245,239,229,.9)";

        nav.style.boxShadow="none";

    }


});






// Hero image movement


const heroImage = document.querySelector(".hero-image img");


window.addEventListener("scroll", ()=>{


    if(heroImage){


        let scrollPosition = window.scrollY;


        heroImage.style.transform =
        `translateY(${scrollPosition * 0.15}px)`;


    }


});







// Order buttons smooth scroll


const orderButtons = document.querySelectorAll("button");


orderButtons.forEach(button=>{


    if(button.textContent.includes("Order")){


        button.addEventListener("click", ()=>{


            document
            .getElementById("flavors")
            .scrollIntoView({

                behavior:"smooth"

            });


        });


    }


});
