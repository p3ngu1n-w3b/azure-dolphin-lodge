import { Outlet } from "react-router-dom";
import { Seo } from "../Seo";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="site-shell">
      <Seo />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
