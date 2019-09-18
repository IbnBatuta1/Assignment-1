/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var listingSchema = new Schema({
// Present in the listings.json
	code: { type: String, required: true },
  	name: { type: String, required: true },
  	coordinates: [{ latitude: Number, longitude: Number }],
  	address: String,

  	created_at: Date,
  	updated_at: Date
});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
listingSchema.pre('save', function(next) {

//Create a date Variable for saving
	var newDate = new Date();

//Update updated_at date.
	this.updated_at = newDate;

//Update created_at if the listing hasn't been created before.
	if(!this.created_at){
		this.created_at = newDate;
	}

	next();
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
