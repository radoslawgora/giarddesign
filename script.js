const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu');
const search = document.querySelector('#search-handler');
const searchForm = document.querySelector('#search');
const closeSearchBtn = document.querySelector('#search-close-button');
const offerMenuBtn = document.querySelector('#offer-link');
const offerSubMenu = document.querySelector('.sub-menu');
const subMenuLinks = document.getElementsByClassName('sub-menu__link');
const projectsShowBtn = document.querySelector('.projects-overlay__button');
const projectsOverlay = document.querySelector('.projects-overlay');
const projectsWrapper = document.querySelector('.projects');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('is-active');
};

menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 1250 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('is-active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);

const showSearch = () => {
  searchForm.classList.toggle('is-active');
  search.classList.toggle('deactive');
};

search.addEventListener('click', showSearch);
closeSearchBtn.addEventListener('click', showSearch);

const showSubMenu = () => {
  offerSubMenu.classList.toggle('is-active');
};

const hideSubMenu = () => {
  offerSubMenu.classList.remove('is-active');
};

offerMenuBtn.addEventListener('click', showSubMenu);

for (const link of subMenuLinks) {
  link.addEventListener('click', hideSubMenu);
}

FlexMasonry.init('.grid', {
  responsive: true,
  breakpointCols: {
    'min-width: 1262px': 3,
    'min-width: 992px': 2,
    'min-width: 768px': 1,
  },
  numCols: 3,
});

const showProjects = () => {
  projectsShowBtn.classList.toggle('deactive');
  projectsOverlay.classList.toggle('deactive');
  projectsWrapper.classList.toggle('active');
};

projectsShowBtn.addEventListener('click', showProjects);

let slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
  plusSlides(1);
}, 5000);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('hero-wrapper');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}
