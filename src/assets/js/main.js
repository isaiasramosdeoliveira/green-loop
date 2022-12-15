import {
  login, plans, aboutUs, cart, contacts, loader,
} from '../../pages/pages';

const display = document.querySelector('#contents');
const menu = document.querySelector('#menu');

const time = (section) => {
  setTimeout(() => {
    loaderPage(section);
  });
  // display.innerHTML = loader;
};
const loaderPage = (section) => {
  display.innerHTML = section;
};
// Actions of buttons
menu.addEventListener('click', (e) => {
  e.preventDefault();
  const action = e.target;
  const id = action.classList;
  switch (id[0]) {
    case 'login':
      time(login);
      break;
    case 'plans':
      time(plans);
      break;
    case 'aboutUs':
      time(aboutUs);
      break;
    case 'cart':
      time(cart);
      break;
    case 'contacts': {
      time(contacts);
    }
  }
});
// function of button mobile
document.addEventListener('click', (e) => {
  const action = e.target;
  if ((action.classList.contains('fa-list'))) {
    menu.style.height = '97vh';
    action.classList = 'fa-solid fa-xmark';
  } else if (action.classList.contains('fa-xmark') && action.tagName.toLowerCase() === 'i') {
    menu.style.height = '50px';
    action.classList = 'fa-solid fa-list';
  }
  if (!action.classList.contains('fa-list') && action.tagName.toLowerCase() !== 'i') {
    const button = document.querySelector('.fa-xmark');
    button.classList = 'fa-solid fa-list';
    menu.style.height = '50px';
  }
});
// Animações de Soroll
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
});
sr.reveal('.hidden', { delay: 200 });
sr.reveal('.hidden', { interval: 200 });
