"use strict";

// STEP 4: On click, call dog API:
// In this function, we have a "settings" object as an argument.
//      Within the settings object, we have the:
//
//          url      = The URL endpoint for the API.
//          type     = The request method, which in this case is "GET".
//          dataType = Data type of response, which in this case is JavaScript Object Notation (JSON).
//          success  = ...if callback is successful, render image (STEP 5.1).
//          failure  = ...if callback is UNsuccessful, console.log an error message.
// 
// So upon click, we make a AJAX (Asynchronous JavaScript and XML) request to the dog API that returns the data...

function handleClickButton() {
  $('main').on('click', '#dogbutton', function(event) {
    const setting = {
      url:"https://dog.ceo/api/breeds/image/random", 
      type: "GET",
      dataType: "json",
      success: success,
      error: failure,
    }
    // call dog api
    $.ajax(setting)
    // you dont return because you dont know how long its going to take
    // you need to chain stuff together.
  });
}

// STEP 5.1: If the request is successful, render the image...
function success(data) {
  renderImage(data.message);
}

// STEP 5.2: If the request is not successful, an error is logged...
function failure(error) {
  console.error(error);
}

// STEP 7: The image (passed from the previous function) is displayed!
function generateImage(image) {
  return `<img src="${image}" alt="dog">`;
}

// STEP 6: whent he request is successful, main is appended, meaning it inserts the specified content.
// In this case, the request returns an image link, such as "https://images.dog.ceo/breeds/terrier-dandie/n02096437_3925.jpg"
// Thus, the image argument will be passed to the "generateImage" function in STEP 7.
// NOTE: Remember that the argument "image" inside the callsignature of the function can be called anything, like photo, cheesecake, etc.  
// Regardless of the name you give the argument in this function, the slot will pass that information...
function renderImage(image) {
  $('main').append(generateImage(image));
}

// STEP 3: Listen for when the user clicks the "click me" button...
function setUpEventHandlers() {
    handleClickButton();
}

// STEP 2: sets up event handler...
function initializeApp() {
    setUpEventHandlers();
}

// STEP 1: Asynchronous callback...
$(initializeApp);