/* eslint-disable no-constant-condition */
//
import { Card, Input, Button, Typography } from "@material-tailwind/react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUP() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let location = useLocation();
  const nav = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const sentData = {
      ...data,
      avatar: "https://picsum.photos/800",
    };
    console.log(sentData);
    axios
      .post("https://api.escuelajs.co/api/v1/users", sentData)
      .then((res) => {
        console.log(res.data);
        toast.success("Add user sucsessfully");
        nav("/login");
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
          {location.pathname == "/login" ? "LOGIN" : "REGISTER"}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              {...register("name", {
                required: "this name requierd",
                pattern: {
                  value: /^[a-zA-Z'. -]{5,}$/,
                  message:
                    "Name must contain characters only and be at least 5 characters long.",
                },
              })}
              size="lg"
              placeholder="your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="text-red-600">{errors.name?.message}</p>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              {...register("email", {
                required: "this email requierd",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="text-red-600">{errors.email?.message}</p>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,12}$/,
                //   message: `password must contain :\n
                //    at lest one lowercase letter ,\n
                //    one uppercase letter,\n
                //    one digit,\n
                //    one special character`,
                // },
                maxLength: {
                  value: 12,
                  message: "Password cannot exceed more than 12 characters",
                },
              })}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="text-red-600">
              {errors.password && (
                <ul>
                  {errors.password.message
                    .split("\n")
                    .map((errorMessage, index) => (
                      <li key={index}>{errorMessage}</li>
                    ))}
                </ul>
              )}
            </div>
          </div>
          <Button onClick={handleSubmit(onSubmit)} className="mt-6" fullWidth>
            sign up
          </Button>
          {location.pathname == "/register" ? (
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?
              <Link to="/login" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          ) : (
            <Typography color="gray" className="mt-4 text-center font-normal">
              Create new account?
              <Link to="/register" className="font-medium text-gray-900">
                Sign UP
              </Link>
            </Typography>
          )}
        </form>
      </Card>
    </div>
  );
}
