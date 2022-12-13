const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const MarketSchema = new Schema({
  Picture: {
    type:String,
    require: true,
},
Price: {
    type:String,
    require: true,
  },
  description: {
    type:String,
  },
   interested: {
    type:String,
   },
   share: {
    type:String,
   },
  Event: { type: Schema.Types.ObjectId, ref: 'event'}
});
 
module.exports = model('Marketplace', MarketSchema);