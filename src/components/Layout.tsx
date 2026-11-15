import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";

/** New page → top, unless the link points at a section (e.g. /profit-first#alloc-tool). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
