'use strict'

document.addEventListener(
    'DOMContentLoaded', () =>
{
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav')
    const allSections = document.querySelectorAll('.sect')
    const myName = document.querySelector('.my-name');
    const navLink = document.querySelectorAll('.nav-link');
    const sect = document.querySelectorAll('.sect');
    const text = 'Daniel'
    // console.log('r' == 'R')
    
    console.log(String.fromCharCode(65 + 
        Math.floor(Math.random()  * 26)
    ))
    // const originalText = myName.textContent;
    let currentText = Array(text.length).fill('-');
    // let 
    
    
    function getRandomLetter(){
        const alphabets = ['a>', '<b', '<c', '<d', 'e>', '<f', '<g?', '<h', '<i', '<j'
            ,'k>', '<l', 'm>', 'n>' , 'o>', '<p', '<q'
    , 'r>', 's>' , '<t', 'u>', 'v>', '<w', '<x' , '<y', 'z>' ]
    
    return alphabets[Math.floor(Math.random() * alphabets.length)]
    }
    
    
    // const text = 'Ezekiel';
    
    const scrambleText = function(){
    
    // let scrambleText= '' ;
    for(let i = 0; i < text.length; i++){
        if(currentText[i]  !== text[i]){
    
            currentText[i] = getRandomLetter();
        }
    }
    myName.textContent = currentText.join('');
    
        }                                                                                                                                                                                                                                                 
    
    
    function revealText(){
        let index = 0;
        const interval = setInterval(() => {
            if(currentText[index] !== text[index]){
                currentText[index] = text[index]
            }else{
                index++
            }
            scrambleText();
            if(index >= text.length){
                clearInterval(interval);
            }
        }, 100)
    }
    // scrambleText();
    
    revealText();
    
    //////sticky navigation
    
    const navHeight = nav.getBoundingClientRect().height
    console.log(navHeight)
    
    
    const stickyNav =function(entries){
        const [entry] = entries;
        // console.log(entry)
    
        if(!entry.isIntersecting){
            nav.classList.add('nav-sticky')
        }else{
            nav.classList.remove('nav-sticky')
        }
    }
    
    
    const headerObserver = new IntersectionObserver(
        stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-${navHeight}px`
        }
    )
    
    headerObserver.observe(header)
    
    ///////
    nav.addEventListener('click', function(e){
        // console.log(e)
    const clicked = e.target.closest('.nav-link');
    console.log(clicked)
    navLink.forEach(link => {
        link.classList.remove('active');
    
    })
    
        clicked.classList.add('active'); 
    if(!clicked) return;
    
    });
    
    const navHighlight = function(entries){

    
         entries.forEach(entry => {
            // const [entry1, entry2] = entries;    
            // console.log(entry)  

            if(entry.isIntersecting){
                navLink.forEach((link ,index) => {
                  link.classList.remove('active');
                  
                  if(link.getAttribute('href').substring(1) === entry.target.id){
                    link.classList.add('active')
                  }
                })
            }
        })
         
 
    }

    console.log(allSections)
    const sectObserver = new IntersectionObserver(
        navHighlight, {
      root: null,
      threshold: 0.1,
        }
    )
    
    
    allSections.forEach(section => sectObserver.observe(section))
    
/////////////////////////////

const otherSection = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
    const [entry] = entries;
// entries.forEach(entry => entry.target.classList.remove('section--hidden'))
if(!entry.isIntersecting) return;
entry.target.classList.remove('section--hidden')
// console.log(entry);
sectionObserver.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(
    revealSection,{
  root: null,
  threshold:0.15,
    }
)
otherSection.forEach(function(section){
    sectionObserver.observe(section)
    section.classList.add('section--hidden')

})

})


// Loading of the canvas
window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded() {
    canvasApp();
}


function canvasSupport () {
    return Modernizr.canvas;
}


function canvasApp() {
    var message = "Welcome to My Digital Space";
    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    function drawScreen() {
        //Background
        context.fillStyle = "rgb(41, 39, 39)";
        context.fillRect(0, 0, theCanvas.width, theCanvas.height);
        //Text
        context.font = "2.7rem impact"
        context.textAlign = "center";
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
        window.setTimeout(gameLoop, 20);
        drawScreen()
    }

    // Colors variations
    var colorStops = new Array(
        {color:"#FF0000", stopPercent:0},
        {color:"#FFFF00", stopPercent:.125},
        {color:"#00FF00", stopPercent:.375},
        {color:"#0000FF", stopPercent:.625},
        {color:"#FF00FF", stopPercent:.875},
        {color:"#FF0000", stopPercent:1});
        gameLoop();
}
