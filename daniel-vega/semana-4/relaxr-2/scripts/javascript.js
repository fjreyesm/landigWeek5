let cerrar = document.querySelectorAll('.close-btn')[0];
let abrir = document.querySelectorAll('.sign-up-btn')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalc = document.querySelectorAll('.modal-container')[0];

abrir.addEventListener('click', function (e) {
  modalc.style.opacity = '1';
  modalc.style.visibility = 'visible';
  modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', function (e) {
  modal.classList.toggle('modal-close');
  setTimeout(function () {
    modalc.style.opacity = '0';
    modalc.style.visibility = 'hidden';
  }, 200);
});

window.addEventListener('click', function (e) {
  if (e.target == modalc) {
    modal.classList.toggle('modal-close');
    setTimeout(function () {
      modalc.style.opacity = '0';
      modalc.style.visibility = 'hidden';
    }, 400);
  }
});
