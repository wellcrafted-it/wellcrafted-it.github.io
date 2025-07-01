import "./App.css";
import Header from "./components/UI/Header";
import customTheme from "./theme/custom-theme";
import FooterComponent from "./components/UI/FooterComponent";
import ServicesComponent from "./components/Services/ServicesComponent";
import SkillsComponent from "./components/Skills/SkillsComponent";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import { ThemeProvider } from "flowbite-react";

const App = () => (
  <ThemeProvider theme={customTheme}>
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
  </ThemeProvider>
);

export default App;
