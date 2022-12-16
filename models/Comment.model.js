const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 console.log(Schema)
const CommentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required:true,
  },
  description: {
    type:String,
  },
}, {
  // this second object adds extra properties: `createdAt` and `updatedAt`
  timestamps: true,
});
 console.log(CommentsSchema);
module.exports = model('Comment', CommentsSchema);