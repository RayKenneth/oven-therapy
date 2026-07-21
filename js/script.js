/* ===================================
   OVEN THERAPY
   PREMIUM WEBSITE JAVASCRIPT
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


    const trigger =
    window.innerHeight * 0.85;



    revealElements.forEach(element => {



        const elementTop =
        element.getBoundingClientRect().top;



        if(elementTop < trigger){


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
            "0 10px 30px rgba(61,45,34,.18)";



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
            "scale(1)";



        }
    );



});









/* ===================================
   PRODUCT CARD HOVER EFFECT
=================================== */


const flavorSections =
document.querySelectorAll(
    ".flavor-section"
);



flavorSections.forEach(section => {



    section.addEventListener(
        "mouseenter",
        function(){



            section.style.boxShadow =
            "0 30px 60px rgba(61,45,34,.25)";



        }
    );




    section.addEventListener(
        "mouseleave",
        function(){



            section.style.boxShadow =
            "0 20px 40px rgba(61,45,34,.12)";



        }
    );



});









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
            button.closest(
                ".flavor-section"
            );



            const name =
            product.querySelector(
                "h2"
            ).innerText;



            button.innerText =
            "Selected " + name;



            setTimeout(function(){


                button.innerText =
                "Learn More";


            },1500);



        }
    );



});









/* ===================================
   FLAVOR BACKGROUND TRANSITION
=================================== */


window.addEventListener(
    "scroll",
    function(){



        let currentFlavor = "";



        flavorSections.forEach(section => {



            const sectionPosition =
            section.getBoundingClientRect();



            if(
                sectionPosition.top <= window.innerHeight / 2 &&
                sectionPosition.bottom >= window.innerHeight / 2
            ){



                currentFlavor =
                section.className;



            }



        });






        if(currentFlavor.includes("classic")){


            document.body.style.background =
            "#FFF1E6";


        }


        else if(currentFlavor.includes("cheese")){


            document.body.style.background =
            "#FFF4B8";


        }


        else if(currentFlavor.includes("oreo")){


            document.body.style.background =
            "#D9D9D9";


        }


        else if(currentFlavor.includes("almond")){


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
