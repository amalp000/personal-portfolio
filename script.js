let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letters)=>{
        let span = document.createElement("span");
        span.textContent = letters;
        span.className = "letters";
        word.append(span);
    });

});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText=()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340 + i * 80);
    });
    currentWordIndex=currentWordIndex===maxWordIndex ? 0 :currentWordIndex + 1;

};


changeText();
setInterval(changeText,3000)


// circleskill.........................................

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-precent");
    var precent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < precent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});




























// mixitup portfolio............

var mixer = mixitup('.portfolio-galery');



// active menu..........


let menuLi = document.querySelectorAll('header ul li a');
let section =document.querySelectorAll('section');


function activeMenu(){
    let len =section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}


activeMenu();
window.addEventListener("scroll",activeMenu);




// // sticky navbar.........
 const header = document.querySelector("header");
 window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
 })





 // // togle icon navbar.........

    let menuIcon = document.querySelector("#menu-icon");
    let navlist = document.querySelector(".navlist");

    menuIcon.onclick = ()=>{
        menuIcon.classList.toggle("bx-x");
        navlist.classList.toggle("open");
    }


    window.onscroll = ()=>{
        menuIcon.classList.remove("bx-x");
        navlist.classList.remove("open");
    }




// parallax....................................

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom=document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop=document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


const downloadBtn=document.querySelector("#downloadbtn");
const fileLink="https://drive.google.com/file/d/1U_jHKNN6jvgObzxw6V1tGJFJM8chW9sY/view?usp=drive_link";

const initTimer=()=>{

    if(downloadBtn.classList.contains("disable-timer")){
        return( location.href=fileLink);

    }

    
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `<b> ${timer}</b>seconds waiting`;


    const initCounter = setInterval(()=>{
        if (timer > 0){
        timer--;
        return downloadBtn.innerHTML = `<b> ${timer}</b>seconds waiting`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent = "downloading..";

        setTimeout(()=>{  
             downloadBtn.classList.replace("timer","disable-timer");
             downloadBtn.innerHTML=`<a href="#" class="btn" id="downloadbtn" data-timer="10">Download CV</a>`;


        },3000);


    },1000);
};
downloadBtn.addEventListener("click",initTimer)