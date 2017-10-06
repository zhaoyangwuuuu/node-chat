var socket = io();

socket.on('connect', function() {
  console.log('Connect to server');

  socket.emit('createMessage',{
    from: 'Zhao',
    text: 'This is from Zhao'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnect from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});