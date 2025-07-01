import heroImg from "../../assets/hero.png";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen lg:grid lg:grid-cols-2 lg:content-center">
      <div className="float-left min-h-screen px-4 py-8 text-center lg:py-56">
        <div className="mb-0 text-lg leading-none font-normal tracking-tight text-gray-900 md:text-xl dark:lg:text-white">
          Hi👋,
        </div>
        <div className="mb-0 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          I'm Stein
        </div>
        <p className="mb-8 text-lg font-normal text-gray-500 md:text-xl dark:text-gray-400">
          A passionate engineer & hands-on technical leader
        </p>
      </div>
      <div
        className="bg-mobile h-screen w-full bg-gray-100 bg-cover bg-no-repeat lg:bg-bottom-left dark:bg-transparent"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
    </div>
  );
};

export default Hero;
