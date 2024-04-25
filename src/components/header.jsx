import * as React from "react";

export default function Header() {
  return (
    <header className="flex relative gap-5 justify-between items-center px-20 py-3 max-w-full text-xl text-center bg-white rounded-xl shadow-sm text-blue-950 w-[498px] max-md:flex-wrap max-md:px-5">
      <div className="justify-center self-stretch px-6 py-3.5 text-white whitespace-nowrap bg-pink-600 rounded max-md:pl-5">
        Home
      </div>
      <div className="self-stretch my-auto">About Us</div>
      <div className="self-stretch my-auto">Players</div>
    </header>
  );
}