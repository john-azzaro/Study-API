"use strict";

function handleClickButton() {
  $('main').on('click', '#dogbutton', function(event) {
    const setting = {
      url:"https://dog.ceo/api/breeds/image/random", 
      type: "GET",
      dataType: "json",
      success: success,
      error: failure,
    }
    $.ajax(setting)
  });
}

function success(data) {
  renderImage(data.message);
}

function failure(error) {
  console.error(error);
}

function generateImage(image) {
  return `<img src="${image}" alt="dog">`;
}

function renderImage(image) {
  $('main').append(generateImage(image));
}

function setUpEventHandlers() {
    handleClickButton();
}

function initializeApp() {
    setUpEventHandlers();
}

$(initializeApp);