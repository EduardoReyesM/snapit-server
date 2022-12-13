const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const ExploreSchema = new Schema({
  username: {
    type:String,
    require: true,
  },
  Picture: {
    type:String,
    require: true,
},
  description: {
    type:String,
  },
   share: {
    type:String,
   },
});
 
module.exports = model('Explore', ExploreSchema);