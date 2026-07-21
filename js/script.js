/* ===================================
   OVEN THERAPY
   PREMIUM WEBSITE SCRIPT
=================================== */


document.addEventListener("DOMContentLoaded", function(){



/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */


const revealElements = document.querySelectorAll(
    ".flavor-section, .why-card, .story, .contact"
);



revealElements.forEach(element => {

    element.classList.add("hidden");

});




function revealOnScroll(){


    const triggerPoint =
    window.innerHeight * 0.85;



    revealElements.forEach(element => {



        const elementTop =
        element.getBoundingClientRect().top;



        if(elementTop < triggerPoint){

            element.classList.add("show");

        }



    });



}



window.addEventListener(
    "scroll",
    revealOnScroll
);



revealOnScroll();









/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */


const nav =
document.querySelector("nav");



window.addEventListener(
    "scroll",
    function(){



        if(window.scrollY > 50){



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



    }
);









/* ===================================
   HERO BUTTON
=================================== */


const heroButton =
document.querySelector(".hero button");



if(heroButton){


    heroButton.addEventListener(
        "click",
        function(){


            const products =
            document.querySelector("#flavors");



            if(products){


                products.scrollIntoView({

                    behavior:"smooth"

                });


            }


        }
    );


}









/* ===================================
   NAVIGATION SMOOTH SCROLL
=================================== */


const navLinks =
document.querySelectorAll(
    "nav a"
);



navLinks.forEach(link => {



    link.addEventListener(
        "click",
        function(event){



            const target =
            document.querySelector(
                this.getAttribute("href")
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









/* ===================================
   PRODUCT IMAGE FLOAT EFFECT
=================================== */


const productImages =
document.querySelectorAll(
    ".flavor-image img"
);



productImages.forEach(image => {



    image.addEventListener(
        "mouseenter",
        function(){


            image.style.transform =
            "scale(1.08) translateY(-15px)";


        }
    );





    image.addEventListener(
        "mouseleave",
        function(){


            image.style.transform =
            "scale(1) translateY(0)";


        }
    );



});









/* ===================================
   PRODUCT CARD MOUSE EFFECT
=================================== */


const flavorCards =
document.querySelectorAll(
    ".flavor-section"
);



flavorCards.forEach(card => {



    card.addEventListener(
        "mouseenter",
        function(){



            card.style.boxShadow =
            "0 35px 70px rgba(61,45,34,.20)";



        }
    );





    card.addEventListener(
        "mouseleave",
        function(){



            card.style.boxShadow =
            "none";



        }
    );



});









/* ===================================
   ORDER BUTTONS
=================================== */


const orderButtons =
document.querySelectorAll(
    ".order-btn"
);



orderButtons.forEach(button => {



    button.addEventListener(
        "click",
        function(){



            const contact =
            document.querySelector(
                "#contact"
            );



            if(contact){


                contact.scrollIntoView({

                    behavior:"smooth"

                });


            }


        }
    );



});









/* ===================================
   LEARN MORE BUTTON
=================================== */


const learnButtons =
document.querySelectorAll(
    ".learn-btn"
);



learnButtons.forEach(button => {



    button.addEventListener(
        "click",
        function(){



            const product =
            this.closest(
                ".flavor-section"
            );



            const flavor =
            product.querySelector(
                "h2"
            ).textContent;



            this.textContent =
            flavor + " Selected";



            setTimeout(()=>{


                this.textContent =
                "Learn More";



            },1500);



        }
    );



});









/* ===================================
   PARALLAX EFFECT FOR HERO
=================================== */


const hero =
document.querySelector(".hero");



window.addEventListener(
    "scroll",
    function(){



        if(hero){



            let scroll =
            window.scrollY;



            hero.style.backgroundPositionY =
            scroll * 0.3 + "px";



        }



    }
);





});
