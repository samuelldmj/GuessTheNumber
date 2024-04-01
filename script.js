'use strict';
/*
===DOM MANIPULATION==
=>DOM: That is making Javascript interact with our HTML document
=>DOM: (Document Object Model) Allows Javascript access the element and styles to manipulate them (that is:
change text, change attribute and even css styles)
=>DOM: it start with the document object at the top, that is, this document object serves as an entry point into the DOM
=>DOM is not Javascript, but a web API(that is, a library that browser implement, that is also written in javascript) that are automatically available for use
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// the Heart
let heart = 7;
let highScore = 0;

document.querySelector(".check").addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = " No Number 🚩";
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number 🎈🎉";
        document.querySelector('body').style.backgroundColor = '#60b347';
        //making the guess visible here when guess is correct
        document.querySelector('.number').textContent = secretNumber;



        //proper fix of highscore
        if (heart > highScore) {
            highScore = heart
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    //longer method
    // else if (guess > secretNumber) {
    //     if (heart > 1) {
    //         document.querySelector('.message').textContent = " Number too high 📈";
    //         heart--;
    //         document.querySelector('.score').textContent = heart;
    //     } else {
    //         document.querySelector('.message').textContent = " You are a failure!!! 💀";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secretNumber) {
    //     if (heart > 1) {
    //         document.querySelector('.message').textContent = " Number too low 📉";
    //         heart--;
    //         document.querySelector('.score').textContent = heart;
    //     } else {
    //         document.querySelector('.message').textContent = " You are a failure!!! 💀";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


    //refactoring the code
    else if (guess !== secretNumber) {
        if (heart > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? " Number too high 📈" : " Number too low 📉";
            heart--;
            document.querySelector('.score').textContent = heart;
        } else {
            document.querySelector('.message').textContent = " You are a failure!!! 💀";
            document.querySelector('.score').textContent = 0;
        }
    }
})

/*
1. Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables.
3. Restore the initial conditions of the message, number, score and guess input fields.
4. Also restore the original background color (#222) and number width (15rem)
*/

//Implement a game rest functionality, so that the player can make a new guess!

document.querySelector(".again").addEventListener('click', function () {

    heart = 7;
    //restoring secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //restoring other conditions
    //message
    document.querySelector('.message').textContent = 'Start guessing...';
    //restoring score
    document.querySelector('.score').textContent = heart;
    //secretNumber
    document.querySelector('.number').textContent = '?';
    //guess
    document.querySelector('.guess').value = '';
    //background
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';




















})














