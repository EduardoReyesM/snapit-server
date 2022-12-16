const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    user: {
      type:String,
      required: true,
      lowercase: true,
    },
    picture: {
      type:String,
      default: "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-blue-default-avatar-png-image_2813123.jpg",
    },
    birthday: {
      type:Date,
    },
    country:{
      type:String,
      uppercase:true,
    },
    city:{
      type:String,
    },
    //post creado por el usuario
    posts: [{
      type: Schema.Types.ObjectId, ref: 'Post'
    }],
    //events creado por el usuario
    events: [{
      type: Schema.Types.ObjectId, ref: 'Event'
    }],
    //products creado por el usuario
    products: [{
      type: Schema.Types.ObjectId, ref: 'Product'
    }],
  },
    {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
