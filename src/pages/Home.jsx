/* eslint-disable react/prop-types */
// import axios from "axios";
// import { useEffect, useState } from "react";
import { TestimonialCard } from "../components/Card";
import { BlogCard } from "../components/cardWithImg";
import { HR } from "../components/hr";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import Icon from "@mui/material/Icon";
export default function Home(props) {
  const { posts, userId, setPost } = props;
  // console.log(posts);
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/auth") ? (
        <div
          style={{
            position: "fixed",
            bottom: "10%",
            left: "70%",
            zIndex: 4,
          }}
        >
          <div className=" gap-x-1">
            <Link to="/auth/addnewpost">
              <Button fullWidth variant="gradient" size="sm" className=" ">
                <span>ADD NEW POST </span>
              </Button>
            </Link>
          </div>
        </div>
      ) : null}

      {posts.map((post) => (
        <div
          key={post.id}
          className=" bg-blue-gray-50
     flex flex-col justify-center items-center"
        >
          {post.picture === "" ? (
            <>
              <TestimonialCard setPost={setPost} userId={userId} post={post} />
              <HR />
            </>
          ) : (
            <>
              <BlogCard userId={userId} setPost={setPost} post={post} />
              <HR />
            </>
          )}
        </div>
      ))}
    </>
  );
}
