var socket = io();
socket.on('message', () => {
  console.log('new event data');
  const div = document.createElement('div');
  div.innerHTML = `new message from server`;
  document.body.appendChild(div);
});
var socket = io();

// Send a message to the server
socket.emit('message', 'hello from client');

socket.on('message', (data) => {
  console.log('new event data:', data);
  const div = document.createElement('div');
  div.innerHTML = `new message from server: ${data}`;
  document.body.appendChild(div);
});
