import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [recommended_title, setRecommended_title] = useState("");
  const [recommended_description, setRecommended_description] = useState("");
  const [recommended_image, setRecommended_image] = useState("");
  const navigate = useNavigate();

  const savePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/recommendedPosts", {
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
        <form onSubmit={savePost}>
          <div className="field">
            <label className="label">Post</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={recommended_title}
                onChange={(e) => setRecommended_title(e.target.value)}
                placeholder="Type recommended title"
                required
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
                placeholder="Type recommended description"
                required
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
                placeholder="Paste recommended image url"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
