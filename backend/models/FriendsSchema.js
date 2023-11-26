// friend schema so user add friends via email and share trip expention with them

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  friends: [
    {
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const Friends = mongoose.model("Friends", FriendsSchema);
module.exports = Friends;