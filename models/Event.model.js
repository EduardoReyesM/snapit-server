const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const EventsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required:true,
  },
  name: {
    type:String,
  },
  picture: {
    type:String,
    required: true,
  },
  description: {
    type:String,
  },
   
}, {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
});
 
module.exports = model('Event', EventsSchema);