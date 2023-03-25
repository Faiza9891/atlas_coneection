const mongoose = require('mongoose')
require('./connection')




//  Mongoose schema for a user document
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  
  //  Mongoose model for the user collection
  const User = mongoose.model('User', userSchema);
  
  // Insert  document into the user collection
const user = new User({
    name: 'John', 
    email: 'john@example.com', 
    age: 30 
});
user.save();

// Query the user collection
User.findOne({ name: 'John' }).then(result => console.log(result));
