/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
//
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditePost(props) {
  const { userId, post, setPosts, posts } = props;
  // console.log(post);
  const [postData, setPostData] = useState(post);
  // console.log(postData);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let location = useLocation();
  const handleChange = (e) => {
    // console.log(e.target.value);
    let newData = { ...postData };
    newData[e.target.name] = e.target.value;
    setPostData(newData);
  };
  const nav = useNavigate();
  const onSubmit = (data) => {
    console.log(userId);
    axios
      .patch(`http://localhost:3001/posts/${post.id}`, {
        ...data,
        user_id: userId,
      })
      .then((res) => {
        console.log(res);
        const newPosts = [...posts];
        const index = newPosts.findIndex((p) => p.id === post.id);
        newPosts[index] = { ...newPosts[index], ...res.data };

        setPosts(newPosts);
        console.log(posts);
        toast.success("EDITE post sucsessfully");
        nav("/auth");
      })
      .catch((res) => {
        toast.error("some thing went wrong");
        console.log(res);
      });
  };
  return (
    <div className=" mt-10 flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Eidte POST
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Post Title
            </Typography>
            <Input
              // value={data.title}
              {...register("title", {
                required: "this title requierd",
              })}
              size="lg"
              placeholder="your post title"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              value={postData.title}
            />
            <p className="text-red-600">{errors.title?.message}</p>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Post Content
            </Typography>
            <Input
              {...register("content", {
                required: "this Content requierd",
              })}
              size="lg"
              placeholder="post Content"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleChange}
              value={postData.content}
            />
            <p className="text-red-600">{errors.Content?.message}</p>
          </div>
          <Button onClick={handleSubmit(onSubmit)} className="mt-6" fullWidth>
            EDITE POST
          </Button>
        </form>
      </Card>
    </div>
  );
}
