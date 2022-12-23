import mongoose, { model } from "mongoose";

const postSchema = new mongoose.Schema({
  body: String,
  username: String,
  groupName: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  group: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Group",
  },
  comments: [
    {
      body: String,
      username: String,
      createdAt: {
        type: Date,
        default: () => Date.now(),
      },
    },
  ],
  likes: [
    {
      username: String,
      createdAt: {
        type: Date,
        default: () => Date.now(),
      },
    },
  ],
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

export const posts = mongoose.models.Post || mongoose.model("Post", postSchema);
