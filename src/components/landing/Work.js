import React from "react";
import TitleComponent from "../ui/TitleComponent";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="text-white pb-5 md:pb-8">
      <TitleComponent title="My Work" />

      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm lg:flex-1 overflow-hidden m-4 transform hover:scale-105 transition duration-300">
          <div className="font-semibold text-xl md:text-3xl hover:cursor-pointer ">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-customGray py-2 px-5">
            <h3 className="font-semibold">Passionate about UI/UX.</h3>
            <a
              href=""
              className="text-white cursor-pointer hover:text-blue-500 text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="max-w-sm lg:flex-1 overflow-hidden m-4 transform hover:scale-105 transition duration-300">
          <div className="font-semibold text-xl md:text-3xl hover:cursor-pointer ">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-customGray py-2 px-5">
            <h3 className="font-semibold">Passionate about UI/UX.</h3>
            <a
              href=""
              className="text-white cursor-pointer hover:text-blue-500 text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="max-w-sm lg:flex-1 overflow-hidden m-4 transform hover:scale-105 transition duration-300">
          <div className="font-semibold text-xl md:text-3xl hover:cursor-pointer ">
            <img
              src="https://via.placeholder.com/300"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-customGray py-2 px-5">
            <h3 className="font-semibold">Passionate about UI/UX.</h3>
            <a
              href=""
              className="text-white cursor-pointer hover:text-blue-500 text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
