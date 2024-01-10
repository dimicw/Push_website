Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      console.log('Permission for push notifications granted');
    } else {
      console.error('Permission for push notifications denied');
    }
  });