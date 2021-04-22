

let a, b;
let btn1 = document.querySelector('.btns button.btn:first-of-type');
let btn2 = document.querySelector('.btns button.btn:last-of-type');

window.addEventListener("load", _ => {
    a = new AgModal('.box');
    b = new AgModal('.box2');

    btn1.addEventListener('click', _ => {
        a.open()
    });

    btn2.addEventListener('click', _ => {
        b.open()
    });

});