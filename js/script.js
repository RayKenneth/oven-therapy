const sections = document.querySelectorAll(".flavor-section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;


if(position < window.innerHeight * .65){

section.classList.add("active");


}


});


});





// Order buttons


document.querySelectorAll("button")
.forEach(button=>{


button.addEventListener("click",()=>{


document
.getElementById("flavors")
.scrollIntoView({

behavior:"smooth"

});


});


});
