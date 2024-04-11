function toggleNav() {
    var navLinksMobile = document.querySelector('.nav-links-mobile');
    // Toggle the display of navigation links
    navLinksMobile.style.display = navLinksMobile.style.display === 'none' ? 'block' : 'none';
  }
  
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