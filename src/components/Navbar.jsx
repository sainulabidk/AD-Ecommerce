import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/userSlice";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/logo.png"

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignout = async () => {
    try {
      await axios.get("/logout");
      dispatch(signout());
      Navigate("/");
      toast.warning("logout Success!", { position: "top-center" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header
      className={`flex w-full items-center ${
        scrolled ? "bg-opacity-75 bg-zinc-100" : "bg-zinc-50 shadow-sm"
      } p-4 fixed z-50 px-10 transition-colors duration-300`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to={"/"} className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className=""
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {open ? (
                <>
                  <button
                    onClick={() => setOpen(false)}
                    id="navbarClose"
                    className="navbarTogglerActive absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <FaTimes size={22} />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <FaBars size={22} />
                </button>
              )}
              <nav
                id="navbarCollapse"
                className={`absolute z-50 right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                }`}
              >
                <div className="sm:hidden">
                  {currentUser ? (
                    <h1 className="px-7 py-3 text-xl font-medium text-dark hover:text-gray-950 text-gray-900">
                      Hello, {currentUser.firstName}
                    </h1>
                  ) : (
                    <div className="flex gap-2 text-slate-50 font-semibold">
                      <button className="bg-darker-gray px-2 py-2 btnHover rounded-md">
                        SignUp
                      </button>
                      <button className="bg-darker-blue px-2 py-2 btnHover rounded-md">
                        SignIn
                      </button>
                    </div>
                  )}
                </div>

                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Profile</ListItem>
                  <ListItem NavLink="/#">My-Orders</ListItem>
                  <ListItem NavLink="/#">Other</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              {currentUser ? (
                <>
                  <h1 className="px-7 py-3 text-xl font-medium text-dark hover:text-gray-950 text-gray-900">
                    Hello, {currentUser.firstName}
                  </h1>
                  <button
                    onClick={handleSignout}
                    className="bg-darker-gray text-primary rounded-md px-2 btnHover"
                  >
                    Signout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={"/sign-in"}
                    className="px-7 py-3 text-xl font-medium text-dark hover:text-gray-950 text-gray-600"
                  >
                    Sign in
                  </Link>

                  <Link
                    to={"/sign-up"}
                    className="rounded-md bg-darker-gray px-7 py-3 text-base font-medium text-white hover:bg-darker-gray-medium"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children }) => {
  return (
    <>
      <li className="flex py-2 text-xl font-medium text-gray-600 hover:text-gray-950 lg:ml-12 lg:inline-flex">
        {children}
      </li>
    </>
  );
};
