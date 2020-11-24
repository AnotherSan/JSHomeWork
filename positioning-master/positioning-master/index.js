/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')

function closeWindow(){
    modal.style.display = 'none';
    // overlay.style.backgroundColor = 'transparent';
    overlay.style.display = 'none';
}

function openWindow(){
    modal.style.display = 'inline-block';
    // overlay.style.backgroundColor = 'rgba(59, 67, 76, 0.9)';
    overlay.style.display = 'block';
}

const closeWindowBtn = document.querySelector('.closeWindowBtn');
closeWindowBtn.addEventListener('click', closeWindow)

const openWindowBtn = document.querySelector('.openWindowBtn');
openWindowBtn.addEventListener('click', openWindow)
