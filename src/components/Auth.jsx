/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddNewPost from "../pages/AddNewPost";
import EditePost from "../pages/EditePost";
function Auth(props) {
  const { posts, setPosts, userId } = props;
  return (
    <>
      {localStorage.getItem("accessToken") ? (
        <Routes>
          <Route path="/" element={<Home posts={posts} userId={userId} />} />
          <Route
            path="addnewpost"
            element={
              <AddNewPost posts={posts} userId={userId} setPosts={setPosts} />
            }
          />
          <Route path="editepost" element={<EditePost />} />
        </Routes>
      ) : (
        <h1>you cant go to auth without login frist</h1>
      )}
    </>
  );
}

export default Auth;
