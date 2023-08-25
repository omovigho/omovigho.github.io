//animation for header Daniel Profile
window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded() {
    canvasApp();
}
function canvasSupport () {
    return Modernizr.canvas;
}
function canvasApp() {

    var message = "DANIEL PROFILE";
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    function drawScreen() {
        //Background
        //context.fillStyle = "#000000";
        //context.fillRect(0, 0, theCanvas.width, theCanvas.height);
        //Text
        context.font = "3rem impact"
        context.textAlign = "right";
        context.textBaseline = "middle";
        var metrics = context.measureText(message);
        var textWidth = metrics.width;
        var xPosition = (theCanvas.width/2);
        var yPosition = (theCanvas.height/2);
        var gradient = context.createLinearGradient( theCanvas.width/2,0,
        theCanvas.width/2,theCanvas.height);
        for (var i=0; i < colorStops.length; i++) {
            var tempColorStop = colorStops[i];
            var tempColor = tempColorStop.color;
            var tempStopPercent = tempColorStop.stopPercent;
            gradient.addColorStop(tempStopPercent,tempColor);
            tempStopPercent += .015;
            if (tempStopPercent > 1) {
                tempStopPercent = 0;
            }
            tempColorStop.stopPercent = tempStopPercent;;
            colorStops[i] = tempColorStop;
        }
        context.fillStyle = gradient;
        context.fillText ( message, xPosition ,yPosition);
    }

    function gameLoop() {
        window.setTimeout(gameLoop, 200);
        drawScreen();
    }

    var colorStops = new Array(
    {color:"#FF0000", stopPercent:0},
    {color:"#FFFF00", stopPercent:.125},
    {color:"#00FF00", stopPercent:.375},
    {color:"#0000FF", stopPercent:.625},
    {color:"#FF00FF", stopPercent:.875},
    {color:"#FF0000", stopPercent:1});
    gameLoop();
}

//displaying the current time  and date when button is clicked
document.addEventListener("DOMContentLoaded", function() {
    let time = document.querySelector('.time');
    let showTime = document.querySelector('.showTime');
    
    time.addEventListener('click', display_ct);


    function display_c(){
        window.setTimeout(display_c,1000);
        display_ct();
    }   

    function display_ct() {
        time.style.display = 'none';
        var x = new Date()
        var x1=x.toUTCString();// changing the display to UTC string
        showTime.innerHTML = x1;
        showTime.style.backgroundColor = 'black';
        display_c();
    }
    
});