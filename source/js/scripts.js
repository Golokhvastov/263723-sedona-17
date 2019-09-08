var navPage = document.querySelector('.page-nav');
var navToggle = document.querySelector('.page-nav__toggle');

navPage.classList.remove('page-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navPage.classList.contains('page-nav--closed')) {
    navPage.classList.remove('page-nav--closed');
    navPage.classList.add('page-nav--opened');
  } else {
    navPage.classList.add('page-nav--closed');
    navPage.classList.remove('page-nav--opened');
  }
});


var message__submit = document.querySelector(".page-main__messages-button");

var error__popup = document.querySelector(".modal--error");
var ok__popup = document.querySelector(".modal--ok");

var error__close = error__popup.querySelector(".modal__close-button");
var ok__close = ok__popup.querySelector(".modal__close-button");

var message__form = document.querySelector(".page-main__messages-form");
var message__name = message__form.querySelector("[name=name]");
var message__surname = message__form.querySelector("[name=surname]");

var message__tel = message__form.querySelector("[name=tel]");
var message__email = message__form.querySelector("[name=email]");


error__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  error__popup.classList.remove("modal-show");
  error__popup.classList.remove("modal-error");
});

ok__close.addEventListener("click", function (evt) {
  evt.preventDefault();
  ok__popup.classList.remove("modal-show");
});

message__form.addEventListener("submit", function (evt) {
  if (!message__name.value || !message__surname.value || !message__tel.value || !message__email.value) {
    evt.preventDefault();
    error__popup.classList.add("modal-show");
    error__popup.classList.add("modal-error");
  } else {
    ok__popup.classList.add("modal-show");
  }

  if (!message__name.value) {
    message__name.classList.add("message__input--error");
  } else {
    if (message__name.classList.contains("message__input--error")) {
      message__name.classList.remove("message__input--error");
    }
  }
  if (!message__surname.value) {
    message__surname.classList.add("message__input--error");
  } else {
    if (message__surname.classList.contains("message__input--error")) {
      message__surname.classList.remove("message__input--error");
    }
  }
  if (!message__tel.value) {
    message__tel.classList.add("message__input--error");
  } else {
    if (message__tel.classList.contains("message__input--error")) {
      message__tel.classList.remove("message__input--error");
    }
  }
  if (!message__email.value) {
    message__email.classList.add("message__input--error");
  } else {
    if (message__email.classList.contains("message__input--error")) {
      message__email.classList.remove("message__input--error");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (error__popup.classList.contains("modal-show")) {
      error__popup.classList.remove("modal-show");
      error__popup.classList.remove("modal-error");
    }
    if (ok__popup.classList.contains("modal-show")) {
      ok__popup.classList.remove("modal-show");
    }
  }
});
