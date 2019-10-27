const getGeoPosition = () => {
  const options = {
    timeout: 5000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
  
export default getGeoPosition();
