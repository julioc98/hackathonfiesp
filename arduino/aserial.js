var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM2');

port.on('open', function() {
  port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message); 
});



// port.on('data', function (data) {
  // console.log('Data: ' + data);
// });

var request = require("request");

var options = { method: 'PUT',
  url: 'https://green-box-c379d.firebaseio.com/dados.json',
  qs: { auth: 'oIqN5W99Wu7NoizkC8s7C3lRmUHMei0WZ9zXaHhy' },
  headers: 
   { 'cache-control': 'no-cache' },
  body: '{\n\t"luminosity" : {\n\t\t"value": "200"\n\t},\n\t"humidity": {\n\t\t"value": "200"\n\t},\n\t"temperature": {\n\t\t"value": "200"\n\t}\n}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});