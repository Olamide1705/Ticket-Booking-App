import React, { useState } from "react";
import logo from "../assets/logo.png";
import ticz from "../assets/ticz.png";
import div from "../assets/div.png";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="p-[40px] ">
    <div className="pb-[90px] md:pb-[100px] ">
      <div className="fixed left-0 w-full z-50 md:flex justify-center items-center">
         <div className="w-full md:max-w-[900px] px-4 md:px-6 lg:px-8 bg-[rgba(5,37,44,0.95)] border border-[rgba(25,118,134,1)] py-3 rounded-[24px] backdrop-blur-[4px]">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="bg-[rgb(5,47,53)] h-9 w-10 px-2 py-1.5 border border-[rgba(14,70,79,1)] rounded-[12px] flex justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <img src={ticz} alt="ticz" />
              </div>
            </div>

            <div className="hidden md:flex flex-row items-center gap-5 text-[16px] font-serif text-center">
              <a className="text-white hover:text-gray-300" href="/">
                Events
              </a>
              <a className="text-gray-400 hover:text-white" href="*">
                My Tickets
              </a>
              <a className="text-gray-400 hover:text-white" href="*">
                About Project
              </a>
            </div>

            <div className="hidden md:block">
              <button className="w-[169px] flex items-center justify-center gap-x-1 bg-white hover:bg-[rgb(36,160,181)] text-black hover:text-white border border-[rgba(213,234,0,0.1)] h-[48px] py-2 px-4 rounded-xl text-[16px] font-serif">
                MY TICKETS
                <img src={div} alt="" />
              </button>
            </div>

            <div className="md:hidden flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="bg-[rgba(5,47,53,1)] h-9 w-10 px-2 py-1.5 border border-[rgba(14,70,79,1)] rounded-[12px] flex justify-center">
                  <img src={logo} alt="logo" />
                </div>
                <div>
                  <img src={ticz} alt="ticz" />
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-white text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className=" fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50 md:hidden
          bg-[rgba(5,47,53,1)] border-r border-[rgba(14,70,79,1)] px-4 py-6 text-white
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="text-white text-xl mb-6"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <nav className="space-y-4 text-md font-serif">
          <a
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="block hover:text-gray-300"
          >
            Events
          </a>
          <a
            href="*"
            onClick={() => setSidebarOpen(false)}
            className="block hover:text-gray-300"
          >
            My Tickets
          </a>
          <a
            href="*"
            onClick={() => setSidebarOpen(false)}
            className="block hover:text-gray-300"
          >
            About Project
          </a>
          <button
            onClick={() => setSidebarOpen(false)}
            className="mt-6 w-full bg-white hover:bg-[rgb(36,160,181)] text-black hover:text-white border border-[rgba(213,234,0,0.1)] h-[48px] rounded-xl text-[16px] font-serif"
          >
            MY TICKETS
          </button>
        </nav>
      </aside>
    </div>
    </div>
    
  );
};

export default NavBar;
