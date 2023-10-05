import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex items-center flex-col justify-center md:flex-row md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
        © 2030{" "}
        <Link to="/" className="hover:underline">
          CinemaLover™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 mt-3 md:mt-0">
        <li>
          <a href="#" target="_blank" className="mr-4 hover:underline md:mr-6">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="mr-4 hover:underline md:mr-6">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="mr-4 hover:underline md:mr-6">
            Github
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};
