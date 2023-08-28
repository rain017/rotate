
//makes sure page loads at the top
window.onload = function() {
    window.scrollTo(0, 0);
  };
  
//TASKBAR FUNCTION

function menu()
{
    var m = document.getElementById("nav-menu"); 
    m.classList.toggle('active'); 
    var w = document.querySelector(".wrapper");
    w.classList.toggle('blur')
    var b = document.getElementById("nav-bar-btn");
    b.classList.toggle('active'); 
    var x = document.getElementById("nav-bar-x");
    x.classList.toggle('active');
}

//HIDES TASK BAR WHEN SCROLLING
let lastScrollY = window.scrollY; 
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY)
    {
        navBar.classList.add("hide");
    }
    else
    {
        navBar.classList.remove("hide")
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

