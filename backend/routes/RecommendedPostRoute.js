import express from "express";
import {
  getRecommendedPosts,
  getRecommendedPostById,
  saveRecommendedPost,
  updateRecommendedPost,
  deleteRecommendedPost,
} from "../controllers/RecommendedPostController.js";

const router = express.Router();

router.get("/recommendedPosts", getRecommendedPosts);
router.get("/recommendedPosts/:id", getRecommendedPostById);
router.post("/recommendedPosts", saveRecommendedPost);
router.patch("/recommendedPosts/:id", updateRecommendedPost);
router.delete("/recommendedPosts/:id", deleteRecommendedPost);

export default router;
