
// ALL PLAYER INFO -------------------------------------------------------------------------------------------------------------
var s1Info = "Both setters will always be in the back row. Setter 1 will play in rotations 1-3";
var s2Info = "Both setters will always be in the back row. Setter 2 will play in rotations 4-6"; 
var op1Info = "Both opposite hitters will always be in the front row blocking and hitting. Opposite hitter 1 will play in rotations 1-3";
var op2Info = "Both opposite hitters will always be in the front row blocking and hitting. Opposite hitter 2 will play in rotations 4-6"; 
var mb1Info = "Middle blocker 1 will serve for the libero in rotation 6 and play left back until serve receive. MB1 will play middle in rotations 3-5";
var mb2Info = "Middle blocker 2 will play in rotations 1, 2, and 6 but will never have to serve"

var s1 = document.getElementById("S");
var s2 = document.getElementById("S2");
var op1 = document.getElementById("OPP"); 
var op2 = document.getElementById("OPP2")

//DISPLAYING INFO METHODS -------------------------------------------------------------------------------------------------------

function displayS1Info()
{
    document.querySelector(".player-info-text").innerHTML = s1Info;
    infoHelper(5);
}

function displayS2Info()
{
    document.querySelector(".player-info-text").innerHTML = s2Info;
    infoHelper(7);
}

function displayOP1Info()
{
    document.querySelector(".player-info-text").innerHTML = op1Info;
    infoHelper(2)
}

function displayOP2Info()
{
    document.querySelector(".player-info-text").innerHTML = op2Info; 
    infoHelper(8)
}

function displayMB1Info()
{
    document.querySelector(".player-info-text").innerHTML = mb1Info; 
    infoHelper(6)
}

function displayMB2Info()
{
    document.querySelector(".player-info-text").innerHTML = op2Info; 
    infoHelper(1)
}

//CHANGING ROTATIONS ----------------------------------------------------------------------------------

function rotateSixTwo()
{
    if(isServing)
    {
        if(rotationNumber == 1)
        {
            sixTwoServeOne()
            document.getElementById("status-text").innerHTML = "Serve 1";
        }
        else if(rotationNumber == 2)
        {
            sixTwoServeTwo();
            document.getElementById("status-text").innerHTML = "Serve 2";
        }
        else if(rotationNumber == 3)
        {
            sixTwoServeThree()
            document.getElementById("status-text").innerHTML = "Serve 3";
        }
        else if(rotationNumber == 4)
        {
            sixTwoServeFour();
            document.getElementById("status-text").innerHTML = "Serve 4";
        }
        else if(rotationNumber == 5)
        {
            sixTwoServeFive();
            document.getElementById("status-text").innerHTML = "Serve 5";
        }
        else if(rotationNumber == 6)
        {
            sixTwoServeSix();
            document.getElementById("status-text").innerHTML = "Serve 6";
        }
    }
    else
    {
        if(rotationNumber == 1)
        {
            sixTwoReceiveOne(); 
            document.getElementById("status-text").innerHTML = "Receive 1";
        }
        else if(rotationNumber == 2)
        {
            sixTwoReceiveTwo();
            document.getElementById("status-text").innerHTML = "Receive 2";
        }
        else if(rotationNumber == 3)
        {
            sixTwoReceiveThree()
            document.getElementById("status-text").innerHTML = "Receive 3";
        }
        else if(rotationNumber == 4)
        {
            sixTwoReceiveFour()
            document.getElementById("status-text").innerHTML = "Receive 4";
        }
        else if(rotationNumber == 5)
        {
            sixTwoReceiveFive()
            document.getElementById("status-text").innerHTML = "Receive 5";
        }
        else if(rotationNumber == 6) 
        {
            sixTwoReceiveSix()
            document.getElementById("status-text").innerHTML = "Receive 6";
        }
    }
}

