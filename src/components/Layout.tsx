import * as React from "react";
import Marquee from "./Marquee";
import RmheLogo from "./assets/RmheLogo";
import Footer from "./Footer";
import { Button } from "./ui/button";

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const [showMarquee, setShowMarquee] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarquee(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark min-h-screen bg-background">
      <div
        className={`transition-all duration-1000 ease-in-out ${showMarquee ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Marquee />
      </div>
      <nav
        className={`container py-4 border-b border-border transition-all duration-1000 ease-in-out ${
          showMarquee ? "translate-y-0" : "-translate-y-16"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <RmheLogo width={100} />
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (555) 123-4567
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
