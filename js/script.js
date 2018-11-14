$(document).ready(function () {
  $('.slider__scroll').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 900,
    fade: true,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    nextArrow: '<div class="arrow__right"></div>',
    prevArrow: '<div class="arrow__left"></div>'
  });
});

(function () {
  var showDelete = document.querySelector(".popup.feedback");
  var btnDelete = document.querySelector(".feedback");
  function Dialog(popup) {
    this.showPopup = function () {
      var main = document.body;
      var overlay = document.createElement("div");
      var popups = popup;
      overlay.classList.add("overlay", "show-overlay");
      popups.classList.add("show-popup");
      overlay.appendChild(popups);
      main.appendChild(overlay);
      main.style.overflow = "hidden";
      generateCloseBtn(popups)
      var hide = document.querySelectorAll(".btn-closePopup");
      hide.forEach(el => {
        el.addEventListener("click", hidePopup)
      });
    }
  }
  var generateCloseBtn = function (popup) {
    var closeBtn = document.createElement("button");
    closeBtn.classList.add("btn-closePopup");
    var mainPopup = popup;
    mainPopup.appendChild(closeBtn);
  }

  var hidePopup = function () {
    var overlay = document.querySelectorAll(".overlay");
    var main = document.body;
    var popup = document.querySelectorAll(".popup");
    overlay.forEach(el => el.classList.remove("show-overlay"));
    popup.forEach(el => el.classList.remove("show-popup"));
    main.style.overflow = "auto";
  }

  btnDelete.addEventListener("click", function () {
    new Dialog(showDelete).showPopup()
  })
})();