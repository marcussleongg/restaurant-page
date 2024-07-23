console.log('is this working?');

import loadup from './initial-loadup.js';
import menu from './menu.js';
import about from './about.js'
loadup();

const div = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
homeBtn.addEventListener('click', () => {
    let child = div.firstElementChild;
    while(child) {
        div.removeChild(child);
        child = div.firstElementChild;
    }
    loadup();
});
menuBtn.addEventListener('click', () => {
    let child = div.firstElementChild;
    while(child) {
        div.removeChild(child);
        child = div.firstElementChild;
    }
    menu();
});
aboutBtn.addEventListener('click', () => {
    let child = div.firstElementChild;
    while(child) {
        div.removeChild(child);
        child = div.firstElementChild;
    }
    about();
});