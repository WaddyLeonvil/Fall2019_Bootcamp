/* Add all the required libraries*/
var mongoose = require('mongoose'),
config = require('./config.js'),
Listing = require('./ListingSchema.js');


/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({name: 'Library West'}, function (err, entry) {
    if (err) {
      throw err;
    }
    console.log(entry);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CABL'}, function(err, entry) {
    if (err) {
      throw err;
    }
    console.log(entry);
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1953 Museum Road, Gainesville, FL 32603'}, {new: true}, function(err, entry){
    if (err) {
      throw err;
    }
    console.log(entry);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function (err, entry) {
    if (err) {
      throw err;
    }
    console.log(entry);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();