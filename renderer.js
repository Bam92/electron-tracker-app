// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const taskInputElt = document.querySelector('.header__input');
const taskAddButton = document.querySelector('.header__button')

const tasks = [];


taskInputElt.addEventListener('keyup', e => {
    console.log('Pressed')
    if (e.keyCode === 13) {
        console.log('Pressed Enter')
        tasks.unshift({ content: e.target.value });
        e.target.value = '';
        console.log(JSON.stringify(tasks, undefined, 2));
    }
});