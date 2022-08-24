import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import AddRecommendedPost from "./components/RecommendedPost/AddRecommendedPost";
import RecommendedPostList from "./components/RecommendedPost/RecommendedPostList";
import EditRecommendedPost from "./components/RecommendedPost/EditRecommendedPost";
import MessageList from "./components/Messages/MessageList";
import EditMessage from "./components/Messages/EditMessage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser/>} /> */}
          <Route
            path="recommendedpostlist/"
            element={<RecommendedPostList />}
          />
          <Route
            path="recommendedpostlist/add"
            element={<AddRecommendedPost />}
          />
          <Route
            path="recommendedpostlist/edit/:id"
            element={<EditRecommendedPost />}
          />
          <Route path="" element={<PostList />} />
          <Route path="add" element={<AddPost />} />
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="messagelist/" element={<MessageList />} />
          <Route path="message/edit/:id" element={<EditMessage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
