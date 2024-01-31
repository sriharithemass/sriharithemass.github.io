var skillsProgress=document.querySelector(".skills-progress");

var skills=['JAVASCRIPT','REACTJS','C++','PYTHON'];
var values=['40','15','40','10']

for(let i=0;i<skills.length;i++)
{
   var progressBox = document.createElement('div');
   progressBox.classList.add('progress-box');
   progressBox.innerHTML = `<div class="progress-text">
   <p>${skills[i]}</p>
   <p>${values[i]}%</p>
   </div>
   <div class="progress-bar-outer">
    <div class="progress-bar-inner" style="width:${values[i]}%;"></div>
   </div>`;

    skillsProgress.append(progressBox);
}

// hamburger

var navBar=document.querySelector('.nav-bar')
var hamButton=document.querySelector('.ham-btn')
var span1=document.querySelector('.span1')
var span2=document.querySelector('.span2')
var span3=document.querySelector('.span3')
var hamItems=document.querySelector('.ham-items')
function toggleButton()
{
    span1.classList.toggle('t1')
    span2.classList.toggle('remove')
    span3.classList.toggle('t2')
    hamItems.classList.toggle('ham-display')
    navBar.classList.toggle('height-increase')
}


hamButton.addEventListener('click',toggleButton)

function widthCheck(){
    if(window.innerWidth>1110)
    {
        span1.classList.remove('t1')
        span2.classList.remove('remove')
        span3.classList.remove('t2')
        hamItems.classList.remove('ham-display')
        navBar.classList.remove('height-increase')
    }
}

window.addEventListener('resize',widthCheck)

// typed.js

var typed = new Typed(".auto-type",{
    strings:["a Front-End Developer", "a Programmer", "an Artist","the Eminence in Shadow"],
    typeSpeed:75,
    backSpeed:50,
    loop: true
});

// scroll

document.addEventListener("scroll", (event) =>{
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.querySelector(".nav-bar").style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        document.querySelector(".nav-bar").style.backdropFilter = 'blur(10px)';
        document.querySelector(".nav-bar").style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
        // document.querySelector(".ham-items").style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        // document.querySelector(".ham-items").style.backdropFilter = 'blur(10px)';
        // document.querySelector(".ham-items").style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    }else{
        document.querySelector(".nav-bar").style.backgroundColor = 'transparent';
        document.querySelector(".nav-bar").style.backdropFilter = 'none';
        document.querySelector(".nav-bar").style.boxShadow = 'none';
        document.querySelector(".ham-items").style.backgroundColor = 'transparent';
        document.querySelector(".ham-items").style.backdropFilter = 'none';
        document.querySelector(".ham-items").style.boxShadow = 'none';
    }
})

