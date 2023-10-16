import heroImg from "../../assets/hero.png";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen lg:grid lg:grid-cols-2 lg:content-center">
      <div className="float-left min-h-screen px-4 py-8 text-center lg:py-56">
        <div className="mb-0 text-lg font-normal leading-none tracking-tight text-gray-900 md:text-xl dark:lg:text-white">
          Hi👋,
        </div>
        <div className="mb-0 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          I'm Stein
        </div>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 md:text-xl">
          A passionate engineer & hands-on technical leader
        </p>
      </div>
      <div
        className="h-screen w-full bg-gray-100 bg-cover bg-mobile bg-no-repeat dark:bg-transparent lg:bg-left-bottom"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
    </div>
  );
};

export default Hero;
