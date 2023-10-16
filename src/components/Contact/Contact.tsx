import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
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
        <div className="mx-2 mx-auto max-w-3xl lg:grid lg:grid-cols-2 lg:p-0">
          <div className="px-6 lg:p-0">
            <p className="font-bold dark:text-gray-400">WellCrafted IT</p>
            <p>&nbsp;</p>
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
                +31 (0)6 39 110 574§
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
          <div className="p-6 lg:p-0">
            <form
              className="flex max-w-md flex-col gap-4"
              action="https://formie.io/form/a9247d79-e13d-403c-8f43-6b0b267df973"
              method="POST"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput
                  id="name"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="john@doe.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="subject" value="Subject" />
                </div>
                <TextInput id="subject" placeholder="Hi!" type="text" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Subject" />
                </div>
                <Textarea id="message" placeholder="..." required />
              </div>
              <Button color="blue" type="submit">
                <svg
                  className="mr-2 h-3 w-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
                Send!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
