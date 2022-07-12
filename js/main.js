$(function () {
  "use strict";

  // animation of the slider in the header of the site
  $('.slick_carousel').slick({
    prevArrow: $(".slick_forward_arr"),
    nextArrow: $(".slick_back_arr"),
    dots: !0,
  });

  // quote slider animation
  $('.quote_items').slick({
    autoplay: !0,
    autoplaySpeed: 2500,
    dots: !0,
    dotsClass: 'pagination_dots',
    arrows: !1,
  });

  // button for smooth transition to the top of the site
  jQuery(function () {
    $("#go-up").click(function () {
      $("html").animate({scrollTop: 0}, 1500, "swing", () => {

        // animation of the title in the head of the document
        const selector = ".intro_container .title";
        if ($(selector)) {
          const elem = $(".intro_container .title");
          let fontSize = parseInt(elem.css("fontSize"));
          elem.animate(
            {
              fontSize: (parseInt(fontSize) * 2),
            },
            500,
            "swing",
            () => {
              elem.css("fontSize", fontSize)
            });
        }

      });
    });
  });

  $('#tg-bot-01').on('click', () => {
    const token = "1929534359:AAHI7gQBNhhEcXEJSWHM0pGt6967SLv1bYc";
    const chat = "-421760080";
    const msg = encodeURI(`Кто то смотрит код\n и нажимает кнопки\n :-)`);
    const httpRequest = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${msg}`;

    const request = async () => {
      const response = await fetch(
        httpRequest,
        {method: 'POST', headers: {'Content-Type': 'application/json;charset=utf-8'}});
      let result = await response.json();
      if (result.ok) alert("Done!");
    }
    request();
  })
});
