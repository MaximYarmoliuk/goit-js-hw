const checkBox = document.getElementById('theme-switch-control');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

checkBox.addEventListener('change', () => {
  if (localStorage.getItem('Theme') === 'Light') {
    localStorage.setItem('Theme', 'Dark');
    body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  } else {
    localStorage.setItem('Theme', 'Light');
    body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  }
});

if (localStorage.getItem('Theme') === 'Dark') {
  body.classList.add( `${Theme.DARK}`);
} else body.classList.add(`${Theme.LIGHT}`);
