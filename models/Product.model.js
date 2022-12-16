const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required:true,
  },
  productName:{
    type:String,
  },
  picture: {
    type:String,
    required: true,
  },
  price: {
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
 
module.exports = model('Product', ProductSchema);