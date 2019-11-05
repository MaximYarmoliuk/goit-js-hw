import './styles.css';
import apiService from './js/apiService.js';
import photoCardTemplate from './templates/photoCard.hbs';

const refs = {
  searchInput: document.querySelector('input[name=query]'),
  searchForm: document.querySelector('#search-form'),
  searchButton: document.querySelector('button[name=search-button]'),
  loadMore: document.querySelector('button[data-action=load-more]'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', searchPhotoCards);
refs.loadMore.addEventListener('click', loadMorePhotoCards);

function searchPhotoCards(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;

  clearPhotoList();
  apiService.resetPage();

  apiService.searchQuery = inputValue;

  apiService.searchByName().then(data => {
    const markup = buildListItemsMarkup(data);
    insertListItems(markup);
  });
}

function buildListItemsMarkup(items) {
  return photoCardTemplate(items);
}

function insertListItems(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}

function loadMorePhotoCards() {
  apiService.searchByName().then(data => {
    const markup = buildListItemsMarkup(data);
    insertListItems(markup);
  });
}

function clearPhotoList() {
  refs.gallery.innerHTML = '';
}

