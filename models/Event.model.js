const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const EventsSchema = new Schema({
  Picture: {
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
  project: { type: Schema.Types.ObjectId, ref: 'events' }
});
 
module.exports = model('Events', EventsSchema);