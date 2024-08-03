// models/userModel.js
import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
const chatSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  parts: [
    {
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  recipeSuggestionChat: [chatSchema],
  mealPlanningChat: [chatSchema],
});

userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    
    this.password=await bcrypt.hash(this.password,2);
})

const User = mongoose.model('User', userSchema);

export default User;
