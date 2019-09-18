/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
Listing = require("./ListingSchema.js"); 
mongoose = require("mongoose");
config = require('./config.js');

mongoose.connect(config.db.uri, { useNewUrlParser: true }).then(success => {
  console.log("Connected");
});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
// Find Library West Function  
//Reference: https://docs.mongodb.com/manual/reference/method/db.collection.findOne/
	Listing.findOne({"name": "Library West"}, function(err, listing){
		if(!err){
			console.log("Found:" + JSON.stringify(listing));
		}
	});
};

var removeCable = function() {
//First find the cable listing then delete.  

	Listing.findOne({ code:"CABL" }, function (err, listing){
    if(!err){
	//If found then delete listing
		console.log("Deleting:" + JSON.stringify(listing));
    }
	}).remove(function (err){
		if(!err){
		console.log("Successfully Deleted");
		}
	});
};
var updatePhelpsLab = function() {
//First Find then Update
//Reference https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
	Listing.findOneAndUpdate({ "name": "Phelps Laboratory" }, { $set: { address: "1953 Museum Road Gainesville, FL 32611" } }, { returnOriginal: false }, (err, data) => {
    if (!err) {
		console.log("Successfully Updated");
    }
    console.log(data);
	});
};
var retrieveAllListings = function() {
// Find all listings
// Reference https://docs.mongodb.com/manual/reference/method/db.collection.find/
	
	Listing.find(function(err, listings){
    if(!err){
      console.log("Listings: "+ JSON.stringify(listings));
    }
  });
  
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
