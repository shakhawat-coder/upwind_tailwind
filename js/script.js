$(function(){
    var typed = new Typed(".typed", {
      strings: ["Business","Startups","Digital Agency","Marketing"],
      typeSpeed: 80,
      backSpeed: 30,
      showCursor: false,
      fadeOutDelay: 2000,
      loop:true
    });
});
const tobii = new Tobii()
document.addEventListener('DOMContentLoaded', () => {
  // This assumes your article is wrapped in an element with the class "content-article".
  document.querySelectorAll('.content-article img').forEach((articleImg) => {
      // Add lightbox elements in blog articles for Tobii.
      const lightbox = document.createElement('a');
      lightbox.href = articleImg.src;
      lightbox.classList.add('lightbox');
      lightbox.dataset.group = 'article';
      articleImg.parentNode.appendChild(lightbox);
      lightbox.appendChild(articleImg);
  });
});

var slider = tns({
  responsive: {
    767: {
      "items":2,
    },
   
  },
  container: '.my-slider',
  items: 1,
  loop: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  mouseDrag: true,
  prevButton: ".previous",
  nextButton: ".next",
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$(document).ready(function(){
  $(".menu_bar").click(function(){
    $("menu").toggle();
  });
});