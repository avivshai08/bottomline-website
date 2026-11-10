import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Brand from "./Brand";
import Seo from "./Seo";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function LandingLayout() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <header className="site-header landing-header">
        <div className="site-header__inner">
          <span className="brand" aria-label="Bottom line">
            <Brand />
          </span>
          <a className="cta-btn" href="#register">
            <span className="cta-btn__arrow" aria-hidden="true" />
            להרשמה
          </a>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer landing-footer">
        <div className="container landing-footer__inner">
          <p>© {new Date().getFullYear()} Bottom line. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </>
  );
}
