import React from "react";
import "./App.css";
import Header from "./components/UI/Header";
import { Flowbite } from "flowbite-react";
import customTheme from "./theme/custom-theme";
import FooterComponent from "./components/UI/FooterComponent";
import ServicesComponent from "./components/Services/ServicesComponent";
import SkillsComponent from "./components/Skills/SkillsComponent";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

const App = () => (
  <Flowbite theme={{ theme: customTheme, mode: "auto" }}>
    <Header />
    <Hero />
    <section>
      <AboutMe />
    </section>
    <section>
      <ServicesComponent />
    </section>
    <section>
      <SkillsComponent />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Contact />
    </section>
    <FooterComponent />
  </Flowbite>
);

export default App;
