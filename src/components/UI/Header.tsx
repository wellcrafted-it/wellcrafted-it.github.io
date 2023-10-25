import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import React from "react";
import { DarkThemeToggle, Navbar, useThemeMode } from "flowbite-react";

const Header: React.FC = () => {
  const [mode] = useThemeMode();
  const logo = mode === "light" ? logoLight : logoDark;

  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://wellcrafted.it">
          <img
            alt="WellCrafted IT logo"
            className="mr-3 h-6 sm:h-9"
            src={logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#about-me">About me</Navbar.Link>
          <Navbar.Link href="#services">Services</Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#experience">Experience</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle className="hidden md:block" />
      </Navbar>
    </header>
  );
};

export default Header;
