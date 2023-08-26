import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    email: {
        type: "string",
        required: [true, "Please enter Your Email"],
      },
    bio: {
      type: String,
      maxlength: 200,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  });


  
 export const User = mongoose.model('User', userSchema);
