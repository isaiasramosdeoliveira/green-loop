// import 'regenerator-runtime/runtime';
// import 'core-js/stable';

// Actions of buttons
document.addEventListener('click', (e) => {
  e.preventDefault();
  let url = '';
  const action = e.target;
  if (action.tagName.toLowerCase() === 'a') {
    url = action.href;
    loadPage(url);
  }
});
async function loadPage(url) {
  const page = await fetch(url);
  const pageContent = await page.text();
  const display = document.querySelector('#contents');
  display.innerHTML = pageContent;
}

// function of button mobile
document.addEventListener('click', (e) => {
  const action = e.target;
  const menu = document.querySelector('#menu');
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
