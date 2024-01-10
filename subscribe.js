navigator.serviceWorker.ready.then(function(registration) {
    registration.pushManager.subscribe({ userVisibleOnly: true })
      .then(function(subscription) {
        // Send subscription data to your server
      })
      .catch(function(error) {
        console.error('Error subscribing to push notifications:', error);
      });
  });