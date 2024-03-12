import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";

function Navbar() {
  return (
    <nav className=" bg-slate-400 w-60 h-screen">
      <div>
        <h1 className=" text-3xl font-bold font-serif text-[#32375C]">
          WeChat
        </h1>
      </div>
      <div>
        <ul className=" text-lg font-semibold">
          <li>
            <Link className=" flex gap-2 items-center" to="/">
              <IoHomeOutline />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/chat" className=" flex gap-2 items-center">
              <CiChat1 />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/">Group</Link>
          </li>
          <li>
            <Link to="/">Friends</Link>
          </li>
          <li>
            <Link to="/">People</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
