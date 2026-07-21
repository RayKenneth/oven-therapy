/* ===================================
   OVEN THERAPY
   PREMIUM SCROLL ANIMATION
=================================== */


document.addEventListener("DOMContentLoaded", () => {




/* ===============================
   FLAVOR SCROLL REVEAL
================================ */


const flavorSections = document.querySelectorAll(
    ".flavor-section"
);



function revealFlavor(){


    const triggerPoint =
    window.innerHeight * 0.75;



    flavorSections.forEach(section => {



        const sectionTop =
        section.getBoundingClientRect().top;



        if(sectionTop < triggerPoint){


            section.classList.add("active");


        }


    });



}



window.addEventListener(
    "scroll",
    revealFlavor
);



revealFlavor();









/* ===============================
   NAVBAR SCROLL EFFECT
================================ */


const nav =
document.querySelector("nav");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        nav.style.background =
        "rgba(245,239,229,0.98)";


        nav.style.boxShadow =
        "0 8px 25px rgba(61,45,34,.15)";


    }

    else{


        nav.style.background =
        "rgba(245,239,229,.90)";


        nav.style.boxShadow =
        "none";


    }



});









/* ===============================
   HERO IMAGE FLOAT MOVEMENT
================================ */


const heroImage =
document.querySelector(".hero-image img");



window.addEventListener("scroll",()=>{


    if(heroImage){


        let movement =
        window.scrollY * 0.12;



        heroImage.style.transform =
        `translateY(${movement}px)`;


    }


});









/* ===============================
   FLAVOR IMAGE PARALLAX
================================ */


const productImages =
document.querySelectorAll(
    ".flavor-image img"
);



window.addEventListener("scroll",()=>{


    productImages.forEach(image=>{


        const position =
        image.getBoundingClientRect();



        const screen =
        window.innerHeight;



        if(
            position.top < screen &&
            position.bottom > 0
        ){


            let move =
            (screen - position.top) * 0.05;



            image.style.transform =
            `translateY(${move}px)`;


        }



    });



});









/* ===============================
   BUTTON SMOOTH SCROLL
================================ */


const buttons =
document.querySelectorAll("button");



buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        const products =
        document.querySelector("#flavors");



        if(products){


            products.scrollIntoView({

                behavior:"smooth"

            });


        }



    });



});









/* ===============================
   NAVIGATION SMOOTH SCROLL
================================ */


const navLinks =
document.querySelectorAll(
    "nav a"
);



navLinks.forEach(link=>{


    link.addEventListener(
        "click",
        (event)=>{


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



        }
    );


});






});
