import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterComponent: React.FC = () => {
  return (
    <Footer container>
      <FooterCopyright by="WellCrafted IT B.V." href="#" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms and Conditions</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default FooterComponent;
