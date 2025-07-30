import type { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import LenguajeManager from "../lenguajeManager";
import WhatsappButton from "../whatsappButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-sans">
      <WhatsappButton />
      <LenguajeManager />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
