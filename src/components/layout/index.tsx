import type { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import LenguajeManager from "../lenguajeManager";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-sans">
      <LenguajeManager />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
