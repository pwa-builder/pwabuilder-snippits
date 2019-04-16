function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);

      return position;
    })
  }
  else {
    console.info("geolocation is not supported in this environment");
  }
}