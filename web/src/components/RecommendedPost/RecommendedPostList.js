import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecommendedPostList = () => {
  const [recommendedPosts, setRecommendedPost] = useState([]);

  useEffect(() => {
    getRecommendedPosts();
  }, []);

  const getRecommendedPosts = async () => {
    const response = await axios.get("http://localhost:5000/recommendedPosts");
    setRecommendedPost(response.data);
  };

  const deleteRecommendedPost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/recommendedPosts/${id}`);
      getRecommendedPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="/" className="button is-success">
          Posts
        </Link>
        <Link to="/messagelist/" className="button is-danger ml-5">
          Messages
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Recommended Title</th>
              <th>Recommended Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recommendedPosts.map((recommendedPost, index) => (
              <tr key={recommendedPost._id}>
                <td>{index + 1}</td>
                <td>{recommendedPost.recommended_title}</td>
                <td style={{ height: 100 }}>
                  {recommendedPost.recommended_description}
                </td>
                <td>
                  <button
                    onClick={() => deleteRecommendedPost(recommendedPost._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendedPostList;
