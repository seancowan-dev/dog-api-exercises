'use strict'

function initSite() {
    handleUserInput();
}

function handleUserInput() {
    $('.dog-form').submit(e => {
        e.preventDefault();
        let userInput = $('[name=num-of-dogs]').val();
        if (userInput) {
            if (userInput <=50  && userInput > 0) {
                getRandomDogs(userInput);
            }  else {
                alert("Your input must be between 1 and 50");
            }
        } else {
            alert("Please enter a number");
        }
    });
}

function getRandomDogs(numberOfDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(Response => Response.json())
    .then(ResponseJson => console.log(ResponseJson))
    .catch(error => alert('Something went wrong try again later.'));
}
$(initSite);