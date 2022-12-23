import mongoose, { model } from "mongoose";

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  type: String,
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  admins: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "User",
  },
});

export const group =
  mongoose.models.Group || mongoose.model("Group", groupSchema);
