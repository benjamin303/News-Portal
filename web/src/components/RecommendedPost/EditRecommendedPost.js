import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRecommendedPost = () => {
  const { id } = useParams();
  const [recommended_title, setRecommended_title] = useState("");
  const [recommended_description, setRecommended_description] = useState("");
  const [recommended_image, setRecommended_image] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRecommendedPostById();
  }, []);

  const getRecommendedPostById = async () => {
    const response = await axios.get(
      `http://localhost:5000/recommendedPosts/${id}`
    );
    setRecommended_title(response.data.recommended_title);
    setRecommended_description(response.data.recommended_description);
    setRecommended_image(response.data.recommended_image);
  };

  const updateRecommendedPost = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/recommendedPosts/${id}`, {
        recommended_title,
        recommended_description,
        recommended_image,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateRecommendedPost}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={recommended_title}
                onChange={(e) => setRecommended_title(e.target.value)}
                placeholder="Recommended Title"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={recommended_description}
                onChange={(e) => setRecommended_description(e.target.value)}
                placeholder="Recommended Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={recommended_image}
                onChange={(e) => setRecommended_image(e.target.value)}
                placeholder="Recommended Image Url"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecommendedPost;
