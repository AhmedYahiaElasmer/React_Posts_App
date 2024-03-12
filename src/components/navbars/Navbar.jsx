import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";

import { Link, useLocation, useNavigate } from "react-router-dom";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const nav = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    nav("/");
  };
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="#" className="flex items-center">
          Contact US
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="Link"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          {location.pathname.startsWith("/auth") ? (
            <span>HOME</span>
          ) : (
            <Link to="/">HOME</Link>
          )}
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {location.pathname == "/login" ? (
          <div className="flex items-center gap-x-1">
            <Link to="/register">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Register</span>
              </Button>
            </Link>
          </div>
        ) : // eslint-disable-next-line no-constant-condition
        location.pathname == "/register" ? (
          <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
            </Link>
          </div>
        ) : location.pathname.startsWith("/auth") ? (
          <div className="flex items-center gap-x-1">
            <Link to="/">
              <Button
                onClick={handleLogOut}
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>
                  LOG OUT <PowerIcon className="h-4 w-4 inline" />
                </span>
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
            </Link>
          </div>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="flex justify-center">
        <div className="container mx-auto">
          {navList}
          <div className=" gap-x-1">
            <Link to="/login">
              <Button fullWidth variant="gradient" size="sm" className=" ">
                <span>Log In</span>
              </Button>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
