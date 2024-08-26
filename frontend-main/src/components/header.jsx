import React, {
  useEffect,
  useState,
} from "react";
import Image from "../assets/cc_logo.png";
import { Link } from "react-router-dom";
import { allowedRoutes } from "../config/routes";
import { useSelector } from "react-redux";
import { menuLinks } from "../config/internalLinks";

export function Header() {
  const user = useSelector(
    (state) => state.authReducer
  );
  const cartItems = useSelector(
    (state) => state.cartReducer.products.length
  );
  const [sidenav, setSidenav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [activeLink, setActiveLink] = useState(
    menuLinks[0].title
  );

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);
  return (
    <header
      id="header"
      className={`w-full ${
        isSticky ? "sticky-header" : ""
      } `}
    >
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-row justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to={allowedRoutes.home}
            onClick={() =>
              setActiveLink(menuLinks[0].title)
            }
            className="flex items-center"
          >
            <img
              src={Image}
              className="mr-3 w-16 h-12 sm:h-12 sm:mr-16"
              alt="Cuisine"
            />
            <span className="sm:block hidden self-center text-orange-500 text-xl font-semibold whitespace-nowrap ">
              Cuisine Compass
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {cartItems !== 0 && (
              <Link
                to={allowedRoutes.cartItems}
                className="relative mx-8"
              >
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-orange-500 p-3 text-xs text-white">
                    {cartItems}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mt-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            )}
            {!user.token && (
              <Link
                to={allowedRoutes.login}
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                Log in
              </Link>
            )}
            {user.token && (
              <Link
                to={allowedRoutes.myaccount}
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                My Account
              </Link>
            )}
            <Link
              to={allowedRoutes.restaurants}
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Order Now
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setSidenav(!sidenav)}
            >
              <span className="sr-only">
                Open main menu
              </span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuLinks.map((m, i) => (
                <li key={i}>
                  <Link
                    to={m.link}
                    className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                      activeLink === m.title
                        ? "text-black "
                        : " bg-transparent text-orange-600"
                    }`}
                    onClick={() =>
                      handleLinkClick(m.title)
                    }
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {sidenav && (
        <div className="fixed flex flex-col bg-clip-border rounded-md bg-white text-gray-700 h-[100vh] top-0 right-0 w-[300px] p-4 shadow-xl shadow-orange-gray-900/5 lg:hidden sm:block ">
          <div className="mb-2 p-4"></div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div className="flex flex-row w-full justify-end mb-4">
              <span
                onClick={() => setSidenav(false)}
                className="w-8 h-8 border-[1px] rounded-full border-orange-600 top-2 right-1 text-orange-600 text-2xl flex justify-center items-center cursor-pointer hover:border-orange-400 hover:text-orange-400 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
            {menuLinks.map((m, i) => (
              <Link
                to={m.link}
                key={i}
                role="button"
                onClick={() => setSidenav(false)}
                tabIndex="0"
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-orange-50 hover:bg-opacity-80 focus:bg-orange-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-orange-600 focus:text-orange-600 active:text-orange-600 outline-none"
              >
                <div className="grid place-items-center mr-4"></div>
                {m.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
