import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
  },
  { timestamps: true }
);

userSchema.methods.getResetPasswordToken=function(){

  //Generating token
  
  const resetToken=crypto.randomBytes(20).toString("hex");

  //Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpire=Date.now()+15*60*1000;

  return resetToken;
}


export default mongoose.model("users", userSchema);
