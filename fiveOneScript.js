
//makes sure page loads at the top ---------------------------------------------------------------------------------------------------------------------------
window.onload = function() {
    window.scrollTo(0, 0);
  };

//just changes the text from press to play depending on device
  if (window.innerWidth > 1279)
  {
    document.querySelector(".player-info-text").innerHTML = "Click on a player for info"
    console.log('Window width is greater than 1279');
    document.querySelector('.more-info-text').getElementsByTagName('span').innerHTML = 'Click anywhere to exit'
  }

function blur()
{
    document.querySelector(".wrapper").classList.toggle('blur'); 
}

//responsible for menu animation ---------------------------------------------------------------------------------------------------------------------------

function menu()
{
    document.getElementById("nav-menu").classList.toggle('active'); 
    document.querySelector(".wrapper").classList.toggle('blur'); 
    document.getElementById("nav-bar-btn").classList.toggle("x"); 
    document.getElementById("nav-bar-btn-1").classList.toggle('x'); 
    document.getElementById("nav-bar-btn-2").classList.toggle('x'); 
}

const nav = document.querySelectorAll(".nav-btn");
const navObserver = new IntersectionObserver((entries, navObserver) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("navShow", entry.isIntersecting)
    })
})
nav.forEach(button => {
    navObserver.observe(button)
})

//responsible for taskbar dissapearing on scroll ---------------------------------------------------------------------------------------------------------------------------
let lastScrollY = window.scrollY; 
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY == 0)
    {
        navBar.classList.remove("hide");
    }
    else if (lastScrollY < window.scrollY)
    {
        navBar.classList.add("hide")
    }
    lastScrollY = window.scrollY;
})

//makes sure taskbar is visible at the very top 
if (window.scrollY == 0) 
{
    document.querySelector(".nav-bar").classList.remove("hide"); 
}

//BUTTON ANIMATIONS ------------------------------------------------------------------------------------------------

//base button active animation
var baseButton = document.querySelector('.base-btn'); 
baseButton.addEventListener('click', function() {
    baseButton.style.backgroundColor = 'white'; 
    baseButton.style.color = 'var(--blue)'; 

    var targetElement = document.querySelector("#status"); 
    targetElement.scrollIntoView({
        behavior: "smooth" 
    })

    setTimeout(function() {
        baseButton.style.backgroundColor = 'var(--blue)'
        baseButton.style.color = 'white'; 
    }, 200)  
})

//arrow button active animation
var leftArrow = document.getElementById('arrow-left');
var rightArrow = document.getElementById('arrow-right'); 
leftArrow.addEventListener('click', function() {
    leftArrow.style.backgroundColor = 'white'; 
    leftArrow.style.color = 'var(--orange)';
    setTimeout(function() {
        leftArrow.style.backgroundColor = 'var(--orange'; 
        leftArrow.style.color = 'white';
    }, 200)
})
rightArrow.addEventListener('click', function() {
    rightArrow.style.backgroundColor = 'white'; 
    rightArrow.style.color = 'var(--orange)';
    setTimeout(function() {
        rightArrow.style.backgroundColor = 'var(--orange'; 
        rightArrow.style.color = 'white';
    }, 200)
})

//rotate button animation
var rotateButton = document.querySelector('#rotate-button');
rotateButton.addEventListener('click', function() {
    rotateButton.style.backgroundColor = 'var(--orange)';
    document.querySelector('.rotate-border-button-container').style.backgroundColor = 'var(--orangeBorder)'; 
    setTimeout(function() {
        rotateButton.style.backgroundColor = 'var(--blue)';
        document.querySelector('.rotate-border-button-container').style.backgroundColor = 'var(--blueBorder)'; 
    }, 200)
})
/*--------------------------------------------------FIVE ONE ROTATION DISPLAY----------------------------------------*/



//choosing what rotation number to go through
var rotationNumber = 1;

function plus()
{   
    rotationNumber++;
    if (rotationNumber > 6)
        rotationNumber = 1;
    var num = document.getElementById("num");
    num.innerHTML = rotationNumber;
}

function minus()
{
    rotationNumber--;
    if (rotationNumber < 1)
        rotationNumber = 6;
    var num = document.getElementById("num");
    num.innerHTML = rotationNumber;
}

//choosing whether serve or serve receive rotation----------------------------------------------------------------------------------------------------
console.log(document.querySelectorAll('.button'))

var isServing = false;

function serveOn()
{
    var buttons = document.querySelectorAll(".button"); 
    var serve = buttons[0]; 
    var receive = buttons[1]; 
    serve.classList.add("active"); 
    document.querySelector(".serve-border").classList.add('active'); 
    receive.classList.remove("active"); 
    document.querySelector('.receive-border').classList.remove('active'); 
    isServing = true;
}    

