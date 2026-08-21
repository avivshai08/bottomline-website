import {
  BadgePercent,
  BarChart3,
  BookOpen,
  Users,
} from "lucide-react";
import CtaDrawing from "../components/CtaDrawing";
import Faq from "../components/Faq";
import { IMAGES } from "../content";

const FAQ = [
  {
    q: "למי מיועדת התוכנית?",
    a: "התוכנית מתאימה לתלמידי תיכון, למסגרות העשרה ולחברות וארגונים המעוניינים לפתח יכולות עסקיות וניהוליות. בחברות ניתן להתאים את התוכנית במיוחד לצוותי הנהלה ומנהלים שאינם מגיעים מרקע פיננסי.",
  },
  {
    q: "האם נדרש ידע קודם במנהל עסקים או בפיננסים?",
    a: "לא נדרש ידע או ניסיון קודם. התוכנית בנויה כך שהמשתתפים רוכשים את הידע והמושגים העסקיים בהדרגה, תוך כדי ההתנסות בסימולציה. לכן היא מתאימה גם למשתתפים ללא רקע קודם במנהל עסקים או בפיננסים.",
  },
  {
    q: "כמה זמן נמשכת התוכנית?",
    a: "המתכונת המרכזית של התוכנית נמשכת 8 שבועות וכוללת 8 מפגשי למידה ו-8 הרצות של הסימולציה העסקית. ניתן להתאים את היקף התוכנית והמבנה שלה בהתאם לקהל היעד ולמטרות הפעילות.",
  },
  {
    q: "מהי סימולציית \"משחק העסקים\"?",
    a: "הסימולציה MikesBikes מבית חברת Smartsims האוסטרלית, מאפשרת למשתתפים לנהל חברה וירטואלית בסביבה עסקית תחרותית. המשתתפים מקבלים החלטות עסקיות, רואים את תוצאותיהן ומשווים את ביצועי החברה שלהם לאלה של הקבוצות המתחרות.",
  },
  {
    q: "מה לומדים במהלך התוכנית?",
    a: "המשתתפים נחשפים למגוון תחומים מרכזיים במנהל עסקים, בהם שיווק, תמחור, ניתוח שוק ותחרות, ניהול תקציב, תפעול וייצור, חומרי גלם ומלאי, השקעות לטווח ארוך, אסטרטגיה וקבלת החלטות.",
  },
  {
    q: "האם התוכנית מתאימה גם למנהלים ללא רקע פיננסי?",
    a: "כן. עבור צוותי הנהלה ניתן לשים דגש על הבנת הקשר בין ההחלטות העסקיות השונות לבין התוצאות הפיננסיות של החברה. המטרה היא להעניק למנהלים שאינם אנשי כספים הבנה וכלים שיאפשרו להם לקבל החלטות עסקיות טובות יותר ולנהל שיח אפקטיבי יותר עם אנשי הכספים בארגון.",
  },
  {
    q: "מה הופך את התוכנית לחווייתית?",
    a: "המשתתפים אינם רק לומדים על ניהול עסק – הם מנהלים אותו. העבודה בקבוצות, התחרות בין החברות, קבלת ההחלטות והמשוב על תוצאותיהן יוצרים סביבת למידה פעילה, מאתגרת ומעוררת עניין.",
  },
  {
    q: "אילו מיומנויות המשתתפים מפתחים?",
    a: "התוכנית מפתחת חשיבה אסטרטגית ומערכתית, קבלת החלטות, ניתוח מידע ונתונים, פתרון בעיות, עבודת צוות, יוזמה והתמודדות עם תנאי אי-ודאות ותחרות.",
  },
  {
    q: "האם המשתתפים עובדים בקבוצות?",
    a: "כן. המשתתפים פועלים כצוות הנהלה של החברה, מחלקים ביניהם אחריות, מנתחים מידע ומקבלים יחד החלטות עסקיות. העבודה הקבוצתית היא חלק מרכזי מהחוויה ומהלמידה.",
  },
  {
    q: "האם ניתן לקיים את התוכנית במסגרת יום שיא או אירוע חד-פעמי?",
    a: "כן. ניתן להתאים את \"משחק העסקים\" למתכונת של יום שיא, פעילות העשרה, כנס או אירוע ארגוני. במתכונת זו ניתן לשלב היכרות קצרה עם עולם העסקים, למידה ממוקדת והרצה של הסימולציה, תוך יצירת חוויה תחרותית ואינטראקטיבית סביב נושא עסקי מוגדר.",
  },
  {
    q: "האם ניתן להתאים את התוכנית לקהל היעד?",
    a: "כן. ניתן להתאים את התכנים, רמת העומק, משך הפעילות והדגשים בהתאם לגיל המשתתפים, למטרות בית הספר או הארגון ולרמת הידע הקיימת. ניתן לקיים תוכנית מלאה לאורך מספר שבועות או פעילות קצרה במסגרת אירוע או יום שיא.",
  },
  {
    q: "מה הערך של הסימולציה בהשוואה ללימוד רגיל בכיתה או בהרצאה?",
    a: "הסימולציה מאפשרת למשתתפים לחוות את הקשר בין החלטות שונות ואת ההשפעה שלהן על העסק. במקום ללמוד מושגים בנפרד, המשתתפים רואים כיצד שיווק, תמחור, ייצור, מלאי, השקעות וכספים משפיעים זה על זה ועל התוצאה העסקית הכוללת.",
  },
];

