const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required:true,
  },
  picture: {
    type:String,
    required:true,
},
  description: {
    type:String,
  },
  comments: [{
    type: Schema.Types.ObjectId, ref:"Comment"
  }]
}, {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
});
 
module.exports = model('Post', PostSchema);