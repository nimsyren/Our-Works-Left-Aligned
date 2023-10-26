$(document).ready(function () {
  // slick slider content
  if ($(".module-slider-content").length > 0) {
    $(".module-slider-content").slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".module-slider-tabs",
      draggable: false,
      infinite: true,
      rows: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  // slick slider tab
  if ($(".module-slider-tabs").length > 0) {
    $(".module-slider-tabs").slick({
      arrows: false,
      dots: true,
      draggable: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: ".module-slider-content",
      focusOnSelect: true,
      variableWidth: false,
    });
  }

  // Tabbed carousel

  // // Remove active class from all thumbnail slides
  // $(".module-slider-tabs .slick-slide").removeClass("slick-active");

  // // Set active class to first thumbnail slides
  // $(".module-slider-tabs .slick-slide").eq(0).addClass("slick-active");

  // // On before slide change match active thumbnail to current slide
  // $(".module-slider").on(
  //   "beforeChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     var mySlideNumber = nextSlide;
  //     $(".module-slider-tabs .slick-slide").removeClass("slick-active");
  //     $(".module-slider-tabs .slick-slide")
  //       .eq(mySlideNumber)
  //       .addClass("slick-active");
  //   }
  // );

  // indicator

  let a = $(".module-slider-tabs").find(".slick-current");
  $(".indicator").css("width", a.width());
  $(".indicator").css("left", a.position().left);
});

$(".module-slider-tabs").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    event;
    console.log(event);
    let a = $(".module-slider-tabs").find(".slick-current");

    $(".indicator").css("width", a.width());
    $(".indicator").css("left", a.position().left + 1);

    console.log(a, a.position());
  }
);
