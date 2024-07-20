const ham =document.querySelector('.ham');
const nav =document.querySelector('nav');
ham.addEventListener('click', ()=>{
    ham.classList.toggle('transform')
    nav.classList.toggle('mobile')
})









const sticky =document.querySelector('.header');
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  if (scrollTop > 40) {
    sticky.classList.add('sticky');
  }
  else{
    sticky.classList.remove('sticky');
  }
});
window.addEventListener("scroll", function (dets) {
  const text = document.querySelector('.scroll_text');
  if (text) {
    const val = window.scrollY / 5;
    text.style.transform = `translateX(${val}px)`;
    console.log(val);
  }
});





// function scroll() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }
