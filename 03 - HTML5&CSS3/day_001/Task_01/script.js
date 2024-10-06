let map;

async function getLocation(country) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${country}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      console.log(lat, lon);
      initMap(Number(lat), Number(lon));
    } else {
      console.error("No location found for the given country.");
    }
  } catch (error) {
    console.error("Error fetching the location data:", error);
  }
}

function initMap(lat, lon) {
  const countryPosition = { lat, lng: lon };
  map = new google.maps.Map(document.getElementById("map"), {
    center: countryPosition,
    zoom: 5,
  });

  new google.maps.Marker({
    position: countryPosition,
    map: map,
  });
}

document.querySelector(".buttons").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const country = event.target.textContent.trim();
    getLocation(country);
  }
});

getLocation("Egypt");
