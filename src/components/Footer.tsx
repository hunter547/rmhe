import React from "react";
import { Link } from "gatsby";
import RmheLogoShortened from "./assets/RmheLogoShortened";

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-4">
            <RmheLogoShortened width={150} />
            <p className="text-sm text-muted-foreground">
              Transforming homes with modern design and expert craftsmanship
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-muted-foreground">
              Made with <span className="text-primary">❤</span> by{" "}
              <Link
                to="https://evanoff.dev"
                target="_blank"
                className="text-primary hover:text-primary/90"
              >
                Hunter
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              Icons by{" "}
              <Link
                to="https://icons8.com/"
                target="_blank"
                className="text-primary hover:text-primary/90"
              >
                Icons8
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
