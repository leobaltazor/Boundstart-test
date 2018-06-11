$(function() {
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      URLhashListener: true,
      autoplayHoverPause: true,
      center: true,
      startPosition: "functional",
      autoplay: true,
    //   onChanged: log,
      autoplayTimeout: 10000
    });
  });

  // Custom JS
});
