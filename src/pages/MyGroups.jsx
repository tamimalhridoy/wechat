import React from "react";
import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Parson from "./Parson";

function MyGroups() {
  return (
    <div className=" w-1/3 p-4 rounded-lg bg-white mt-4">
      <div className=" flex justify-between ">
        <h2 className="title font-semibold text-2xl">My Groups</h2>
        <button>
          <IoMdMore />
        </button>
      </div>
      <div className=" flex w-full items-center py-2 px-3 gap-3 text-slate-600 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500  transition ease-in-out duration-150 mt-4">
        <FaSearch />
        <input className=" w-full h-8 pl-3" type="text " placeholder="Search" />
      </div>
      <div className=" flex flex-col gap-3 mt-4">
      <Parson/>
      <Parson/>
      <Parson/>
      <Parson/>
      <Parson/>
      <Parson/>
      </div>
    </div>
  );
}

export default MyGroups;
