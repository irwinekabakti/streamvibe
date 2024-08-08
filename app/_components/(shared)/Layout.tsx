import React, { FC } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
