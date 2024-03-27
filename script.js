'use strict';
/*
===DOM MANIPULATION==
=>DOM: That is making Javascript interact with our HTML document
=>DOM: (Document Object Model) Allows Javascript access the element and styles to manipulate them (that is:
change text, change attribute and even css styles)
=>DOM: it start with the document object at the top, that is, this document object serves as an entry point into the DOM
=>DOM is not Javascript, but a web API(that is, a library that browser implement, that is also written in javascript) that are automatically available for use
*/

document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
})