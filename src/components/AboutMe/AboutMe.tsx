import React from "react";
import H2 from "../UI/H2";

const AboutMe: React.FC = () => (
  <div className="container m-4 mx-auto mb-10 px-6 lg:p-0">
    <H2 id="about-me">About me</H2>
    <p className="ml-2 dark:text-gray-400">
      I'm driven by a relentless passion for technology and innovation. With
      over 15 years of experience in the tech industry, I've embarked on a
      journey that's spanned pioneering startups and dynamic scale-ups, making
      an enduring impact in every phase.
      <br />
      <br />
    </p>
    <p className="ml-2 dark:text-gray-400">
      I'm fueled by a never-ending curiosity for technology and innovation. My
      toolkit is a mix of Hands-on Technical Leadership, Domain Driven Design,
      and a bunch of programming languages. Throw in some modern frameworks and
      technologies, and you've got a tech cocktail that helps me tackle complex
      problems and craft cool solutions.
      <br />
      <br />
    </p>
  </div>
);

export default AboutMe;
