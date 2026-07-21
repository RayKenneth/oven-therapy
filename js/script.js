/* ===================================
   OVEN THERAPY
   PREMIUM WEBSITE INTERACTIONS
=================================== */


document.addEventListener("DOMContentLoaded", function(){



/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */


const animatedElements = document.querySelectorAll(
    ".flavor-section, .why-card, .story, .contact"
);



animatedElements.forEach(element => {

    element.classList.add("hidden");

});





function revealOnScroll(){


    const triggerPoint =
    window.innerHeight * 0.85;



    animatedElements.forEach(element => {


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
   HERO IMAGE PARALLAX
=================================== */


const heroImage =
document.querySelector(".hero-image img");



window.addEventListener(
    "scroll",
    function(){



        if(heroImage){



            let movement =
            window.scrollY * 0.12;



            heroImage.style.transform =
            `translateY(${movement}px)`;



        }



    }
);









/* ===================================
   PRODUCT IMAGE HOVER
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
            "scale(1.12) translateY(-15px)";



        }
    );



    image.addEventListener(
        "mouseleave",
        function(){



            image.style.transform =
            "scale(1)";



        }
    );



});









/* ===================================
   FLAVOR CARD HOVER EFFECT
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
            "0 30px 60px rgba(61,45,34,.20)";



        }
    );




    card.addEventListener(
        "mouseleave",
        function(){



            card.style.boxShadow =
            "0 20px 40px rgba(61,45,34,.12)";



        }
    );



});









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
   HERO ORDER BUTTON
=================================== */


const heroButton =
document.querySelector(
    ".hero button"
);



if(heroButton){



    heroButton.addEventListener(
        "click",
        function(){



            const flavors =
            document.querySelector(
                "#flavors"
            );



            if(flavors){



                flavors.scrollIntoView({

                    behavior:"smooth"

                });



            }



        }
    );



}









/* ===================================
   PRODUCT ORDER BUTTONS
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
   LEARN MORE BUTTONS
=================================== */


const learnButtons =
document.querySelectorAll(
    ".learn-btn"
);



learnButtons.forEach(button => {



    button.addEventListener(
        "click",
        function(){



            const card =
            button.closest(
                ".flavor-section"
            );



            const name =
            card.querySelector(
                "h2"
            ).innerText;



            alert(
                name +
                " cinnamon roll is freshly baked with premium ingredients."
            );



        }
    );



});









/* ===================================
   ACTIVE FLAVOR DETECTION
   CHANGES BODY MOOD WHILE SCROLLING
=================================== */


const flavorSections =
document.querySelectorAll(
    ".flavor-section"
);



window.addEventListener(
    "scroll",
    function(){



        let currentSection = "";



        flavorSections.forEach(section => {



            const position =
            section.getBoundingClientRect();



            if(
                position.top <= window.innerHeight / 2 &&
                position.bottom >= window.innerHeight / 2
            ){


                currentSection =
                section.className;



            }



        });




        if(currentSection.includes("classic")){


            document.body.style.background =
            "#FFF1E6";


        }


        else if(currentSection.includes("cheese")){


            document.body.style.background =
            "#FFF4B8";


        }


        else if(currentSection.includes("oreo")){


            document.body.style.background =
            "#D9D9D9";


        }


        else if(currentSection.includes("almond")){


            document.body.style.background =
            "#CFA27D";


        }



        else{


            document.body.style.background =
            "#F5EFE5";


        }




    }
);






});
