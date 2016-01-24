//anytime you need to directly modify the database mongoose needs to be required
var mongoose = require('mongoose');

//schema -- outline or definition of what something should look like

//declare a schema for our model - this enforces validation, data types, and more
var ResponseSchema = new mongoose.Schema({
  q1 : String,
  q2 : String,
  q3 : String,
  q4 : String,
  q5 : String,
  q6 : String
});

//we end by exporting a mongoose model
//when we export we need to give our model an application-wide name
// and specify what schema to use!

module.exports = mongoose.model('Response', ResponseSchema);
