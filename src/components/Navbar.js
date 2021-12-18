import { useRef } from "react";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const side_drawer = useRef();
  const handleClick = (e) => {
    console.log(e);
    if(side_drawer.current.classList.contains("hidden")){
      side_drawer.current.classList.remove("hidden");
    }else{
      side_drawer.current.classList.add("hidden");      
    }
  };

  const context = useContext(ThemeContext);
  return (
    <div className="background_color px-4 fixed top-0 left-0 right-0 w-screen h-20 flex items-center justify-between flex-row">
      <div className="w-screen lg:basis-2/12 flex flex-row items-center justify-between">
        <div className="logo_text text-4xl font-extrabold font-logofont">
          ARTICIANS
        </div>
        <div className="visible lg:invisible" onClick={handleClick}>
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex shadow-yellow-500 bg-yellow-200 px-4 rounded-md basis-8/12 flex-row justify-between items-center h-16">
        <nav className="text-xl font-bold text-purple-700 flex flex-row justify-between items-center w-full">
          <NavLink exact to="/" className="link_tabs">
            HOME
          </NavLink>
          <NavLink to="restaurants" className="link_tabs">
            RESTAURANTS
          </NavLink>
          <NavLink to="order" className="link_tabs">
            ORDER
          </NavLink>
          <NavLink to="reservation" className="link_tabs">
            RESERVATION
          </NavLink>
        </nav>
      </div>
      <div className="hidden lg:flex flex-row basis-2/12 justify-end items-center gap-2">
        <div className="bg-white p-3 rounded-md shadow-md shadow-yellow-400 flex flex-row basis-2/3">
          <button className="login_signup">SIGNUP</button>
          <button className="login_signup">LOGIN</button>
        </div>
        <div className=" p-2 basis-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke={context.color}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>
      </div>
      <div className="hidden rounded-lg shadow bg-white drawer drawer-end h-72 absolute top-20 right-1" ref={side_drawer}>
        <div className="flex flex-col items-center justify-center drawer-content">
          <label htmlFor="my-drawer-4" className="btn btn-primary drawer-button">
            open menu
          </label>
        </div>
        <div className="drawer-side" >
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a>Menu Item</a>
            </li>
            <li>
              <a>Menu Item</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
