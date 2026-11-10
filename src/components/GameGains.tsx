import { BadgePercent, BarChart3, BookOpen, Users } from "lucide-react";

const GAINS = [
  {
    label: "חשיבה אסטרטגית",
    text: "קבלת החלטות עסקיות בתנאי אי-ודאות",
    Icon: ChessIcon,
  },
  {
    label: "הבנה פיננסית",
    text: 'קריאת דו"חות כספיים, תקצוב ותמחור',
    Icon: BadgePercent,
  },
  {
    label: "ניתוח נתונים",
    text: "מניתוח שוק למסקנות ולהחלטות עסקיות",
    Icon: BarChart3,
  },
  {
    label: "עבודת צוות",
    text: "מנהיגות, הובלת צוותי הנהלה ושיתופי פעולה",
    Icon: Users,
  },
  {
    label: "אנגלית עסקית",
    text: "כלים ומונחים מקצועיים בסביבה בינלאומית",
    Icon: BookOpen,
  },
];

function ChessIcon({
  className,
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 21h8" />
      <path d="M5 21v-8h5v8" />
      <path d="M5 13h5" />
      <path d="M5.5 13V9h4v4" />
      <path d="M5.5 9V7h1v1.2h1.3V7h1.2v1.2H10V7h1v2" />
      <path d="M13.5 21h7" />
      <path d="M15 21v-5.2s.2-2 1.6-3.6c1.1-1.3 1.6-2.2 1.6-3.4 0-1.3-.9-2.2-2.2-2.2-1.5 0-2.4 1-2.8 2.4" />
      <path d="M14.4 12.4h4.6" />
      <path d="M17.4 6.6c.2-.7.7-1.2 1.4-1.4" />
    </svg>
  );
}

export default function GameGains() {
  return (
    <div className="game-gains">
      <div className="game-gains__head">
        <h2>מה מרוויחים המשתתפים?</h2>
        <p>כלים לחיים - מיומנויות שנשארות</p>
      </div>
      <ul className="game-gains__items">
        {GAINS.map((item) => (
          <li key={item.label}>
            <item.Icon className="game-gains__icon" strokeWidth={1.5} />
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
