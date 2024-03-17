import React from "react";
import MyGroups from "./MyGroups";
import Chat from "./Chat";

function Home() {
  return (
    <div className=" bg-slate-100 w-full pl-9">
      <MyGroups />
      <Chat />
    </div>
  );
}

export default Home;
