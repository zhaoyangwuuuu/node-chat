var socket = io();

socket.on('connect', function() {
  console.log('Connect to server');
});

socket.on('disconnect', function() {
  console.log('Disconnect from server');
});