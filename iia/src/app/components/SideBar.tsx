import React from "react";
import { NavigationLinks } from "./navigation";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 bg-red-200">
      <div className="fixed flex flex-col top-0 left-0 w-72  bg-red-200 h-full shadow-lg">
        <div className="flex items-center pl-4 pr-4 h-32">
          <img
            src="https://www.indiaislandacademy.com/assets/images/logo_dark.png"
            alt=""
            className="rounded-full flex items-center justify-center mr-3"
          />
        </div>

        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-10 space-y-1">
            {NavigationLinks.map((navigation) => (
              <li key={navigation.label}>
                <Link
                  href={navigation.link}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-500 text-red-500 font-bold hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6"
                >
                  {navigation.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
