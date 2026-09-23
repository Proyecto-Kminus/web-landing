const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.querySelector('img').alt;
  lightboxCaption.textContent = item.dataset.caption;
  lightbox.showModal();
}));
lightbox.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
