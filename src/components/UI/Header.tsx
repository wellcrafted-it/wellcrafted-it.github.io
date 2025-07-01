import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  useThemeMode,
} from "flowbite-react";
import { track } from "insights-js";

const Header: React.FC = () => {
  const themeMode = useThemeMode();
  const logo =
    (themeMode.computedMode as string) === "light" ? logoLight : logoDark;

  const handleNavbarClick = (page: string) => {
    track({
      id: page,
    });
  };

  return (
    <header>
      <Navbar fluid rounded>
        <NavbarBrand href="https://wellcrafted.it">
          <img
            alt="WellCrafted IT logo"
            className="mr-3 h-6 sm:h-9"
            src={logo}
          />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink
            href="#about-me"
            onClick={() => {
              handleNavbarClick("about-me");
            }}
          >
            About me
          </NavbarLink>
          <NavbarLink
            href="#services"
            onClick={() => {
              handleNavbarClick("services");
            }}
          >
            Services
          </NavbarLink>
          <NavbarLink
            href="#skills"
            onClick={() => {
              handleNavbarClick("skills");
            }}
          >
            Skills
          </NavbarLink>
          <NavbarLink
            href="#experience"
            onClick={() => {
              handleNavbarClick("experience");
            }}
          >
            Experience
          </NavbarLink>
          <NavbarLink
            href="#contact"
            onClick={() => {
              handleNavbarClick("contact");
            }}
          >
            Contact
          </NavbarLink>
        </NavbarCollapse>
        {/*<DarkThemeToggle className="hidden md:block" />*/}
      </Navbar>
    </header>
  );
};

export default Header;
