import React from "react";
import H2 from "../UI/H2";

const Contact = () => {
  return (
    <>
      <div className="container m-4 mx-auto px-6 text-left lg:p-0">
        <H2 id="contact">Contact</H2>
        <div className="mx-2 mb-6">
          <p className="dark:text-gray-400">
            Interested in my profile & skills? Please send me a message. You can
            use either my mail address, fill in the form below or connect with
            me on&nbsp;
            <a
              className="text-blue-500 visited:text-purple-600"
              href="https://linkedin.com/in/steinwelberg"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="mx-2 mb-6">
          <div className="px-6 lg:p-0">
            <p>
              <a
                className="text-blue-500 visited:text-purple-600"
                href="mailto:stein@wellcrafted.it?subject=Let's chat"
              >
                stein@wellcrafted.it
              </a>
              <br />
              <a
                className="text-blue-500 visited:text-purple-600"
                href="tel:0031639110574"
              >
                +31 (0)6 39 110 574
              </a>
            </p>
            <p>&nbsp;</p>
            <table className="text-black dark:text-gray-400">
              <tbody>
                <tr>
                  <th>IBAN:</th>
                  <td>NL21 BUNQ 2098 6384 34</td>
                </tr>
                <tr>
                  <th>BIC:</th>
                  <td>BUNQNL2A</td>
                </tr>
                <tr>
                  <th>BTW:</th>
                  <td>NL003922084B05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
