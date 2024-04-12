// hamburger nav
function toggleNav() {
    var navLinksMobile = document.querySelector('.nav-links-mobile');
    navLinksMobile.style.display = navLinksMobile.style.display === 'none' ? 'block' : 'none';
  }
  //feedback 
const slides = document.querySelectorAll('.slide');
  const radioBtns = document.querySelectorAll('.radio-btn input');
  showSlide(0);
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('slide-3');
      if (i === index) {
        slide.classList.add('slide-3');
        slide.style.opacity = 1;
      } else {
        slide.style.opacity = 0.5; 
      }
    });
  }

  radioBtns.forEach((btn, index) => {
    btn.addEventListener('change', () => {
      showSlide(index);
    });
    });


// iframe 
    function showSignupForm() {
      document.getElementById('signupIframe').src = 'public/signup.html';
      document.getElementById('signupIframe').style.display = 'block';
      document.getElementById('close').style.display = 'block';
  }
 function closeForm(){
  document.getElementById('signupIframe').style.display = 'none';
  document.getElementById('close').style.display = 'none';
 }
 document.addEventListener("DOMContentLoaded", function() {
  const viewMoreButton = document.querySelector('.view_more');
  const menuContainer = document.querySelector('.menu-container');

// view more button
  viewMoreButton.addEventListener('click', function() {
      menuContainer.classList.toggle('expanded');
      if (menuContainer.classList.contains('expanded')) {
          viewMoreButton.textContent = 'View Less';
      } else {
          viewMoreButton.textContent = 'View More';
      }
  });
});