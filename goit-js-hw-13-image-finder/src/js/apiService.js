
const baseUrl = 'https://pixabay.com/api/';
const proxy = 'https://cors-anywhere.herokuapp.com/';

export default {
  page: 1,
  query: '',
  image_type: 'photo',
  orientation: 'horizontal',
  key: '14154163-50f1b5a2e44fb9aa2c654ef49',

  searchByName() {
    const requestParams = `?image_type=${this.image_type}&orientation=${this.orientation}&q=${this.query}&page=${this.page}&key=${this.key}`;

    return fetch(proxy + baseUrl + requestParams).then(res =>
      res.json().then(parseResp => {
        this.incrementPage();
        return parseResp.hits;
      }),
    );
  },

  get searchQuery(){
    return this.query;
  },

  set searchQuery(value){
    this.query = value;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage(){
    this.page = 1;
  }
};
