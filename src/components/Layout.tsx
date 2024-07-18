import * as React from "react";
import Marquee from "./Marquee";
import RmheLogo from "./assets/RmheLogo";
import Footer from "./Footer";

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <Marquee />
      <nav>
        <RmheLogo width={100} />
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
