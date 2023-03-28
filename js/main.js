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

  // send message for telegram bot
  // https://core.telegram.org/bots/api#sendmessage chat_id - это ваш личный id в телеграме. 
  // https://help.1forma.ru/Admin_Manual/smart_http_bot.htm (РУКОВОДСТВО АДМИНИСТРАТОРА)
  // Узнать ID - https://core.telegram.org/bots/api#getting-updates
  // В сообщении видно chat_id автора. Соответственно пишите боту что нибудь, видите свой chat_id, хардкодите его в коде.

  $('#tg-bot-01').on('click', () => {
    // const token = "6146323883:AAGdHpikP3yvraQrDxFstOw3UzSzOJMblog"; // t.me/CommentsInstagramBot
    const token = "1929534359:AAHI7gQBNhhEcXEJSWHM0pGt6967SLv1bYc"; // t.me/send_request1_bot
    const chat_id = "999781240";
    const msg = encodeURI(`https://abrmsk.github.io/di-gi\nНажата кнопка меню`);
    const httpRequest = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`;

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
