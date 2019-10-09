import posts from '../menu.json';
import templateMenuItems from '../templates/menu-items.hbs';

import '../styles.css';

const refs = {
  menuItems: document.getElementById('menu'),
};

buildMenuItems(posts);

function buildMenuItems(posts) {
  const markup = posts.map(post => templateMenuItems(post)).join(' ');
  refs.menuItems.insertAdjacentHTML('beforeend', markup);
}