const SIM_POINTS = [
  {
    label: "סימולציה עסקית",
    text: "המשתתפים מנהלים חברה וירטואלית באמצעות פלטפורמת Mike's Bikes של חברת Smartsims",
  },
  {
    label: "החלטות אמיתיות, תוצאות אמיתיות",
    text: "שיווק, תמחור, השקעות, יצור וניהול מלאי. תוצאות בזמן אמת, בסביבה תחרותית ודינמית",
  },
  {
    label: "שפה עסקית גלובלית",
    text: "המערכת פועלת באנגלית ומאפשרת היכרות עם מונחים מקצועיים שמשמשים חברות בכל העולם",
  },
];

const AUDIENCE = [
  {
    src: IMAGES.audienceCorporate,
    title: "חברות וארגונים",
    text: "הכשרה ופיתוח צוותים, שיפור שיתוף פעולה וקבלת החלטות",
  },
  {
    src: IMAGES.audienceStudents,
    title: "סטודנטים",
    text: "חיבור פרקטי לעולם העסקי ופיתוח חשיבה יזמית",
  },
  {
    src: IMAGES.audienceSchool,
    title: "בתי ספר",
    text: "חינוך פיננסי חוויתי לבני נוער",
  },
  {
    src: IMAGES.audienceEnrichment,
    title: "תכניות העשרה",
    text: "סדנאות ותכניות ייחודיות לנוער ומבוגרים",
  },
];

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

