LIGHT_TEXT = '#292930'; //'#292930'
LIGHT_BKGND = '#f7f7f7'; //#f7f7f7

//const myImage = document.getElementById('myImage');
const myImage = document.getElementsByTagName('IMG');
const myScore = document.getElementById('score');
const imgSrc = [
    "assets/img/donut1.png", 
    "assets/img/donut2.png", 
    "assets/img/donut3.png",
    "assets/img/donut4.png",
    "assets/img/donut5.png",
    "assets/img/donut6.png",
    "assets/img/donut7.png",
    "assets/img/donut8.png",
    "assets/img/donut9.png",
    "assets/img/donut10.png",
    "assets/img/donut11.png",
    "assets/img/donut12.png"];
let imgCount = 1;
let scoreCount = 1;

//initialize

//light event listener
// light.addEventListener('click', event => {
//     if(event.target.checked) {
//         console.log('light was clicked!');
//         setLight();
//         dark.checked = false;
//     } else {
//         console.log('light was unclicked!');
//         setDark();
//         dark.checked = true;
//     }
// });

myImage[0].addEventListener('click', function() {
    console.log(imgCount); //RR
    if (imgCount < imgSrc.length) {
        myImage[0].src = imgSrc[imgCount];
        imgCount++;    
    } else {
        imgCount = 0;
        myImage[0].src = imgSrc[imgCount];
        myScore.textContent = scoreCount;
        scoreCount++;
    }
});