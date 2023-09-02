
//makes sure page loads at the top
window.onload = function() {
    window.scrollTo(0, 0);
  };
  
//TASKBAR FUNCTION
function menu()
{
    document.getElementById("nav-menu").classList.toggle('active'); 
    document.querySelector(".wrapper").classList.toggle('blur'); 
    document.getElementById("nav-bar-btn").classList.toggle("x"); 
    document.getElementById("nav-bar-btn-1").classList.toggle('x'); 
    document.getElementById("nav-bar-btn-2").classList.toggle('x'); 
}

//HIDES TASK BAR WHEN SCROLLING 
let lastScrollY = window.scrollY; 
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY == 0)
    {
        navBar.classList.remove("hide");
    }
    else if(lastScrollY < window.scrollY)
    {
        navBar.classList.add("hide")
    }
    lastScrollY = window.scrollY;
})
//SCROLL ANIMATIONS

//observer for the button scroll animations
const buttons = document.querySelectorAll(".button"); 
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })   
}, 
)

buttons.forEach(button => {
    observer.observe(button)
})

//observer for the navigation menu animations
const nav = document.querySelectorAll(".nav-btn");
const navObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("navShow", entry.isIntersecting)
    })
})
nav.forEach(button => {
    navObserver.observe(button)
})

//observer for the information
//COME BACK TO RESOLVE ---------------------------------------------------------------------------------------------------------------
const information = document.querySelectorAll(".info"); 
const infoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("infoShow", entry.isIntersecting)
    })
})
information.forEach(info => {
    infoObserver.observe(info)
})

//observer for the WHY USE ROTATE
const q = document.querySelectorAll(".question")
const questObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry)
        entry.target.classList.toggle("questShow", entry.isIntersecting)
    })
})
q.forEach(quest => {
    questObserver.observe(quest)
})
console.log(q)

