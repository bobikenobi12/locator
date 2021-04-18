const getLocation = async (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6a53842cf28d4ba2ae0c14d99291b934`
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    if (err instanceof TypeError) {
      console.log(err.message);
    }
  }
};

navigator.geolocation.getCurrentPosition(
  (position) => getLocation(position),
  (err) => {
    console.log(err.message);
  }
);
