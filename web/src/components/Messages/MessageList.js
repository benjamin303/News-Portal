import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MessageList = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const response = await axios.get("http://localhost:5000/messages");
    setMessage(response.data);
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/messages/${id}`);
      getMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="/" className="button is-success">
          Check Post List
        </Link>
        <Link to="/recommendedpostlist/" className="button is-info ml-5">
          Check Recommended Posts
        </Link>

        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message._id}>
                <td>{index + 1}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>
                  <button
                    onClick={() => deleteMessage(message._id)}
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

export default MessageList;
