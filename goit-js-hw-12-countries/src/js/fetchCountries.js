const baseUrl = "https://restcountries.eu/rest/v2";

export default{
fetchCountries(searchQuery) {
    const searchCountriesByName = `/name/${searchQuery}`;
    return fetch(baseUrl + searchCountriesByName).then(res => res.json());
}
}
