// ========== preloader ========== //
window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add('hidePreloader');
})

// *************** set date ****************
const date = (document.getElementById('date')
.innerHTML = new Date().getFullYear());

// *************** nav fixed ***************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 62) {
       navbar.classList.add("fixed");
   } else {
       navbar.classList.remove("fixed");
   }
});
