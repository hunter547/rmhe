import * as React from "react";
import Marquee from "./Marquee";
import RmheLogo from "./assets/RmheLogo";

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
    </div>
  );
};

export default Layout;
