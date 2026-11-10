import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="home-drawing-section">
      <div className="container">
        <div className="contact-hero not-found">
          <h1>העמוד לא נמצא</h1>
          <p className="lede">
            העמוד שחיפשתם לא קיים, או שהכתובת השתנתה.
          </p>
          <p>
            <Link to="/" className="not-found__home">
              חזרה לדף הבית
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
