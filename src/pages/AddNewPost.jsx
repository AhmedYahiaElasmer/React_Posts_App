/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
//
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddNewPost(props) {
  const { posts, setPosts, userId } = props;
  // console.log(posts);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let location = useLocation();
  const nav = useNavigate();
  const onSubmit = (data) => {
    console.log(userId);
    // axios
    //   .post("http://localhost:3001/posts", data)
    //   .then((res) => {
    //     // console.log("res", res.data);
    //     //clone
    //     const oldPosts = [...posts];
    //     // console.log(oldPosts);
    //     //edite
    //     oldPosts.unshift(res.data);
    //     // console.log(newPosts);
    //     setPosts(oldPosts);
    //     console.log(posts);
    //     toast.success("Add post sucsessfully");
    //     nav("/auth");
    //   })
    //   .catch((res) => {
    //     toast.error("some thing went wrong");
    //     console.log(res);
    //   });
  };
  return (
    <div className=" mt-10 flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          {location.pathname == "/addnewpost" ? "ADD NEW POST" : "REGISTER"}
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
              {...register("title", {
                required: "this title requierd",
              })}
              size="lg"
              placeholder="your post title"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
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
            />
            <p className="text-red-600">{errors.Content?.message}</p>

            {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              Post picture
            </Typography>
            <Input
              {...register("picture", {
                // required: "this picture requierd",
              })}
              size="lg"
              placeholder="post picture"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="text-red-600">{errors.picture?.message}</p> */}
          </div>
          <Button onClick={handleSubmit(onSubmit)} className="mt-6" fullWidth>
            ADD NEW POST
          </Button>
        </form>
      </Card>
    </div>
  );
}
