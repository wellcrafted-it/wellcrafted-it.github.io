import React from "react";
import { Footer } from "flowbite-react";

const FooterComponent: React.FC = () => {
  return (
    <Footer container>
      <Footer.Copyright by="WellCrafted IT" href="#" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Terms and Conditions</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterComponent;
