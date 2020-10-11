$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    items:1,
    loop:true,
    autoplay: true,
    singleItem: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,  
    nav:true,
    navText: [
      "<button class='carousel-icon'><i class='icon-left-open'></i></button>",
      "<button class='carousel-icon'><i class='icon-right-open'></i></button>",
    ],
  });
});

$('.international-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  accessibility:false,
  autoplaySpeed: 2000,
});


/ PagePiling /
// $(document).ready(function() {
// 	$('#pagepiling').pagepiling();
// });