/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import { DefaultSpeedDial } from "./dial";
export function BlogCard(props) {
  const { post, userId } = props;

  return (
    <Card color="transparent" className="max-w-[40rem] overflow-hidden">
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="lg"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              // className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <div>
            <Typography className=" mx-3 font-normal">
              {post.user_name}
            </Typography>
          </div>
        </div>
        {/* {(console.log("user_id", post.user_id), console.log("userId", userId))} */}
        {location.pathname.startsWith("/auth") && post.user_id == userId ? (
          <DefaultSpeedDial post={post} />
        ) : null}
      </CardFooter>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        // className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {post.title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {post.content}
        </Typography>
      </CardBody>
    </Card>
  );
}
