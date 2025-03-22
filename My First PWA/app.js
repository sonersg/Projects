const openBtn = document.querySelector('.open-button');
const sect = document.querySelector('.sect');
const audio = document.querySelector('.audio');

let c = 1;
openBtn.addEventListener('click', function () {
  sect.style.display = 'block';

  if (c === 1) {
    audio.innerHTML = `
    <audio loop autoplay>
    <source src="./musics/two.mp3">
    Your browser doesn't support audio!
    </audio>
    `;
  } else if (c === 2) {
    audio.innerHTML = `
    <audio loop autoplay>
    <source src="./musics/three.mp3">
    Your browser doesn't support audio!
    </audio>
    `;
  } else if (c === 3) {
    audio.innerHTML = `
    <audio loop autoplay>
    <source src="./musics/five.mp3">
    Your browser doesn't support audio!
    </audio>
    `;
    c = 0;
  }
  c++;
});

window.addEventListener('click', function (e) {
  navigator.serviceWorker.ready.then((registration) =>
    registration.showNotification('Scheduled Notification', {
      body: 'notificaiton body',
      icon: 'icon-192x192.png',
    })
  );

  if (e.target === sect) {
    sect.style.display = 'none';
    audio.innerHTML = ``;
  }
});

// Register the service worker in your JavaScript file.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    Notification.requestPermission().then((izin) => {
      if (izin !== 'granted') alert('notification permission denied');
    });

    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
        alert('Service Worker registration failed');
      });
  });
}

// LOCATION
if ('geolocation' in navigator) {
  // Geolocation is supported
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Success callback
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy; // Accuracy of the location in meters

      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      console.log('Accuracy:', accuracy, 'meters');
      // alert(`Latitude: ${latitude}\nLongitude: ${longitude}`);

      navigator.serviceWorker.ready.then((registration) =>
        registration.showNotification('soner', {
          body: `Latitude: ${latitude}\nLongitude: ${longitude}`,
          icon: 'icon-192x192.png',
        })
      );

      // You can use this data in your app
    },
    (error) => {
      // Error callback
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error('User denied the request for Geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          console.error('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          console.error('The request to get user location timed out.');
          break;
        default:
          console.error('An unknown error occurred.');
      }
    },
    {
      // Optional options
      enableHighAccuracy: true, // Request high accuracy (may take longer)
      timeout: 5000, // Maximum time to wait for location (in milliseconds)
      maximumAge: 0, // Do not use a cached position
    }
  );
} else {
  // Geolocation is not supported
  console.error('Geolocation is not supported by this browser.');
}
