function FormatTeacherIcon() {
  return (
    <svg
      className="game-format__icon"
      viewBox="0 0 96 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="28" y="4" width="46" height="28" rx="2" />
      <path d="M46 32v8" />
      <path d="M38 44h16" />
      <circle cx="22" cy="28" r="5" />
      <path d="M22 33v12" />
      <path d="M22 36l10-6" />
      <path d="M18 45l4-12 4 12" />
      <circle cx="12" cy="52" r="3.2" />
      <path d="M7 66v-8a5 5 0 0 1 10 0v8" />
      <circle cx="28" cy="54" r="3.2" />
      <path d="M23 68v-8a5 5 0 0 1 10 0v8" />
      <circle cx="44" cy="52" r="3.2" />
      <path d="M39 66v-8a5 5 0 0 1 10 0v8" />
    </svg>
  );
}

function FormatTeamIcon() {
  return (
    <svg
      className="game-format__icon"
      viewBox="0 0 72 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="36" cy="16" r="8" />
      <path d="M22 48v-6a14 14 0 0 1 28 0v6" />
      <circle cx="14" cy="20" r="6" />
      <path d="M2 48v-5a11 11 0 0 1 16.5-9.5" />
      <circle cx="58" cy="20" r="6" />
      <path d="M70 48v-5a11 11 0 0 0-16.5-9.5" />
    </svg>
  );
}

function FormatPlayIcon() {
  return (
    <svg
      className="game-format__icon game-format__icon--play"
      viewBox="0 0 64 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12,6 56,28 12,50" />
    </svg>
  );
}

function FormatReviewIcon() {
  return (
    <svg
      className="game-format__icon"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="26" cy="26" r="16" />
      <path d="m38 38 14 14" />
      <path d="M14 28h6l3-7 4 12 3-6h6" />
    </svg>
  );
}

export default function GameFormatChart() {
  return (
    <div className="game-format">
      <div className="game-format__slot game-format__slot--top">
        <h3>מפגשי למידה</h3>
        <p>
          בניית בסיס ידע <br className="game-format__br game-format__br--mob" />בעולמות <br className="game-format__br game-format__br--desk" />השיווק, <br className="game-format__br game-format__br--mob" />הכלכלה והניהול פיננסי
        </p>
        <FormatTeacherIcon />
      </div>
      <div className="game-format__slot game-format__slot--end">
        <div>
          <h3>עבודת צוות</h3>
          <p>
            חלוקת תפקידים, <br className="game-format__br game-format__br--mob" />קביעת אסטרטגיה, <br className="game-format__br game-format__br--desk" />ניתוח שוק <br className="game-format__br game-format__br--mob" />ומתחרים וקבלת החלטות קבוצתית
          </p>
        </div>
        <FormatTeamIcon />
      </div>
      <svg
        className="game-format__arrow game-format__arrow--n"
        viewBox="0 0 52 30"
        aria-hidden="true"
      >
        <polygon points="4,3 48,15 4,27" fill="currentColor" />
      </svg>
      <svg
        className="game-format__arrow game-format__arrow--e"
        viewBox="0 0 52 30"
        aria-hidden="true"
      >
        <polygon points="4,3 48,15 4,27" fill="currentColor" />
      </svg>
      <div className="game-format__cycle" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <g
            fill="none"
            stroke="#6EC8C8"
            strokeWidth="5"
            strokeLinecap="round"
          >
            <path d="M 48.4 72.8 A 62 62 0 0 1 138.1 47.4" />
            <path d="M 154.8 70.6 A 62 62 0 0 1 133.1 154.6" />
            <path d="M 97.4 162.0 A 62 62 0 0 1 38.0 100.0" />
          </g>
          <g fill="#6EC8C8">
            <polygon points="148.8,50.6 131.6,52.2 140.6,36.4" />
            <polygon points="122.2,160.8 130.2,146.2 139.4,159.0" />
            <polygon points="38.0,86.0 47.0,100.4 29.0,100.4" />
          </g>
        </svg>
      </div>
      <svg
        className="game-format__arrow game-format__arrow--w"
        viewBox="0 0 52 30"
        aria-hidden="true"
      >
        <polygon points="4,3 48,15 4,27" fill="currentColor" />
      </svg>
      <svg
        className="game-format__arrow game-format__arrow--s"
        viewBox="0 0 52 30"
        aria-hidden="true"
      >
        <polygon points="4,3 48,15 4,27" fill="currentColor" />
      </svg>
      <div className="game-format__slot game-format__slot--start">
        <FormatReviewIcon />
        <div>
          <h3>ניתוח ומשוב</h3>
          <p>
            השוואת ביצועים <br className="game-format__br game-format__br--mob" />לקבוצות מתחרות,<br />לקחים ותובנות לאורך הדרך
          </p>
        </div>
      </div>
      <div className="game-format__slot game-format__slot--bottom">
        <FormatPlayIcon />
        <h3>הרצת סימולציה</h3>
        <p>
          ניהול חברה וירטואלית <br className="game-format__br game-format__br--mob" />בזמן אמת מול <br className="game-format__br game-format__br--desk" />צוותים מתחרים <br className="game-format__br game-format__br--mob" />והזנת החלטות במערכת
        </p>
      </div>
    </div>
  );
}
