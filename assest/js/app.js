const ham =document.querySelector('.ham');
const nav =document.querySelector('nav');
ham.addEventListener('click', ()=>{
    ham.classList.toggle('transform')
    nav.classList.toggle('mobile')
})
const menu = document.querySelectorAll('.menu_wrapper');
console.log(menu);
const submenu = document.querySelectorAll('.submenu_wrapper');
console.log(submenu);

menu.forEach((element, index) => {
  element.addEventListener('click', function() {
    // submenu.forEach(subEl => {
    //   subEl.classList.remove('active');
    // });
    submenu[index].classList.toggle('active');
  });
});










const sticky =document.querySelector('.header');
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  if (scrollTop > 40) {
    sticky.classList.add('sticky');
  }
  else{
    sticky.classList.remove('sticky');
  }
  const text = document.querySelector('.scroll_text');
  if (text) {
    const val = window.scrollY / 5;
    text.style.transform = `translateX(${val}px)`;
  }
});






// function scroll() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }
