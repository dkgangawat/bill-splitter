// group schema so user can add friends to group and share trip expention with them

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  group: [
    {
      name: {
        type: String,
        required: true,
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
    },
  ],
});

const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;