//ACTUAL ROTATIONS ------------------------------------------------------------------------------------------------------------------------------
function sixTwoServeOne()
{
    s1.style.cssText += "top: 110%; left: 90%; scale: 100%;";
    libero.style.cssText += "top: 50%; left: 70%; scale: 100%";
    oh1.style.cssText += "top: 25%; left: 60%"; 
    oh2.style.cssText += "top: 70%; left: 50%";
    op1.style.cssText += "top: 25%; left: 40%; scale: 100%;";
    mb2.style.cssText += "top: 10%; left: 50%; scale: 100%"; 

    mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op2.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoReceiveOne()
{
    s1.style.cssText += "top: 80%; left: 90%; scale: 100%;"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%"; 
    oh1.style.cssText += "top: 65%; left: 75%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    op1.style.cssText += "top: 20%; left: 20%; scale: 100%;"; 
    mb2.style.cssText += "top: 20%; left: 50%; scale: 100%";

    mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op2.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoServeTwo()
{
    s1.style.cssText += "top: 50%; left: 80%; scale: 100%;"; 
    libero.style.cssText += "top: 50%; left: 20%; scale: 100%"; 
    oh1.style.cssText += "top: 110%; left: 90%";
    oh2.style.cssText += "top: 10%; left: 20%"; 
    op1.style.cssText += "top: 25%; left: 40%; scale: 100%;";
    mb2.style.cssText += "top: 10%; left: 50%; scale: 100%";

    mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op2.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoReceiveTwo()
{
    s1.style.cssText += "top: 20%; left: 60%; scale: 100%;"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%";
    oh1.style.cssText += "top: 60%; left: 80%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    op1.style.cssText += "top: 10%; left: 70%; scale: 100%;";
    mb2.style.cssText += "top: 25%; left: 90%; scale: 100%";

    mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op2.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoServeThree()
{
    s1.style.cssText += "top: 40%; left: 40%; scale: 100%;"; 
    libero.style.cssText += "top: 110%; left: 90%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 25%; left: 55%"; 
    op1.style.cssText += "top: 10%; left: 80%; scale: 100%;";
    mb1.style.cssText += "top: 10%; left: 50%; scale: 100%";

    mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op2.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoReceiveThree()
{
    setter.style.cssText += "top: 25%; left: 40%; scale: 100%"; 
    libero.style.cssText += "top: 60%; left: 80%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 60%; left: 20%"; 
    op1.style.cssText += "top: 30%; left: 90%; scale: 100%;";
    mb1.style.cssText += "top: 10%; left: 20%; scale: 100%";

    mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s2.style.cssText += "top: 30%; left: 107%; scale: 70%";
    op2.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoServeFour()
{
    op2.style.cssText += "top: 20%; left: 40%; scale: 100%"; 
    libero.style.cssText += "top: 40%; left: 45%; scale: 100%";
    oh1.style.cssText += "top: 70%; left: 50%";
    oh2.style.cssText += "top: 20%; left: 60%"; 
    s2.style.cssText += "top: 110%; left: 90%; scale: 100%";
    mb1.style.cssText += "top: 10%; left: 50%; scale: 100%";

    mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s1.style.cssText += "top: 30%; left: 107%; scale: 70%";
    op1.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoReceiveFour()
{
    s2.style.cssText += "top: 80%; left: 90%; scale: 100%;"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%"; 
    oh2.style.cssText += "top: 65%; left: 75%";
    oh1.style.cssText += "top: 60%; left: 20%"; 
    op2.style.cssText += "top: 20%; left: 20%; scale: 100%"; 
    mb1.style.cssText += "top: 20%; left: 50%; scale: 100%";

    mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op1.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoServeFive()
{
    s2.style.cssText += "top: 50%; left: 80%; scale: 100%"; 
    libero.style.cssText += "top: 50%; left: 20%; scale: 100%"; 
    oh2.style.cssText += "top: 110%; left: 90%";
    oh1.style.cssText += "top: 10%; left: 20%"; 
    op2.style.cssText += "top: 25%; left: 40%; scale: 100%";
    mb1.style.cssText += "top: 10%; left: 50%; scale: 100%";

    mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op1.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoReceiveFive()
{
    s2.style.cssText += "top: 20%; left: 60%; scale: 100%"; 
    libero.style.cssText += "top: 70%; left: 50%; scale: 100%";
    oh2.style.cssText += "top: 60%; left: 80%";
    oh1.style.cssText += "top: 60%; left: 20%"; 
    op2.style.cssText += "top: 10%; left: 70%; scale: 100%";
    mb1.style.cssText += "top: 25%; left: 90%; scale: 100%";

    mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op1.style.cssText += "top: 15%; left: 107%; scale: 70%"; 
}

function sixTwoServeSix()
{
    s2.style.cssText += "top: 40%; left: 40%; scale: 100%"; 
    oh2.style.cssText += "top: 70%; left: 50%";
    oh1.style.cssText += "top: 25%; left: 55%"; 
    op2.style.cssText += "top: 10%; left: 80%; scale: 100%";
    mb2.style.cssText += "top: 10%; left: 50%; scale: 100%";
    mb1.style.cssText += "top: 110%; left: 90%; scale: 100%";

    libero.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op1.style.cssText += "top: 15%; left: 107%; scale: 70%";
}

function sixTwoReceiveSix()
{
    s2.style.cssText += "top: 25%; left: 40%; scale: 100%"; 
    libero.style.cssText += "top: 60%; left: 80%; scale: 100%";
    oh2.style.cssText += "top: 70%; left: 50%";
    oh1.style.cssText += "top: 60%; left: 20%"; 
    op2.style.cssText += "top: 30%; left: 90%; scale: 100%";
    mb2.style.cssText += "top: 10%; left: 20%; scale: 100%";

    mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
    s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
    op1.style.cssText += "top: 15%; left: 107%; scale: 70%";
}


//BASE POSITIONS ---------------------------------------------------------------
function baseSixTwo()
{
    if(rotationNumber == 1)
    {
        mb2.style.cssText += frontMid; 
        libero.style.cssText += backLeft; 
        oppFront(); 
        oh1Front();

        mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op2.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
    else if(rotationNumber == 2)
    {
        mb2.style.cssText += frontMid; 
        libero.style.cssText += backLeft; 
        oppFront(); 
        oh2Front();

        mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op2.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
    else if(rotationNumber == 3)
    {
        mb1.style.cssText += frontMid; 
        libero.style.cssText += backLeft; 
        oppFront(); 
        oh2Front();

        mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s2.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op2.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
    else if(rotationNumber == 4)
    {
        mb1.style.cssText += frontMid; 
        libero.style.cssText += backLeft;
        oh2Front(); 
        opp2Front(); 

        mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op1.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
    else if(rotationNumber == 5)
    {
        mb1.style.cssText += frontMid; 
        libero.style.cssText += backLeft; 
        oh1Front();
        opp2Front(); 

        mb2.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op1.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
    else if(rotationNumber == 6 && isServing)
    {
        mb2.style.cssText += frontMid; 
        mb1.style.cssText += backLeft; 
        oh1Front(); 
        opp2Front(); 

        libero.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op1.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
    else if(rotationNumber == 6 && !isServing)
    {
        mb2.style.cssText += frontMid; 
        libero.style.cssText += backLeft; 
        oh1Front(); 
        opp2Front(); 

        mb1.style.cssText += "top: 45%; left: 107%; scale: 70%";
        s1.style.cssText += "top: 30%; left: 107%; scale: 70%"
        op1.style.cssText += "top: 15%; left: 107%; scale: 70%";
    }
}