function receiveOn()
{
    var buttons = document.querySelectorAll(".button"); 
    var serve = buttons[0]; 
    var receive = buttons[1]; 
    serve.classList.remove("active"); 
    document.querySelector(".serve-border").classList.remove('active'); 
    receive.classList.add("active"); 
    document.querySelector('.receive-border').classList.add('active'); 
    isServing = false;
}

//Player info------------------------------------------------------------------------------------------------------------------------------------------------------------------
var sInfo = "Setters are responsible for the second touch whenever possible. They're in the front row for rotations 4-6 and in the back row for 1-3";
var oInfo = "Opposite hitters will play defense and hit on the right side. They will be in the front row for rotations 1-3 and for the back row in 4-6";
var mInfo = "Middle blockers have to read the opponents offense and play defense against it. Middle Blocker 1 will serve for the libero in rotation 6";
var oh1Info = "Outside hitter 1 is one of the main hitters of the team and will be in the front for rotations 1, 5, and 6";
var oh2Info = "Outside hitter 2 is one of the main hitters of the team and will be in the front for rotations 2, 3, and 4";
var lInfo = "Liberos will always play in the back row as they are a key defense specialist. However, middle blocker 1 will serve for them in rotation 6";
const players = document.querySelectorAll(".player"); 

function infoHelper(param)
{
    for (let i = 0; i < players.length; i++)
    {
        players[i].classList.remove("info"); 
    }
    players[param].classList.add("info"); 
}

function displaySetterInfo()
{
    document.querySelector(".player-info-text").innerHTML = sInfo; 
    infoHelper(2);
}

function displayOppInfo()
{ 
    document.querySelector(".player-info-text").innerHTML = oInfo; 
    infoHelper(5);
}

function displayLiberoInfo()
{
    document.querySelector(".player-info-text").innerHTML = lInfo; 
    infoHelper(3);
}

function displayMB1Info()
{
    document.querySelector(".player-info-text").innerHTML = mInfo; 
    infoHelper(6);
}

function displayMB2Info()
{ 
    document.querySelector(".player-info-text").innerHTML = mInfo; 
    infoHelper(1);
}

function displayOH1Info()
{
    document.querySelector(".player-info-text").innerHTML = oh1Info; 
    infoHelper(0);
}

function displayOH2Info()
{
    document.querySelector(".player-info-text").innerHTML = oh2Info; 
    infoHelper(4);
}

//MORE PLAYER INFO---------------------------------------------------------------------------------------------------------------
function getMoreInfo()
{
    var text = document.querySelector(".player-info-text").innerHTML; 
    document.querySelector(".more-info-text").innerHTML = text; 
    document.querySelector(".more-info").classList.toggle("active"); 
    document.querySelector(".nav-bar").classList.toggle("blur"); 
    blur(); 
}




//CHANGING ROTATIONS-------------------------------------------------------------------------------------------------------------------------

//scrolls the user back up to see the rotation animation when button is pressed
document.getElementById("rotate-button").addEventListener("click", function() {
    var targetElement = document.querySelector("#status"); 
    targetElement.scrollIntoView({
        behavior: "smooth" 
    })
})



function rotateFiveOne()
{
    if(isServing)
    {
        if(rotationNumber == 1)
        {
            fiveOneServeOne();
            document.getElementById("status-text").innerHTML = "Serve 1";
        }
        else if(rotationNumber == 2)
        {
            fiveOneServeTwo();
            document.getElementById("status-text").innerHTML = "Serve 2";
        }
            
        else if(rotationNumber == 3)
        {
            fiveOneServeThree();
            document.getElementById("status-text").innerHTML = "Serve 3";
        }
        else if(rotationNumber == 4)
        {
            fiveOneServeFour(); 
            document.getElementById("status-text").innerHTML = "Serve 4";
        }
        else if(rotationNumber == 5)
        {
            fiveOneServeFive(); 
            document.getElementById("status-text").innerHTML = "Serve 5";
        }
        else if(rotationNumber == 6)
        {
            fiveOneServeSix(); 
            document.getElementById("status-text").innerHTML = "Serve 6";
        }
            
    }
    else
    {
        if(rotationNumber == 1)
        {
            fiveOneReceiveone(); 
            document.getElementById("status-text").innerHTML = "Receive 1";
        }
        else if(rotationNumber == 2)
        {
            fiveOneReceiveTwo();
            document.getElementById("status-text").innerHTML = "Receive 2";
        }
        else if(rotationNumber == 3)
        {
            fiveOneReceiveThree(); 
            document.getElementById("status-text").innerHTML = "Receive 3";
        }
        else if(rotationNumber == 4)
        {
            fiveOneReceiveFour(); 
            document.getElementById("status-text").innerHTML = "Receive 4";
        }
        else if(rotationNumber == 5)
        {
            fiveOneReceiveFive();
            document.getElementById("status-text").innerHTML = "Receive 5";
        }
        else if(rotationNumber == 6)
        {
            fiveOneReceiveSix(); 
            document.getElementById("status-text").innerHTML = "Receive 6";
        }
    }
}

