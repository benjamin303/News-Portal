import mongoose from "mongoose";

const RecommendedPost = mongoose.Schema({
  recommended_title: {
    type: String,
    required: true,
  },
  recommended_description: {
    type: String,
    required: true,
  },
  recommended_image: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("RecommendedPosts", RecommendedPost);
