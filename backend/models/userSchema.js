// mongoose schema for user that have name, email, password, and avatarconst ;
mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

userSchema.pre('save', async function(next) {
    if (this.isNew) {
      const saltRounds = 10;
      const hashedPassword =  await bcrypt.hash(this.password, saltRounds);
      this.password = hashedPassword;
    }
    next();
  });

const User = mongoose.model("User", userSchema);
module.exports = User
