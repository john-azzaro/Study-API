"use strict";

function handleClickButton() {
  $('main').on('click', '#dogbutton', function(event) {
    const setting = {
      url:"https://dog.ceo/api/breeds/image/random", 
      type: "GET",
      dataType: "json",
      success,
      error: failure,
    }
    // call dog api
    $.ajax(setting)
    // you dont return because you dont know how long its going to take
    // you need to chain stuff together.
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

function initializeApp() {
    handleClickButton();
}

$(initializeApp);