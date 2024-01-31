var element = document.getElementById('about-title');
var elementHeight = element.clientHeight;
var span11= document.querySelectorAll('.about-span');

document.addEventListener('scroll', animate);

function inView() {

  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  
  var scrollPosition = scrollY + windowHeight;

  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function animate() {

  if (inView()) {
      element.classList.remove('hide');
      element.classList.add('animate');
      span11[0].classList.add('expand1');
      span11[1].classList.add('expand1');
  }
}

var element2 = document.getElementById('skills-title');
var elementHeight2 = element2.clientHeight;
var span12= document.querySelectorAll('.skills-span');

document.addEventListener('scroll', animate2);

function inView2() {

  var windowHeight2 = window.innerHeight;
  var scrollY2 = window.scrollY || window.pageYOffset;
  
  var scrollPosition2 = scrollY2 + windowHeight2;

  var elementPosition2 = element2.getBoundingClientRect().top + scrollY2 + elementHeight2;
  
  if (scrollPosition2 > elementPosition2) {
    return true;
  }
  
  return false;
}

function animate2() {

  if (inView2()) {
      element2.classList.remove('hide');
      element2.classList.add('animate');
      span12[0].classList.add('expand2');
      span12[1].classList.add('expand2');
  }
}


var element3 = document.getElementById('projects-title');
var elementHeight3 = element3.clientHeight;
var span13= document.querySelectorAll('.projects-span');

document.addEventListener('scroll', animate3);

function inView3() {

  var windowHeight3 = window.innerHeight;
  var scrollY3 = window.scrollY || window.pageYOffset;
  
  var scrollPosition3 = scrollY3 + windowHeight3;

  var elementPosition3 = element3.getBoundingClientRect().top + scrollY3 + elementHeight3;
  
  if (scrollPosition3 > elementPosition3) {
    return true;
  }
  
  return false;
}

function animate3() {

  if (inView3()) {
      element3.classList.remove('hide');
      element3.classList.add('animate');
      span13[0].classList.add('expand3');
      span13[1].classList.add('expand3');
  }
}


var element4 = document.getElementById('contact-title');
var elementHeight4 = element4.clientHeight;
var span14= document.querySelectorAll('.contact-span');

document.addEventListener('scroll', animate4);

function inView4() {

  var windowHeight4 = window.innerHeight;
  var scrollY4 = window.scrollY || window.pageYOffset;
  
  var scrollPosition4 = scrollY4 + windowHeight4;

  var elementPosition4 = element4.getBoundingClientRect().top + scrollY4 + elementHeight4;
  
  if (scrollPosition4 > elementPosition4) {
    return true;
  }
  
  return false;
}

function animate4() {

  if (inView4()) {
      element4.classList.remove('hide');
      element4.classList.add('animate');
      span14[0].classList.add('expand4');
      span14[1].classList.add('expand4');
  }
}

