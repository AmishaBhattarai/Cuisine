import React, {
  useEffect,
  useRef,
  useState,
} from "react";
// import Dashboard from "./dashboard";
import HeaderButton from "./headerButton";
import { Link, Outlet } from "react-router-dom";
import { route } from "../config/routes";
import { useDispatch } from "react-redux";
import { SideLinks } from "./sideLinks";
import {
  MenuLink,
  MenuSVG,
} from "../config/menuLinks";
import { greetingUser } from "../function/greeting";
import { logOut } from "../api/slice/authSlice";

export function Header() {
  const [menu, setMenu] = useState(false);
  const greet = greetingUser();
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto">
      <header className="z-40 top-0 py-4 bg-green-700">
        <div className=" flex items-center justify-between h-8 px-6 mx-auto">
          <div ref={menuRef}>
            <button
              className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {!menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            {menu && (
              <aside className="absolute inset-y-0 z-20 left-0 top-0 flex-shrink-0 w-64 pt-4 overflow-y-auto bg-green-700 md:hidden">
                <div>
                  <button
                    onClick={() => setMenu(!menu)}
                    className="px-6 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="text-white">
                    <div className="flex p-2  bg-inherit">
                      <div className="flex py-3 px-2 items-center">
                        <p className="text-2xl text-orange-600 font-semibold">
                          Cuisine
                        </p>
                        <Link
                          to={route.dashboard}
                          className="ml-2 font-semibold italic"
                        >
                          DASHBOARD
                        </Link>
                      </div>
                    </div>
                    <div>
                      <ul className="mt-6 leading-10">
                        {MenuLink.map((m, i) => (
                          <SideLinks
                            key={i}
                            title={m.title}
                            link={m.link}
                            childrens={MenuSVG[i]}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>

          <div className="flex justify-center  mt-2 mr-4">
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <input
                type="search"
                placeholder="Search"
                className="form-input px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 -mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="text-[10px] sm:text-[16px] ml-auto text-white">
              {greet}
            </li>
            <HeaderButton
              childrens={
                <div className="flex items-cemter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <div className=" absolute left-6 top-0">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-[9.5px] text-xs text-white">
                      13
                    </p>
                  </div>
                </div>
              }
              popupContent={
                <>
                  <li className="flex">
                    <Link
                      className="text-white inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      to="#"
                    >
                      <span>Messages</span>
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full ">
                        13
                      </span>
                    </Link>
                  </li>
                </>
              }
            />
            <HeaderButton
              childrens={
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              }
              popupContent={
                <>
                  <li className="flex">
                    <Link
                      className=" text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      to={route.profile}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <button
                      className="text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      onClick={() =>
                        dispatch(logOut())
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Log out</span>
                    </button>
                  </li>
                </>
              }
            />
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
