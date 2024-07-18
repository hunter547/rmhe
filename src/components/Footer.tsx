import React from "react";
import { Link } from "gatsby";
import RmheLogoShortened from "./assets/RmheLogoShortened";

function Footer() {
  return (
    <footer className="w-full text-gray-400 items-center bg-primary bg-opacity-10 px-4 py-2">
      <RmheLogoShortened width={150} />
      <p className="mt-2">
        Made with ❤ by{" "}
        <Link to="https://evanoff.dev" target="_blank">
          Hunter
        </Link>
        . Icons by{" "}
        <Link to="https://icons8.com/" target="_blank">
          Icons8
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
