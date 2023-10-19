const formBox = document.querySelector('input');

formBox.addEventListener('mousedown', () => {
    formBox.classList.toggle('clicked-input');
});