import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";

function Navbar() {
  return (
    <nav className=" bg-slate-200 w-60 h-screen  pl-6">
      <div>
        <h1 className=" text-3xl font-bold font-serif text-[#32375C] mt-6">
          WeChat
        </h1>
      </div>
      <div>
        <ul className=" text-lg mt-8 font-semibold flex flex-col gap-3 ">
          <li>
            <Link
              className=" flex gap-2 items-center px-3 py-3 pr-8 rounded-lg	 bg-[#32375C] w-fit text-white "
              to="/"
            >
              <IoHomeOutline />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/chat" className=" flex gap-2 items-center px-3 ">
              <CiChat1 />
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <Link to="/group" className=" flex gap-2 items-center px-3">
              <MdGroups />
              <span>Group</span>
            </Link>
          </li>
          <li>
            <Link to="/friend" className=" flex gap-2 items-center px-3">
              <FaUserFriends />
              <span>Friends</span>
            </Link>
          </li>
          <li>
            <Link to="/people" className=" flex gap-2 items-center px-3">
              <IoMdPeople />
              <span>People</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