//positions on the court ------------------------------------------------------------------------------------------------------------------------
var frontLeft = "top: 10%; left: 20%; scale: 100%;";
var frontMid = "top: 10%; left: 50%; scale:100%";
var frontRight = "top: 10%; left: 80%; scale: 100%;";
var backLeft = "top: 60%; left: 20%; scale: 100%;";
var backMid = "top: 70%; left: 50%; scale: 100%;";
var backRight = "top: 60%; left: 80%; scale: 100%;"; 
var sub = "top: 35%; left: 107%; scale: 70%";

//players ----------------------------------------------------------------------------------------------------------------------------
var setter = document.getElementById("S"); 
var libero = document.getElementById("L");
var opp = document.getElementById("OPP"); 
var oh1 = document.getElementById("OH1");
var oh2 = document.getElementById("OH2"); 
var mb1 = document.getElementById("MB1");
var mb2 = document.getElementById("MB2"); 

//base positions-------------------------------------------------------------------------------------------------------------------------

function setterFront()
{
    setter.style.cssText += frontRight; 
    opp.style.cssText += backRight; 
}

function opp2Front()
{
    op2.style.cssText += frontRight; 
    s2.style.cssText += backRight
}

function oh1Front()
{
    oh1.style.cssText += frontLeft;
    oh2.style.cssText += backMid;
}

function oppFront()
{
    setter.style.cssText += backRight; 
    opp.style.cssText += frontRight;
}

function oh2Front()
{
    oh1.style.cssText += backMid;
    oh2.style.cssText += frontLeft;
}

function baseFiveOne()
{
    libero.style.cssText += backLeft; 
    if(rotationNumber == 1)
    {
        mb2.style.cssText += frontMid; 
        oppFront();
        oh1Front();
        mb1.style.cssText += sub; 
    }
    else if(rotationNumber == 2)
    {
        mb2.style.cssText += frontMid;
        oh2Front(); 
        oppFront();
        mb1.style.cssText += sub; 
    }
    else if(rotationNumber == 3)
    {
        mb1.style.cssText += frontMid; 
        oh2Front();
        oppFront(); 
        mb2.style.cssText += sub;

    }
    else if(rotationNumber == 4)
    {
        mb1.style.cssText += frontMid;
        oh2Front();
        setterFront(); 
        mb2.style.cssText += sub;

    }
    else if(rotationNumber == 5)
    {
        mb1.style.cssText += frontMid;
        oh1Front();
        setterFront();
        mb2.style.cssText += sub;
    }
    else if(rotationNumber == 6 && isServing)
    {
        mb2.style.cssText += frontMid;
        mb1.style.cssText += backLeft;
        libero.style.cssText += sub;
        oh1Front(); 
        setterFront(); 
    }
    else if(rotationNumber == 6 && !isServing)
    {
        libero.style.cssText += backLeft; 
        mb2.style.cssText += frontMid;
        oh1Front(); 
        setterFront(); 
        mb1.style.cssText += sub; 
    }
}

//ACTUAL ROTATIONS--------------------------------------------------------------------------------------------------------------------------------------------

function fiveOneServeOne()
{
    setter.style.cssText += "top: 110%; left: 90%";
    libero.style.cssText += "top: 50%; left: 70%; scale: 100%";
    oh1.style.cssText += "top: 25%; left: 60%"; 
    oh2.style.cssText += "top: 70%; left: 50%";
    opp.style.cssText += "top: 25%; left: 40%";
    mb1.style.cssText += "top: 35%; left: 107%; scale: 70%";
    mb2.style.cssText += "top: 10%; left: 50%; scale: 100%"; 
}

function fiveOneReceiveone()
{
    setter.style.cssText += "top: 80%; left: 90%"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%"; 
    oh1.style.cssText += "top: 65%; left: 75%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    opp.style.cssText += "top: 20%; left: 20%"; 
    mb1.style.cssText += "top: 35%; left: 107%; scale: 70%";
    mb2.style.cssText += "top: 20%; left: 50%; scale: 100%"; 
    
}