export default function BusinessGame() {
  return (
    <>
      <div className="drawing-stack">
        <section className="home-drawing-section">
          <div className="container">
            <div className="game-intro">
              <div className="game-intro__copy">
                <h1>ללמוד. להתנסות. להצליח.</h1>
                <p className="game-intro__kicker">
                  הפיננסים הופכים ברורים כשחווים אותם
                </p>
                <p className="game-intro__lede">
                  סימולציית "משחקים עסקיים" מחברת בין תאוריה למציאות ומפתחת
                  חשיבה עסקית, קבלת החלטות ועבודת צוות.
                </p>
              </div>
              <div className="game-intro__art">
                <img src={IMAGES.gameHero} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="game-about">
              <h2 className="game-about__title">על התוכנית</h2>
              <div className="game-about__body">
                <img
                  className="game-about__bg"
                  src={IMAGES.mikesBikes}
                  alt=""
                />
                <div className="game-about__copy">
                  <p>
                    תכנית <strong>משחקים עסקיים</strong> מזמינה אתכם לזירה
                    האמיתית: סימולציה עסקית מתקדמת שבה אתם אלו שמקבלים את
                    ההחלטות! הצוות שלכם ינהל חברת אופני הרים בשוק תחרותי שמשתנה
                    בכל רגע.
                  </p>
                  <p className="game-about__qs">
                    האם תבחרו באסטרטגיית שיווק אגרסיבית?
                    <br />
                    תתמחרו נמוך כדי לכבוש את השוק?
                    <br />
                    או שתשקיעו בפיתוח טכנולוגי שישאיר את כולם מאחור?
                  </p>
                  <p>
                    כאן, כל החלטה שלכם קובעת אם תסיימו ברווח או בהפסד, תובילו את
                    השוק או תישארו מאחור והכל בסביבה מהנה, מלמדת, תחרותית ומלאת
                    אדרנלין. דרך המשחק נלמד איך עובדים עסקים, נפתח חשיבה עסקית,
                    עבודת צוות, מנהיגות וקבלת החלטות בתנאי אי ודאות.
                  </p>
                </div>
              </div>
              <p className="game-about__bar">
                התוכנית מאושרת על ידי משרד החינוך וכלולה במאגר גפן | מספר תוכנית:
                59528
              </p>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="game-sims">
              <div className="game-sims__head">
                <h2>מהם סימולציות עסקיות?</h2>
                <p>
                  למידה חווייתית דרך התנסות, משחק ותחרות בסביבה שמדמה את המציאות
                  העסקית
                </p>
              </div>
              <ul className="game-sims__cards">
                {SIM_POINTS.map((item) => (
                  <li key={item.label}>
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="game-structure">
              <div className="game-structure__head">
                <h2>מבנה התוכנית</h2>
                <p>8 מפגשים של למידה מעשית</p>
              </div>
              <div className="game-format">
                <div className="game-format__slot game-format__slot--top">
                  <h3>מפגשי למידה</h3>
                  <p>
                    אסטרטגיה, שיווק, פיננסים
                    <br />
                    תמחור, תפעול
                  </p>
                  <FormatTeacherIcon />
                </div>
                <div className="game-format__slot game-format__slot--end">
                  <div>
                    <h3>עבודת צוות</h3>
                    <p>
                      ניתוח שוק
                      <br />
                      ניתוח מתחרים
                      <br />
                      קבלת החלטות
                    </p>
                  </div>
                  <FormatTeamIcon />
                </div>
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
                <div className="game-format__slot game-format__slot--start">
                  <FormatReviewIcon />
                  <div>
                    <h3>ניתוח ומשוב</h3>
                    <p>
                      בחינת התוצאות
                      <br />
                      הסקת מסקנות
                    </p>
                  </div>
                </div>
                <div className="game-format__slot game-format__slot--bottom">
                  <FormatPlayIcon />
                  <h3>הרצת סימולציה</h3>
                  <p>
                    הזנת החלטות במערכת
                    <br />
                    המערכת משקללת את כל ההחלטות
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="game-gains">
              <div className="game-gains__head">
                <h2>מה מרוויחים המשתתפים?</h2>
                <p>כלים לחיים - מיומנויות שנשארות</p>
              </div>
              <ul className="game-gains__items">
                {GAINS.map((item) => (
                  <li key={item.label}>
                    <item.Icon
                      className="game-gains__icon"
                      strokeWidth={1.5}
                    />
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="game-audience">
              <h2 className="game-audience__title">למי זה מתאים?</h2>
              <ul className="game-audience__cards">
                {AUDIENCE.map((item) => (
                  <li key={item.title}>
                    <img src={item.src} alt="" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <blockquote className="game-audience__quote">
                <p>
                  המשחק הפך מושגים פיננסיים מורכבים לברורים, מעניינים והכי חשוב,
                  רלוונטיים
                </p>
                <footer>מנהל תשתיות, אינטל</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="home-cta-banner">
          <div className="container">
            <CtaDrawing
              src={IMAGES.ctaBanner}
              alt="מוכנים להתחיל לשחק? קבעו שיחת היכרות"
              heading="מוכנים להתחיל לשחק?"
              lede="שיחה קצרה תעזור לנו להבין מה נכון לקבוצה שלכם"
            />
          </div>
        </section>

        <Faq items={FAQ} />
      </div>
    </>
  );
}
