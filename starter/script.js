'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////
// Nav smooth scrooling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(e.target);
    console.log(`Nav smooth scrooling`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// button smooth scrooling

function smoothScrool() {
  let section1 = document.getElementById('section--1');
  section1.scrollIntoView({ behavior: 'smooth' });
}
document
  .querySelector('.btn--scroll-to')
  .addEventListener('click', smoothScrool);
///////////////////////////////////////
//creating tab
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const contents = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //remove all active classes
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  contents.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  //Add active classe too clicked item
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
///////////////////////////////////////
// intersection observer API
const navHeight = nav.getBoundingClientRect().height;

const options = {
  root: null,
  threshHold: 0,
  rootMargin: `${navHeight}px`,
};
const stickyNav = function (entries) {
  if (!entries[0].isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const HeaderObserver = new IntersectionObserver(stickyNav, options);
HeaderObserver.observe(header);

///////////////////////////////////////
//Lazy Loading
const imgTarget = document.querySelectorAll('img[data-src]');
function loadImg(entries, observer) {
  const [entry] = entries;
  console.log(entries);
  if (!entry.isIntersecting) return;
  // Replace src with data-src

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}
const lazyImg = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTarget.forEach(img => lazyImg.observe(img));
///////////////////////////////////////
// Slider

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// const h1 = document.querySelector('h1');
// h1.parentElement.children;
// console.log(h1.parentElement.children);
// console.log();
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.background = 'red';
// });
