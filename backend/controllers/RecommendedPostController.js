import RecommendedPost from "../models/RecommendedPostModel.js";

export const getRecommendedPosts = async (req, res) => {
  try {
    const recommendedPosts = await RecommendedPost.find();
    res.json(recommendedPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecommendedPostById = async (req, res) => {
  try {
    const recommendedPost = await RecommendedPost.findById(req.params.id);
    res.json(recommendedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveRecommendedPost = async (req, res) => {
  const recommendedPost = new RecommendedPost(req.body);
  try {
    const insertedpost = await recommendedPost.save();
    res.status(201).json(insertedpost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRecommendedPost = async (req, res) => {
  try {
    const updatedrecommendedPost = await RecommendedPost.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedrecommendedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRecommendedPost = async (req, res) => {
  try {
    const deletedrecommendedPost = await RecommendedPost.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deletedrecommendedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
