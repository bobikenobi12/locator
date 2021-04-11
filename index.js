function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6a53842cf28d4ba2ae0c14d99291b934`
  )
    .then((response) => response.json())
    .then(console.log);
}

function error(err) {
  console.warn(`Error (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);
