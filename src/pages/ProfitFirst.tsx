import {
  BarChart3,
  Clock3,
  GitFork,
  Landmark,
  Search,
  Settings2,
  ShipWheel,
  SlidersHorizontal,
  Sprout,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import CtaButton from "../components/CtaButton";
import CtaDrawing from "../components/CtaDrawing";
import Faq from "../components/Faq";
import QuickAssessment from "../components/QuickAssessment";
import { ALLOC_TOOL_URL, BOOK_URL, IMAGES } from "../content";

const FAQ = [
  {
    q: "מה זה בכלל פרופיט פירסט, רווח לפני הכל?",
    a: `פרופיט פירסט היא שיטה לניהול פיננסי לעסקים שנולדה בארה"ב לפני כ-10 שנים, והיא מבוססת על ספר רב מכר באותו השם שתורגם לאחרונה גם לעברית תחת השם "רווח לפני הכל". השיטה כבר הוטמעה ביותר מ-1.5 מיליון עסקים ברחבי העולם, וכעת גם בישראל היא צוברת תאוצה. אז למה היא כל כך מיוחדת? התשובה פשוטה: כי היא מאפשרת לבעלי עסקים להרוויח יותר ולנהל את העסק בצורה יציבה ואחראית.
השיטה מבוססת על עקרונות פשוטים שהמטרה שלהם לעזור לעסקים להתמקד בראש ובראשונה עם הרווחיות, תוך הבנה שללא רווחיות, העסק לא יוכל להמשיך ולממש את הייעוד שלו לאורך זמן. פרופיט פירסט מציבה את הרווח כיעד מרכזי. למעשה השיטה הזו הופכת את הנוסחה החשבונית המקובלת שבה הכנסות - הוצאות = רווח באופן שבו הכנסות - רווח = הוצאות. זו נשמע כמו שינוי סמנטי, אבל מה שעומד מאחורי התפיסה הזו, זה שהרווח הוא לא "שארית" או "תוצאה", אלא מטרה מתוכננת מראש. השינוי התפיסתי הזה, מוביל את כל התהליכים וקבלת ההחלטות בעסק ומפשט את ניהול הכספים בעסק בצורה חכמה ויעילה תוך הבטחת "רווח לפני הכל".`,
  },
  {
    q: "מה העקרונות העיקריים של פרופיט פירסט?",
    a: `העקרון הראשון של פרופיט פירסט הוא כמובן רווח לפני הכל, כלומר מכל שקל שנכנס לעסק מוקצה אחוז מסוים לצורכי רווח לפני כל דבר אחר. הרווח הוא למעשה הדלק שמניע את העסק ומאפשר לו לממש את הייעוד שלו. ללא רווח, העסק לא יוכל לשרוד לאורך זמן ובטח שלא לממש את הייעוד שלשמו הקמתם את העסק.
העקרון השני הוא הפרד ומשול, כמו שמוקצים כספים לרווח, כך מוקצים גם הכספים לצרכים האחרים של העסק. כל שקל שמגיע לעסק מקבל מטרה ברורה – שכר לבעלים, תשלומים לרשויות, הוצאות שוטפות ועוד. החלקים השונים של העסק מקבלים את התקציב שלהם בצורה מסודרת, כך שאתם יודעים בדיוק לאן הכסף שנכנס לעסק הולך בכל רגע. תדמיינו שהיה לכם כדור בדולח שמאפשר לכם להקצות כל שקל שנכנס לחשבון הבנק למטרה שאליה הוא נועד, זה בדיוק מה שפרופיט פירסט עושה. אחרי ניתוח פיננסי של העסק, פרופיט פירסט מייצרת אחוזי חלוקה מדוייקים לעסק שמאפשרים להקצות כספים להוצאות השונות בעסק באופן שבו הכסף ממתין להוצאה ולא בכל פעם שמגיעה דרישת תשלום, בעל העסק צריך למצוא מאיפה הוא יכול לשלם אותה. מעבר לזה על בסיס ניסיון עם הרבה עסקים, פרופיט פירסט גם יכולה להראות לכם איך אחוזי החלוקה שלכם נראים בהשוואה למודל עסקי אידיאלי ולייצר יחד איתכם את תכנית שתאפשר להתקרב למודל האופטימלי.`,
  },
  {
    q: "ואם אין מספיק כסף לכל ההוצאות?",
    a: `השלב הראשון בהטמעת פרופיט פירסט זה ניתוח של כל ההוצאות וההכנסות בעסק ויצירת בהירות לבעל העסק לגבי השאלה "לאן הולך הכסף". הבהירות הזו והכלים שפרופיט פירסט מעניקה לעסק מאפשרים לעסק להתייעל, לצמצם הוצאות שלא תורמות להפקת הכנסות, לאתר הוצאות מיותרות, וכפילויות ולקבוע סדרי עדיפויות כדי שההוצאות לא יעלו על מה שהעסק יכול להרשות לעצמו. תזכרו שהנתונים מראים שכמעט כל עסק יכול להתייעל ב-8-15% בלי לפגוע בהכנסות הנוכחיות או העתידיות שלו.
מעבר לטיפול בהוצאות, פרופיט פירסט נותנת לבעל העסק גם כלים לקבלת החלטות כלכליות בעסק, בין אם מדובר בגיוס עובדים, במיקור חוץ, ברכישת ציוד יקר או בחינת מודל התמחור של העסק כשהמטרה בסופו של דבר ליצור מודל יציב לאורך זמן שמייצר רווח ומאפשר שכר קבוע לבעל העסק ע"י איזון נכון בין ההכנסות וההוצאות בעסק תוך יצירת רווח כמובן.`,
  },
  {
    q: "ומה לגבי הגדלת הכנסות? זה לא היעד של כל עסק?",
    a: `לא בהכרח! רוב בעלי העסקים חושבים שאם הם רק ימשכו מספיק לקוחות הרווח כבר יגיע לבד, אבל המציאות שונה. היעד הראשון של פרופיט פירסט הוא להגדיל את הרווחיות ברמת ההכנסות הנוכחיות בעסק. המטרה היא לייצר מבנה פיננסי נכון כדי למנוע מצב שבו כל עלייה בהכנסות מלווה גם בעלייה בהוצאות שלא בהכרח תורמת לרווחיות. במקום להתרכז רק בהבאת לקוחות חדשים, השיטה שואפת לשמור על יציבות פיננסית וביסוס של עסק רווחי לאורך זמן. רק בצורה הזו העסק יוכל לפעול באופן שוטף ויציב, לממש את החזון שלו ולהמשיך לתת ערך ללקוחות שלו.
עם זאת, כמובן שבהטמעת פרופיט פירסט נוצרות הזדמנויות להגדלת ההכנסות, בין אם על ידי הסטת משאבים למקומות שיאפשרו צמיחה של ההכנסות, קביעת יעדי מכירות ומעקב אחריהם ותמחור נכון של מוצרים ושירותים וכשכל זה קורה כחלק מהטמעת פרופיט פירסט מובטח שהצמיחה של העסק תהיה בריאה ויציבה.`,
  },
  {
    q: "אז מה דרוש להטמיע פרופיט פירסט בעסק? פשוט לפתוח 5 חשבונות בנק?",
    a: `ממש לא. השבוע פגשתי לקוח שכבר הטמיע את פרופיט פירסט לפני שנה, מה זה אומר הטמיע? פתח חמישה חשבונות בנק, קבע את אחוזי החלוקה והקפיד לחלק את הכספים לחשבונות השונים 4 פעמים בחודש, כמו שעון. אז למה זה לא עובד?
נכון שכדי להטמיע פרופיט פירסט בעסק נכון לפתוח חשבונות נוספים ולחלק את הכספים בצורה קבועה, זה תנאי הכרחי, אבל ממש לא תנאי מספיק... אחד העקרונות המרכזיים של פרופיט פירסט זה הפרד ומשול. פתיחת חשבונות וחלוקת כספים זה נחמד אבל אם הוצאות הבית ממשיכות לחייב את חשבון העסק, אם עדיין כספים מחשבון הרווח חוזרים לחשבון ההוצאות כדי לממן את הפעילות השוטפת ואם לא מתבצע בעסק שום תהליך שנועד לשמור את העסק במסגרת תקציבית שהעסק יכול להרשות לעצמו, אז לא באמת הטמענו את פרופיט פירסט. פרופיט פירסט זו תפיסת עולם לניהול כלכלי של עסק ולא סט של טכניקות שעושות קסם. הטכניקה, פתיחת חשבונות הבנק וחלוקות הכספים הם רק האמצעי וממש לא המטרה.`,
  },
  {
    q: "האם אפשר להטמיע פרופיט פירסט לבד?",
    a: `התשובה הקצרה היא כן, אבל.. הספר מתאר את כל השלבים בהטמעת פרופיט פירסט וכעקרון אין שום מניעה לבעל עסק לעקוב אחרי השלבים בספר ולהטמיע את השיטה בעסק, אבל הניסיון שלנו מראה שאחוזי ההצלחה בהטמעה עם יועץ מוסמך של פרופיט פירסט שונים לחלוטין וככה גם התוצאות העסקיות. ליועץ יש גם את הידע להטמעת השיטה וגם את הניסיון לדעת מה עובד ואיך נכון להטמיע את השיטה לפי מה שנכון לעסק הספציפי שלכם. בסופו של דבר השיטה היא אותה השיטה אבל התפירה למידות של העסק והיכולת לזהות גם את ההזדמנויות וגם את נקודות הכשל בעסק זה משהו שהיועצים של פרופיט פירסט יודעים לעשות וגם מה שמאפשר את הצלחת התהליך וההתמדה בניהול העסק בצורה נכונה. הליווי של היועץ גם נותן לבעל העסק זוג עיניים נוספות "ומישהו לרוץ איתו" מה שמקצר את תקופת ההטמעה ומונע מצבים של הטמעה חלקית או הפסקת התהליך באמצע הדרך. מעבר לזה היועצים של פרופיט פירסט גם מלווים את העסק במהלך העבודה השוטפת אחרי ההטמעה כדי לוודא שהעסק מתנהל בצורה נכונה ע"פ השיטה ומסייעים לבעל העסק בהתלבטויות, שאלות ודיוק האחוזים בהמשך הדרך.
אז לשאלה אם אפשר, אפשר. אבל האם זו הדרך המומלצת? לא ממש..`,
  },
];

const BUCKETS = [
  {
    key: "profit",
    title: "רווח",
    text: "הרווח של העסק לצמיחה ורווחה",
    footer: "Profits",
    Icon: BarChart3,
  },
  {
    key: "owner",
    title: "שכר בעלים",
    text: "התגמול שלך על העבודה בעסק",
    footer: "Owner's Comp",
    Icon: Wallet,
  },
  {
    key: "tax",
    title: "רשויות",
    text: "כסף שמיועד לתשלומי מיסים",
    footer: "Tax Hold",
    Icon: Landmark,
  },
  {
    key: "opex",
    title: "הוצאות",
    text: "תקציב ההוצאות השוטפות",
    footer: "Expenses",
    Icon: Settings2,
  },
] as const;

function FormulaWalletIcon() {
  return (
    <svg
      className="pf-shift__glyph"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="10" y="18" width="44" height="30" rx="7" />
      <path d="M10 30.5c6.5-6 37.5-6 44 0" />
      <circle cx="46.5" cy="36.5" r="4.2" />
      <circle cx="46.5" cy="36.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FormulaProfitIcon() {
  return (
    <svg
      className="pf-shift__glyph pf-shift__glyph--chart"
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 12v40h40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="22" y="36" width="8" height="12" rx="0.5" />
      <rect x="33" y="26" width="8" height="22" rx="0.5" />
      <rect x="44" y="16" width="8" height="32" rx="0.5" />
      <path
        d="M24 34.5 37 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M31.2 19.4h9.6v9.6" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FormulaCoin({
  cx,
  cy,
  r,
  t = 3.4,
  ridges = 8,
}: {
  cx: number;
  cy: number;
  r: number;
  t?: number;
  ridges?: number;
}) {
  const hashes = Array.from({ length: ridges }, (_, i) => {
    const a = (Math.PI * (i + 1)) / (ridges + 1);
    const dx = Math.cos(a);
    const dy = Math.sin(a);
    return (
      <line
        key={i}
        x1={cx + r * dx}
        y1={cy + r * dy}
        x2={cx + r * dx}
        y2={cy + t + r * dy}
      />
    );
  });

  return (
    <g>
      <path d={`M${cx - r} ${cy}v${t}a${r} ${r} 0 0 0 ${r * 2} 0v${-t}`} />
      <g strokeWidth="1.3">{hashes}</g>
      <circle cx={cx} cy={cy} r={r} />
      <circle cx={cx} cy={cy} r={r * 0.54} fill="none" />
    </g>
  );
}

function FormulaCoinsIcon() {
  return (
    <svg
      className="pf-shift__glyph pf-shift__glyph--coins"
      viewBox="0 0 64 64"
      fill="#e4e4e4"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <FormulaCoin cx={26} cy={17.2} r={11.6} ridges={7} />
      <FormulaCoin cx={23.2} cy={31.2} r={12} ridges={7} />
      <FormulaCoin cx={40.8} cy={36.2} r={13.6} t={3.8} ridges={10} />
    </svg>
  );
}

function MeditationIcon({
  className,
  strokeWidth = 1.6,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9.2 5.2a3.6 3.6 0 0 1 5.6 0" strokeDasharray="1.15 1.05" />
      <path d="M7.7 4.1a5.2 5.2 0 0 1 8.6 0" strokeDasharray="1.15 1.05" />
      <path d="M6.3 3.1a6.7 6.7 0 0 1 11.4 0" strokeDasharray="1.15 1.05" />
      <circle cx="12" cy="7.35" r="1.55" fill="currentColor" stroke="none" />
      <path d="M12 8.95v3.5" />
      <path d="M12 10.5 7.3 14" />
      <path d="M12 10.5 16.7 14" />
      <path d="M12 12.4c-2.3 0-4.4.9-5 2.6 1.1-.3 2.7.3 5 2.8" />
      <path d="M12 12.4c2.3 0 4.4.9 5 2.6-1.1-.3-2.7.3-5 2.8" />
    </svg>
  );
}

const GAINS = [
  {
    title: "חסכון בזמן",
    text: "שיטה פשוטה שפשוט עובדת",
    Icon: Clock3,
  },
  {
    title: "צמיחה בריאה",
    text: "הצמיחה מגיעה גם לשורה התחתונה",
    Icon: Sprout,
  },
  {
    title: "קבלת החלטות",
    text: "נתונים ברורים להחלטות נכונות",
    Icon: TrendingUp,
  },
  {
    title: "שקט נפשי",
    text: "פחות לחץ, יותר ביטחון",
    Icon: MeditationIcon,
  },
  {
    title: "שליטה בתזרים",
    text: "יודעים בדיוק לאן הכסף הולך",
    Icon: ShipWheel,
  },
  {
    title: "רווח קבוע",
    text: "הרווח הוא לא מקרי אלא מתוכנן",
    Icon: Target,
  },
] as const;

const STEPS = [
  {
    n: "1",
    title: "אבחון פיננסי",
    text: "מבינים את התמונה הפיננסית של העסק והפער בין המצוי לרצוי",
    Icon: Search,
    tone: "diagnose",
  },
  {
    n: "2",
    title: "קביעת יעדים",
    text: "קובעים יחד את היעדים של העסק ובונים תכנית לסגירת פערים",
    Icon: Target,
    tone: "goals",
  },
  {
    n: "3",
    title: "מנגנון חלוקה",
    text: "מגדירים חשבונות ואחוזי חלוקה ובונים מנגנון המותאם אישית לעסק",
    Icon: GitFork,
    tone: "alloc",
  },
  {
    n: "4",
    title: "הגדלת ערך",
    text: "יוצרים כלים פרקטיים ומזהים הזדמנויות להגדלת הערך מהעסק",
    Icon: TrendingUp,
    tone: "value",
  },
  {
    n: "5",
    title: "בקרה והתאמות",
    text: "בקרה שוטפת והתאמות של החלוקות לפי הצורך להטמעה מוצלחת",
    Icon: SlidersHorizontal,
    tone: "control",
  },
] as const;

const AUDIENCE = [
  {
    src: IMAGES.pfAudienceCash,
    title: "עסקים רווחיים",
    text: "שלא נשאר להם כסף בחשבון הבנק",
  },
  {
    src: IMAGES.pfAudienceGrowth,
    title: "עסקים בצמיחה",
    text: "שרוצים להישאר בשליטה ולשמר רווחיות",
  },
  {
    src: IMAGES.pfAudienceOwners,
    title: "בעלי עסקים",
    text: "שרוצים שליטה פיננסית ושקט נפשי",
  },
] as const;

export default function ProfitFirst() {
  return (
    <>
      <section className="pf-hero">
        <div className="container">
          <div className="pf-hero__stage">
            <img
              src={IMAGES.pfJars}
              alt="צנצנות Profit First: רווח, שכר בעלים, מסים והוצאות תפעול"
            />
            <div className="pf-hero__copy">
              <h1>
                <span className="pf-hero__name" dir="ltr">
                  Profit First<sup className="pf-tm">©</sup>
                </span>
                <span>רווח הוא לא תוצאה.</span>
                <span>רווח הוא החלטה.</span>
              </h1>
              <p className="pf-lede">
                <span className="pf-brand" dir="ltr">
                  Profit First<sup className="pf-tm">©</sup>
                </span>{" "}
                מסייעת לבעלי עסקים להפוך רווח להרגל, לבנות שליטה פיננסית
                ולצמוח בצורה בריאה ומבוקרת
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="drawing-stack">
        <section className="home-drawing-section">
          <div className="container">
            <div className="pf-method">
              <div className="pf-method__copy">
                <h2>
                  מהי שיטת רווח לפני הכל (
                  <span dir="ltr">
                    Profit First<sup className="pf-tm">©</sup>
                  </span>
                  )?
                </h2>
                <p className="pf-method__lede">
                  אסטרטגיה לניהול פיננסי שפותחה בארה&quot;ב על ידי היזם והסופר
                  העסקי{" "}
                  <span dir="ltr">Mike Michalowicz</span> ומבוססת על רב מכר
                  עולמי שתורגם לעברית תחת השם &quot;רווח לפני הכל&quot;
                </p>
                <ul className="pf-method__list">
                  <li>הפרדת הכסף הנכנס לעסק לפי מטרות מוגדרות מראש</li>
                  <li>הקצאת רווח מראש ולא בדיעבד</li>
                  <li>גבולות ברורים להוצאות</li>
                  <li>ניהול העסק מתוך מודעות ובקרה</li>
                </ul>
              </div>
              <img
                className="pf-method__book"
                src={IMAGES.book}
                alt="הספר רווח לפני הכל מאת Mike Michalowicz"
              />
            </div>
            <div className="home-drawing-cta">
              <a
                className="cta-btn pf-book-cta"
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span className="cta-btn__arrow" aria-hidden="true" />
                <span className="pf-book-cta__text">
                  <span className="pf-book-cta__main">לרכישת הספר בהנחה</span>
                  <span className="pf-book-cta__note">
                    (הזינו קוד קופון <span dir="ltr">AvivS</span>)
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="pf-problem">
              <div className="pf-problem__copy">
                <p className="pf-problem__kicker">הבעיה</p>
                <h2>
                  השיטה המסורתית
                  <span>לא מייצרת רווח אמיתי</span>
                </h2>
                <p className="pf-problem__lede">
                  ברוב העסקים הרווח הוא מה שנשאר בסוף החודש בפועל, בהרבה מקרים,
                  הרווח נשאר על הנייר בלבד
                </p>
              </div>
              <div
                className="pf-problem__formula"
                role="img"
                aria-label="הכנסות פחות הוצאות שווה רווח?"
              >
                <div className="pf-problem__term">
                  <span className="pf-problem__disc pf-problem__disc--income">
                    <FormulaWalletIcon />
                  </span>
                  <span className="pf-problem__label">הכנסות</span>
                </div>
                <span className="pf-problem__op" aria-hidden="true">
                  <span className="pf-problem__bar" />
                </span>
                <div className="pf-problem__term">
                  <span className="pf-problem__disc pf-problem__disc--opex">
                    <FormulaCoinsIcon />
                  </span>
                  <span className="pf-problem__label">הוצאות</span>
                </div>
                <span className="pf-problem__op" aria-hidden="true">
                  <span className="pf-problem__bar" />
                  <span className="pf-problem__bar" />
                </span>
                <div className="pf-problem__term">
                  <span className="pf-problem__disc pf-problem__disc--ask">
                    ?
                  </span>
                  <span className="pf-problem__label">
                    רווח
                    <small>(אם נשאר..)</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="pf-shift">
              <div className="pf-shift__copy">
                <p className="pf-shift__kicker">שינוי החשיבה</p>
                <h2>רווח קודם להוצאות</h2>
                <p className="pf-shift__lede">
                  כשהכסף מקבל יעוד עם כניסתו לעסק, הרווח קיים בחשבון הבנק בסוף
                  החודש ולהוצאות יש מסגרת ברורה
                </p>
              </div>
              <div
                className="pf-shift__formula"
                role="img"
                aria-label="הכנסות פחות רווח שווה הוצאות"
              >
                <div className="pf-shift__term">
                  <span className="pf-shift__disc pf-shift__disc--income">
                    <FormulaWalletIcon />
                  </span>
                  <span className="pf-shift__label">הכנסות</span>
                </div>
                <span className="pf-shift__op" aria-hidden="true">
                  <span className="pf-shift__bar" />
                </span>
                <div className="pf-shift__term">
                  <span className="pf-shift__disc pf-shift__disc--profit">
                    <FormulaProfitIcon />
                  </span>
                  <span className="pf-shift__label">רווח</span>
                </div>
                <span className="pf-shift__op" aria-hidden="true">
                  <span className="pf-shift__bar" />
                  <span className="pf-shift__bar" />
                </span>
                <div className="pf-shift__term">
                  <span className="pf-shift__disc pf-shift__disc--opex">
                    <FormulaCoinsIcon />
                  </span>
                  <span className="pf-shift__label">הוצאות</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="pf-solution">
              <div className="pf-solution__copy">
                <p className="pf-solution__kicker">הפתרון</p>
                <h2>כל שקל במקום הנכון</h2>
                <p className="pf-solution__lede">
                  חלוקה חכמה של ההכנסות שמייצרת שליטה, רווח וצמיחה
                </p>
              </div>
              <ul className="pf-buckets">
                {BUCKETS.map((item) => (
                  <li
                    key={item.key}
                    className={`pf-bucket pf-bucket--${item.key}`}
                  >
                    <span className="pf-bucket__pct" aria-hidden="true">
                      %
                    </span>
                    <h3>{item.title}</h3>
                    <item.Icon className="pf-bucket__icon" strokeWidth={1.75} />
                    <p>{item.text}</p>
                    <span className="pf-bucket__footer" dir="ltr">
                      {item.footer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="pf-gains">
              <div className="pf-gains__head">
                <p className="pf-gains__kicker">היתרונות</p>
                <h2>עסק רווחי</h2>
                <p className="pf-gains__lede">
                  הרווח הופך חלק אינטגרלי מהמבנה הפיננסי של העסק
                </p>
              </div>
              <ul className="pf-gains__grid">
                {GAINS.map((item) => (
                  <li key={item.title}>
                    <item.Icon className="pf-gains__icon" strokeWidth={1.6} />
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
            <div className="pf-process">
              <div className="pf-process__head">
                <p className="pf-process__kicker">איך מיישמים?</p>
                <h2>מתיאוריה ליישום שעובד בעסק שלך</h2>
              </div>
              <ol className="pf-process__steps">
                {STEPS.map((item) => (
                  <li
                    key={item.n}
                    className={`pf-process__step pf-process__step--${item.tone}`}
                  >
                    <span className="pf-process__n">{item.n}</span>
                    <span className="pf-process__icon">
                      <item.Icon strokeWidth={1.6} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
              <p className="pf-process__foot">
                <span>ליווי אישי לאורך כל התהליך להטמעה מוצלחת</span>
              </p>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="pf-audience">
              <p className="pf-audience__kicker">למי זה מתאים?</p>
              <ul className="pf-audience__cards">
                {AUDIENCE.map((item) => (
                  <li key={item.title} className="pf-audience__card">
                    <img src={item.src} alt={item.title} />
                    <div className="pf-audience__caption">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <QuickAssessment />
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="alloc-tool">
              <h2>עובדים עם פרופיט פירסט ועדיין עושים חלוקות באקסל?</h2>
              <div className="alloc-tool__pains">
                <p>מסתבכים עם החישובים?</p>
                <p>לא מצליחים להתמיד?</p>
                <p>לא שומרים תיעוד?</p>
              </div>
              <p className="lede">
                ממשק אינטרנטי לחישוב החלוקות ע&quot;פ פרופיט פירסט ללא צורך
                בשימוש באקסלים -{" "}
                <br />
                כלי שהופך את החלוקות לפעולה פשוטה וקבועה.
              </p>
              <div className="alloc-tool__split">
                <div className="alloc-tool__copy">
                  <ul className="checklist">
                    <li>
                      <span className="check">✔</span>
                      חישוב חלוקה מיידי
                    </li>
                    <li>
                      <span className="check">✔</span>
                      חלוקה חכמה שמונעת טעויות וחלוקות יתר
                    </li>
                    <li>
                      <span className="check">✔</span>
                      היסטוריה מסודרת של כל החלוקות
                    </li>
                    <li>
                      <span className="check">✔</span>
                      תזכורות כשמגיע הזמן לבצע
                    </li>
                    <li>
                      <span className="check">✔</span>
                      נגיש מכל מחשב או טלפון
                    </li>
                  </ul>
                  <p className="alloc-tool__tagline">קל. פשוט. עובד.</p>
                  <div className="alloc-tool__actions">
                    <a
                      className="cta-btn"
                      href={ALLOC_TOOL_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="cta-btn__arrow" aria-hidden="true" />
                      לכלי החלוקה
                    </a>
                    <CtaButton className="cta-btn--ghost">לקבלת גישה</CtaButton>
                  </div>
                </div>
                <a
                  className="alloc-tool__photo"
                  href={ALLOC_TOOL_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={IMAGES.pfAllocationTool}
                    alt="כלי החלוקות של פרופיט פירסט בטלפון"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="home-cta-banner">
          <div className="container">
            <CtaDrawing
              src={IMAGES.ctaBanner}
              alt="רוצים להפוך רווח להרגל? קבעו שיחת היכרות"
              heading="רוצים להפוך רווח להרגל?"
              lede={'רווח בדו"חות החשבונאיים ומינוס בחשבון הבנק?\nProfit First יכולה להיות הפתרון הנכון עבורכם'}
            />
          </div>
        </section>

        <Faq items={FAQ} />
      </div>
    </>
  );
}
