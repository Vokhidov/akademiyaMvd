$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    items: 1,
    loop: true,
    autoplay: true,
    singleItem: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      "<button class='carousel-icon'><i class='icon-left-open'></i></button>",
      "<button class='carousel-icon'><i class='icon-right-open'></i></button>",
    ],
  });
});

$(".international-carousel").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  accessibility: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 2,
      },
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});


const navSlide = () => {
  const burger = document.querySelector(".nav-settings__menu");
  const nav = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".navbar-list li");

  burger.addEventListener("click", () => {
    //toogle nav
    nav.classList.toggle("nav-active");

    //animation
    burger.classList.toggle("toggle");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();