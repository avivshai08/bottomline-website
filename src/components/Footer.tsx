import { Link } from "react-router-dom";
import { NAV } from "../content";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Link to="/" className="brand brand--on-dark" aria-label="Bottom line">
          <Brand />
        </Link>
        <nav className="footer-nav" aria-label="ניווט תחתון">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="footer-mail" href="mailto:aviv@bottomline.finance">
          aviv@bottomline.finance
        </a>
      </div>
      <div className="container footer-copy">
        © {new Date().getFullYear()} Bottom line. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
