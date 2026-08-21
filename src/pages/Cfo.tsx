import {
  Banknote,
  BarChart3,
  Building2,
  Check,
  ChevronsLeft,
  LayoutGrid,
  PieChart,
  Scale,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";
import CtaDrawing from "../components/CtaDrawing";
import Faq from "../components/Faq";
import { IMAGES } from "../content";

const HELP_ITEMS = [
  {
    Icon: Target,
    title: "בהירות פיננסית",
    text: "סדר, דיוק והבנה של המספרים",
  },
  {
    Icon: LayoutGrid,
    title: "תכנון אסטרטגי",
    text: "תכנית פעולה ברורה להשגת היעדים",
  },
  {
    Icon: BarChart3,
    title: "שיפור ביצועים",
    text: "ניתוח, מדידה והחלטות מבוססות נתונים",
  },
  {
    Icon: Users,
    title: "ליווי שוטף",
    text: "שותף לדרך, חשיבה והובלה משותפת",
  },
  {
    Icon: ShieldCheck,
    title: "ניהול סיכונים",
    text: "זיהוי סיכונים והגנה על העסק שלך",
  },
];

const FAQ = [
  {
    q: "מה ההבדל בין CFO לרואה חשבון?",
    a: "רואה החשבון מתמקד בהכנת דו\"חות כספיים, בדיווחים לרשויות המס, ובציות העסק לרגולציה. לעומתו, ה-CFO מתמקד בעתיד העסק: תכנון, ניתוח, קבלת החלטות וליווי ההנהלה. שני התפקידים אינם חופפים אלא משלימים זה את זה.",
  },
  {
    q: "האם השירות מתאים גם לעסק קטן?",
    a: "בהחלט. לא גודל העסק קובע, אלא מורכבות ההחלטות שהוא נדרש לקבל. לחברות גדולות לעיתים יש משאבים רבים יותר ויכולת לגייס CFO וצוות פיננסי, כחלק ממצבת כח האדם של החברה. עסקים קטנים חותר אינם זקוקים ל-CFO במשרה מלאה והרבה יותר יעיל מבחינתם להשתמש בשירותי CFO במיקור חוץ שמעבר לערך המקצועי מאפשרים לעסק גמישות ויעילות בהתאם לצרכי העסק.",
  },
  {
    q: "כמה זמן נמשך הליווי?",
    a: "הליווי גמיש ומותאם לצורכי העסק וזה גם היתרון הגדול שלו. הליווי יכול להיות מבוסס על פגישות שבועיות או חודשיות קבועות, ליווי אינטנסיבי בתקופות של שינוי או תמיכה בפרויקטים אסטרטגיים ומאפשר לבעל העסק את הגמישות בהתאם למציאות העסקית.",
  },
  {
    q: "האם אפשר לשלב את השירות עם Profit First?",
    a: "ניתן בהחלט לשלב. במקרים רבים Profit First תספק את התשתית לניהול תזרים ורווחיות, בעוד ששירות ה-CFO במיקור חוץ ירחיב את התמונה לתכנון, אסטרטגיה וקבלת החלטות ברמת ההנהלה.",
  },
  {
    q: "למה עסקים בצמיחה צריכים CFO?",
    a: "בשלבים הראשונים של העסק, בעל העסק נמצא קרוב לכל החלטה. עם הצמיחה מגיעים אתגרים חדשים: האם כדאי לגייס עובדים נוספים? האם ההשקעה הבאה תייצר ערך? האם התמחור נכון? האם העסק באמת רווחי? האם יש מספיק תזרים כדי לתמוך בצמיחה? אילו תחומים בעסק מייצרים ערך ואילו דורשים שינוי? בנקודה הזו, ניסיון פיננסי מקצועי יכול להפוך מידע למערכת קבלת החלטות טובה יותר.",
  },
  {
    q: "מה כולל ליווי CFO במיקור חוץ?",
    a: "שירותי ליווי פיננסי ואסטרטגי כוללים חלק או את כל השירותים הבאים: ניהול ובקרה פיננסית, יצירת תמונה ברורה של מצב העסק, בניית מדדי הצלחה ניהוליים (KPIs), מעקב אחר ביצועים מול יעדים, זיהוי מגמות והזדמנויות לשיפור, ניתוחים כלכליים ומתן כלים לקבלת החלטות.",
  },
];

const CLARITY_WITHOUT = [
  "אין תמונה מלאה וברורה",
  "החלטות מבוססות תחושות בטן",
  "חוסר שליטה בתזרים ובהוצאות",
  "הפתעות לא צפויות",
  "מחליטים לבד - אין עם מי להתייעץ",
];

const CLARITY_WITH = [
  "תמונה מלאה ובהירה של העסק",
  "החלטות מבוססות נתונים",
  "תזרים והוצאות בשליטה",
  "צמיחה רווחית ויציבה",
  "שותף פיננסי לקבלת החלטות",
];

const EXPERTISE_ITEMS = [
  {
    Icon: Banknote,
    title: "תזרים מזומנים",
    text: "ניהול תזרים חכם לשיפור נזילות וחופש פעולה.",
  },
  {
    Icon: PieChart,
    title: "תכנון פיננסי",
    text: "תקציב, תחזיות ותכנון צמיחה לטווח ארוך.",
  },
  {
    Icon: Scale,
    title: "תמחור ורווחיות",
    text: "בניית מודלים לשיפור רווחיות ומבנה עלויות.",
  },
  {
    Icon: Users,
    title: "גיוס משאבים",
    text: "הכנה לגיוס, בניית מצגות ותהליכי משקיעים.",
  },
  {
    Icon: Building2,
    title: "השקעות ומיזוגים",
    text: "בדיקת כדאיות, הערכות שווי וליווי עסקאות.",
  },
];

const CASE_CARDS = [
  {
    title: "האתגר",
    text: "צמיחה מהירה ללא תשתית פיננסית מסודרת",
  },
  {
    title: "הפעולות",
    text: "בניית מודלים, דוחות, תכנון תזרים ומעקב אחרי ביצועים",
  },
  {
    title: "התוצאה",
    text: "שיפור רווחיות של 27%, תזרים מזומנים יציב, וקבלת החלטות מדויקת",
  },
];

export default function Cfo() {
  return (
    <>
      <section className="cfo-hero">
        <div className="container">
          <div className="cfo-hero__stage">
            <img
              src={IMAGES.cfoHero}
              alt="שותף פיננסי ואסטרטגי ושירותי CFO במיקור חוץ"
            />
            <div className="cfo-hero__copy">
              <h1>שותף פיננסי ואסטרטגי</h1>
              <h2>ושירותי CFO במיקור חוץ</h2>
              <h3>לצדך. לחשוב. להחליט. להוביל.</h3>
              <p>
                ניסיון פיננסי, ראייה רחבה וכלים מעשיים כדי לעזור לך לנווט את
                העסק בביטחון ולממש את הפוטנציאל שלו.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="drawing-stack">
        <section className="home-drawing-section">
          <div className="container">
            <div className="cfo-intro">
              <h2>מה עושה שותף פיננסי לעסק?</h2>
              <p>להפוך את המספרים לכלי לקבלת החלטות</p>
            </div>
            <div className="cfo-belief">
              <div className="cfo-belief__copy">
                <p>
                  העסק שלך לא צריך רק מנהל חשבונות או רואה חשבון, הוא צריך שותף
                  לחשיבה.
                </p>
                <p>
                  ככל שהעסק גדל, כך גדל גם המחיר של כל החלטה. אני מאמין שבעל עסק
                  לא צריך להתמודד עם ההחלטות האלה לבד.
                </p>
                <p>
                  אם אתם מחפשים שותף פיננסי שיסייע לכם להבין את המספרים, לחשוב
                  קדימה ולקבל החלטות מתוך בהירות וביטחון, אשמח להכיר אתכם.
                </p>
              </div>
              <p className="cfo-belief__aside">
                החלטות טובות
                <br />
                לא מתקבלות
                <br />
                במקרה
              </p>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="cfo-help">
              <h2>איך אני יכול לעזור לך?</h2>
              <ul className="cfo-help__items">
                {HELP_ITEMS.map((item) => (
                  <li key={item.title} className="cfo-help__item">
                    <item.Icon
                      className="cfo-help__icon"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="cfo-clarity">
              <div className="cfo-clarity__copy">
                <h2>מרעש לבהירות</h2>
                <p>
                  הופכים נתונים מפוזרים לתמונה ברורה שמאפשרת להחליט נכון
                  ובביטחון
                </p>
              </div>
              <div className="cfo-clarity__compare">
                <div className="cfo-clarity__col cfo-clarity__col--with">
                  <h3>עם ליווי פיננסי</h3>
                  <ul>
                    {CLARITY_WITH.map((item) => (
                      <li key={item}>
                        <Check strokeWidth={3} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cfo-clarity__shift" aria-hidden="true">
                  <ChevronsLeft strokeWidth={2.5} />
                </div>
                <div className="cfo-clarity__col cfo-clarity__col--without">
                  <h3>ללא ליווי פיננסי מקצועי</h3>
                  <ul>
                    {CLARITY_WITHOUT.map((item) => (
                      <li key={item}>
                        <X strokeWidth={3} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="cfo-clarity__photo">
                <img src={IMAGES.lighthouse} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="cfo-expertise">
              <ul className="cfo-expertise__items">
                {EXPERTISE_ITEMS.map((item) => (
                  <li key={item.title} className="cfo-expertise__item">
                    <item.Icon
                      className="cfo-expertise__icon"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
              <h2>
                תחומי
                <br />
                התמחות
              </h2>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <blockquote className="cfo-outsource">
              <p>
                כאשר העסק גדל, ההחלטות הופכות מורכבות יותר, נדרשים יותר משאבים,
                יותר השקעות ויותר בחירות אסטרטגיות, אבל לא תמיד יש לבעל העסק
                גורם פיננסי מנוסה לצידו שיכול לנתח את התמונה המלאה, להציג תובנות
                ולסייע בקבלת החלטות.
              </p>
              <p>
                שירותי CFO במיקור חוץ מאפשרים לעסק לקבל ניסיון וחשיבה של מנהל
                כספים בכיר, ללא צורך בהעסקת CFO במשרה מלאה. אני עובד לצד בעלי
                עסקים והנהלות כדי להפוך נתונים פיננסיים לכלי ניהולי שמסייע
                לצמיחה, לשיפור ביצועים ולהגדלת ערך העסק.
              </p>
            </blockquote>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="cfo-case">
              <div className="cfo-case__copy">
                <h2 className="cfo-case__title">ממספרים לתוצאות</h2>
                <p className="cfo-case__kicker">דוגמה מהשטח</p>
                <ul className="cfo-case__cards">
                  {CASE_CARDS.map((item) => (
                    <li key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cfo-case__visual">
                <img
                  className="cfo-case__bg"
                  src={IMAGES.cfoFromNumbers}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="home-cta-banner">
          <div className="container">
            <CtaDrawing
              src={IMAGES.ctaBanner}
              alt="רוצים להפסיק לנחש? קבעו שיחת היכרות"
              heading="רוצים להפסיק לנחש?"
              lede="בואו נבנה יחד את הדרך שלכם להצלחה"
            />
          </div>
        </section>

        <Faq items={FAQ} />
      </div>
    </>
  );
}
