/* ===================================
   OVEN THERAPY
   SCROLL ANIMATION
=================================== */


document.addEventListener("DOMContentLoaded", () => {


    const animatedElements = document.querySelectorAll(
        ".flavor-card, .why-card, .story, .order, .contact"
    );


    animatedElements.forEach(element => {

        element.classList.add("hidden");

    });



    function reveal(){

        const trigger = window.innerHeight * 0.85;


        animatedElements.forEach(element => {


            const position =
            element.getBoundingClientRect().top;


            if(position < trigger){

                element.classList.add("show");

            }


        });


    }



    window.addEventListener("scroll", reveal);


    reveal();





    // NAVBAR EFFECT

    const nav = document.querySelector("nav");


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){

            nav.classList.add("scrolled");

        }

        else{

            nav.classList.remove("scrolled");

        }


    });






    // HERO IMAGE PARALLAX


    const heroImage =
    document.querySelector(".hero-image img");


    window.addEventListener("scroll",()=>{


        if(heroImage){


            let movement =
            window.scrollY * 0.15;


            heroImage.style.transform =
            `translateY(${movement}px)`;


        }


    });



});
