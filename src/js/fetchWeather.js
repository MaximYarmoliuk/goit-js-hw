fetch(
    'https://api.darksky.net/forecast/fb537080f5423e7e4129634be0110501/50.49456804107769,30.608296760739208',
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
      },
    },
  )
    .then(res => {
        return JSON.parse(res);
    })
    .then(data => console.log(data))



// latitude: 50.49456804107769;
// longitude: 30.608296760739208;
