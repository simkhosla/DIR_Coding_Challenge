// require mongoose
// make a connection String// your should connect your db
// and handle connected, disconnected, and error events.

// mongoose is my ORM
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/surveyresponses";

// physically connect to mongodb
mongoose.connect(connectionString);

// events to listen to!
mongoose.connection.on('connected', function() {
    console.log('HOLY MACKERAL BATMAN! We CONNECTED '+connectionString);
});

mongoose.connection.on('error', function(error) {

      console.log('YOUR PARENTS ARE DEAD!'+error);
});

mongoose.connection.on('disconnected', function() {

      console.log('oh no we\'re disconnected');

});
