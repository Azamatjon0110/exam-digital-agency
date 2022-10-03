var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 32,
  loop: true,
  center: false,
  dots:false,
  nav:false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      margin: 20,
    },
    500: {
      items: 1.5,
      nav: true,
      loop:true,
    },
    700: {
      items: 2,
      nav: true,
      loop:true,
    },
    800: {
      items: 2.5,
      nav: true,
      loop:true,
    },
    950: {
      items: 3,
      nav: true,
      loop:true,
    },
    1200: {
      items: 3.5,
      nav:true,
      loop:true,
    },
  }
})