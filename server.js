var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
require("./server/config/mongoose.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(express.static(path.join(__dirname, './node_modules')));
app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');



io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	// (Listener) On Connection
 	console.log("Connected - Socket ID: ", socket.id);
  	// (Listener) On Disconnect
	socket.on('disconnect', function() {
		console.log("Disconnected - Socket ID: ", socket.id);
 	})
 	socket.on('created_topic', function(data) {
 		socket.broadcast.emit('topic_added', data);
 	})
});

require("./server/config/routes.js")(app);

var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});