function fiveOneServeTwo()
{
    setter.style.cssText += "top: 50%; left: 80%"; 
    libero.style.cssText += "top: 50%; left: 20%; scale: 100%"; 
    oh1.style.cssText += "top: 110%; left: 90%";
    oh2.style.cssText += "top: 10%; left: 20%"; 
    opp.style.cssText += "top: 25%; left: 40%";
    mb1.style.cssText += "top: 35%; left: 107%; scale: 70%";
    mb2.style.cssText += "top: 10%; left: 50%; scale: 100%";
}

function fiveOneReceiveTwo()
{
    setter.style.cssText += "top: 20%; left: 60%"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%";
    oh1.style.cssText += "top: 60%; left: 80%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    opp.style.cssText += "top: 10%; left: 70%";
    mb1.style.cssText += "top: 35%; left: 107%; scale: 70%";
    mb2.style.cssText += "top: 25%; left: 90%; scale: 100%";
}

function fiveOneServeThree()
{
    setter.style.cssText += "top: 40%; left: 40%"; 
    libero.style.cssText += "top: 110%; left: 90%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 25%; left: 55%"; 
    opp.style.cssText += "top: 10%; left: 80%";
    mb1.style.cssText += "top: 10%; left: 50%; scale: 100%";
    mb2.style.cssText += "top: 35%; left: 107%; scale: 70%";
}

function fiveOneReceiveThree()
{
    setter.style.cssText += "top: 25%; left: 40%"; 
    libero.style.cssText += "top: 60%; left: 80%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    opp.style.cssText += "top: 30%; left: 90%";
    mb1.style.cssText += "top: 10%; left: 20%; scale: 100%";
    mb2.style.cssText += "top: 35%; left: 107%; scale: 70%";
}

function fiveOneServeFour()
{
    setter.style.cssText += "top: 20%; left: 40%"; 
    libero.style.cssText += "top: 40%; left: 45%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 20%; left: 60%"; 
    opp.style.cssText += "top: 110%; left: 90%";
    mb1.style.cssText += "top: 10%; left: 50%; scale: 100%";
    mb2.style.cssText += "top: 35%; left: 107%; scale: 70%"
}

function fiveOneReceiveFour()
{
    setter.style.cssText += "top: 10%; left: 10%"; 
    libero.style.cssText += "top: 60%; left: 80%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    opp.style.cssText += "top: 90%; left: 90%";
    mb1.style.cssText += "top: 25%; left: 15%; scale: 100%";
    mb2.style.cssText += "top: 35%; left: 107%; scale: 70%";
}

function fiveOneServeFive()
{
    setter.style.cssText += "top: 20%; left: 50%"; 
    libero.style.cssText += "top: 40%; left: 20%; scale: 100%";
    oh1.style.cssText += "top: 10%; left: 40%";
    oh2.style.cssText += "top: 110%; left: 90%"; 
    opp.style.cssText += "top: 40%; left: 80%";
    mb1.style.cssText += "top: 10%; left: 60%; scale: 100%";
    mb2.style.cssText += "top: 35%; left: 107%; scale: 70%";
}

function fiveOneReceiveFive()
{
    setter.style.cssText += "top: 10%; left: 70%"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%";
    oh1.style.cssText += "top: 60%; left: 20%";
    oh2.style.cssText += "top: 60%; left: 80%"; 
    opp.style.cssText += "top: 90%; left: 70%";
    mb1.style.cssText += "top: 20%; left: 90%; scale: 100%;";
    mb2.style.cssText += "top: 35%; left: 107%; scale: 70%";
}

function fiveOneServeSix()
{
    setter.style.cssText += "top: 20%; left: 60%"; 
    libero.style.cssText += "top: 35%; left: 107%; scale: 70%"
    oh1.style.cssText += "top: 20%; left: 40%";
    oh2.style.cssText +=  "top: 70%; left: 50%"; 
    opp.style.cssText += "top: 40%; left: 40%";
    mb1.style.cssText += "top: 110%; left: 90%; scale: 100%";
    mb2.style.cssText += "top: 10%; left: 50%; scale: 100%";
}

function fiveOneReceiveSix()
{
    setter.style.cssText += "top: 10%; left: 70%"; 
    libero.style.cssText += "top: 60%; left: 80%; scale: 100%";
    oh1.style.cssText += "top: 60%; left: 20%";
    oh2.style.cssText += "top: 70%; left: 50%"; 
    opp.style.cssText += "top: 90%; left: 30%";
    mb1.style.cssText += "top: 35%; left: 107%; scale: 70%";
    mb2.style.cssText += "top: 20%; left: 20%; scale: 100%";
    
}