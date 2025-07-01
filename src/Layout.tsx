import { ThemeProvider } from "flowbite-react";
import customTheme from "./theme/custom-theme.ts";
import Header from "./components/UI/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import ServicesComponent from "./components/Services/ServicesComponent.tsx";
import SkillsComponent from "./components/Skills/SkillsComponent.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Contact from "./components/Contact/Contact.tsx";
import FooterComponent from "./components/UI/FooterComponent.tsx";

export default function Layout() {
  return (
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
}
