import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <nav className="bg-slate-900 h-28 ">
      <div className=" container flex justify-between items-center">
        <div className="logo">
          <h1 className=" text-[#6366f2] font-black text-5xl leading-loose">
            <Link to="/">WeChat</Link>
          </h1>
        </div>
        <ul className="flex justify-center gap-7">
          <li>
            <Link className=" text-2xl font-medium text-white">Home</Link>
          </li>
          <li>
            <Link className=" text-2xl font-medium text-white" to="/signin">
              Sign in
            </Link>
          </li>
          <li>
            <Link className=" text-2xl font-medium text-white" to="/singup">
              Sing up
            </Link>
          </li>
          <li>
            <Link className=" text-2xl font-medium text-white" to="/forgetpass">
              Forget Password
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
