import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: [40, "Content shouldn't be not more than 40 characters"],
    minlength: [3, "Content shouldn't be lesser than 5 characters"],
  },
  content: {
    type: String,
    trim: true,
    maxlength: [40, "Content shouldn't be not more than 40 characters"],
    minlength: [5, "Content shouldn't be lesser than 5 characters"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
