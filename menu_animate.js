const menuBtn = document.querySelector('.menu-btn');
var x = document.getElementById("myLinks");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    x.style.display = "block";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    x.style.display = "none";
  }
});
