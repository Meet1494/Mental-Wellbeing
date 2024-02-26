let toggleBtn = document.querySelector(".toggle-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let barMark = document.querySelector(".fa-bars");
let closeMark = document.querySelector(".fa-xmark");

closeMark.style.display = "none";
let open = false;

function toggleMenu() {
 if (open == false) {
  closeMark.style.display = "inline-block";
  barMark.style.display = "none";
  mobileMenu.style.top = "10vh";
  open = true; 
 } else{
  closeMark.style.display = "none";
  barMark.style.display = "inline-block";
  mobileMenu.style.top = "-200vh";
  open = false; 
 }
}

function goback()
    {
      window.location.assign('dashboard.html');
    }
toggleBtn.addEventListener("click", toggleMenu)