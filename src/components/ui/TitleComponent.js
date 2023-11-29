"use client";

const TitleComponent = ({ title = "" }) => {
  return (
    <h1 className="font-bold md:text-6xl text-3xl text-center mb-5">
      {title}
      <span className="text-cyan-400 ml-1">.</span>
    </h1>
  );
};

export default TitleComponent;
