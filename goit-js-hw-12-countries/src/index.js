import './styles.css';
import searchCountries from './js/fetchCountries.js';
import countryListTemplate from './templates/menu.hbs';
import listOfCountryName from './templates/listOfCounryName.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import debounce from '../node_modules/lodash' ;

const refs = {
  searchInput: document.querySelector('#query'),
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('.country-list'),
};

refs.searchInput.addEventListener('input', _.debounce(searchFormSubmitHundler, 500) );

function searchFormSubmitHundler(e) {
  e.preventDefault();
  clearMarkup();
  PNotify.closeAll();
  const searchQuery = e.target.value;
  if (searchQuery.length >= 1) {
    searchCountries.fetchCountries(searchQuery).then(data => {
      clearMarkup();
      PNotify.closeAll();
      markup(data);
    });
  }
}

function buildListItemsMarkup(items) {
  return countryListTemplate(items);
}

function buildListCountryNames(items) {
  return listOfCountryName(items);
}

function insertListItems(items) {
  refs.articleList.insertAdjacentHTML('beforeend', items);
}

function clearMarkup() {
  refs.articleList.innerHTML = '';
}

function markup(data) {
  if (data.length === 1) {
    const markup = buildListItemsMarkup(data[0]);
    insertListItems(markup);
  } else if (data.length <= 10) {
    const markup = buildListCountryNames(data);
    insertListItems(markup);
  } else if (data.length > 10) {
    PNotify.error('Too many matches found. Please a more specific query!');
  }
}
