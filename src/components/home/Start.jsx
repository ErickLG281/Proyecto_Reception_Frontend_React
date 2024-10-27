import React from "react";
import { Link } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";

function Start() {
  return (
    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:gap-x-8 lg:px-8 relative bg-[#191A1C] pb-24">
      <div className="container mx-auto">
        <div className="-mx-4  grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="w-full px-4 lg:w-6/12 space-y-16 ">
            <h1 className="mb-5 text-5xl font-bold leading-[1.208] text-[#dadada]">
              Find the reception you need for your event
            </h1>
            <ul className="flex flex-wrap items-center space-x-8">
              <li>
                <Link 
                to="/reception"
                className="inline-flex items-center rounded-md bg-[#e69e00] px-6 py-3 text-base font-bold text-black hover:bg-[#ffb20c] transition duration-300 ease-in-out">
                  Get Started
                  <CgChevronRight className="text-3xl" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-4">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://i.postimg.cc/nVkCGTS6/reception.jpg"
                  alt="home"
                  className="max-w-full lg:ml-auto rounded-l-3xl rounded-bl-lg rounded-br-md rounded-tr-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
