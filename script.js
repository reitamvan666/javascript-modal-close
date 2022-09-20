'use strict';
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function removeHidden() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}
showModal.forEach(showModal => {
  showModal.addEventListener('click', removeHidden);
});

function addHidden() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

function getHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

closeModal.addEventListener('click', addHidden);

document.body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
