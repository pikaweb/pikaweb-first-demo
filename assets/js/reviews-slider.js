jQuery(document).ready(function() {
  $('#reviews-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
         }
      }
    ]
  });
});   