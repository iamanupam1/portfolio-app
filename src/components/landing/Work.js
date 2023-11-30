import React from "react";
import TitleComponent from "../ui/TitleComponent";

const Work = () => {
  return (
    <div id="work" className="text-white pb-5 md:pb-8">
      <TitleComponent title="My Work" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-gray-100 p-4 rounded-md">{/* Content */}</div>

        {/* Card 2 */}
        <div className="bg-gray-200 p-6 rounded-lg">{/* Content */}</div>

        {/* Card 3 */}
        <div className="bg-gray-300 p-8 rounded-xl">{/* Content */}</div>

        {/* Card 4 */}
        <div className="bg-gray-400 p-10 rounded-2xl">{/* Content */}</div>

        {/* Add more cards with different classes as needed */}
      </div>
    </div>
  );
};

export default Work;
