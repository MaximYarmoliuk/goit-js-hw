// import './styles.css';

// import * as weather from './js/fetchWeather';


import getGeoPosition from './js/getGeoPosition.js';
getGeoPosition
  .then(location => {
    console.log(location);
  })
  .catch(error => {
    console.log(error);
  });

