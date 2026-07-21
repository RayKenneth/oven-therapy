/* ===================================
   OVEN THERAPY
   PREMIUM WEBSITE SCRIPT
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


            nav.classList.add("scrolled");


        }

        else{


            nav.classList.remove("scrolled");


        }


    }
);









/* ===================================
   SMOOTH NAVIGATION
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



            const products =
            document.querySelector(
                "#flavors"
            );



            if(products){


                products.scrollIntoView({

                    behavior:"smooth"

                });


            }



        }
    );


}









/* ===================================
   MOBILE PRODUCT TOUCH EFFECT
=================================== */


const flavorSections =
document.querySelectorAll(
    ".flavor-section"
);



flavorSections.forEach(section => {



    section.addEventListener(
        "touchstart",
        function(){



            this.classList.add("active");



        }
    );





    section.addEventListener(
        "touchend",
        function(){



            setTimeout(()=>{


                this.classList.remove("active");


            },700);



        }
    );



});









/* ===================================
   REMOVE ACTIVE WHEN SCROLLING
=================================== */


window.addEventListener(
    "scroll",
    ()=>{


        flavorSections.forEach(section=>{


            section.classList.remove("active");


        });



    }
);





});
