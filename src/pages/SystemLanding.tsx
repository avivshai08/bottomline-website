import { BarChart3, Database, SlidersHorizontal, Target } from "lucide-react";
import CtaButton from "../components/CtaButton";
import Faq from "../components/Faq";
import { IMAGES, SYSTEM_SIGNUP_URL, SYSTEM_VIDEO } from "../content";

const AREAS = [
  { Icon: SlidersHorizontal, title: "ההגדרות שלי", text: "העסקים ומשק הבית — עוסק פטור, עוסק מורשה או חברה." },
  { Icon: Database, title: "הנתונים שלי", text: "דפי הבנק וכרטיסי האשראי, מסודרים ומסווגים." },
  { Icon: Target, title: "היעדים שלי", text: "תקציב חודשי להכנסות ולהוצאות." },
  { Icon: BarChart3, title: "התוצאות שלי", text: "לוח בקרה עם התמונה הפיננסית המלאה." },
];

const STEPS = [
  {
    kicker: "מעלים",
    title: "קבצים מהבנק ומחברות האשראי",
    text: "אקסל או PDF, כמו שהורדתם אותם מאתר הבנק. המערכת מזהה לבד את המקור, מסדרת את התנועות ומסננת כפילויות.",
    img: IMAGES.systemUpload,
    alt: "מסך העלאת נתונים במערכת Bottom line",
  },
  {
    kicker: "מאשרים",
    title: "כל תנועה מקבלת הצעת סיווג",
    text: "אתם רק בודקים ומאשרים — בלחיצה אחת. ומה שמלמדים פעם אחת, המערכת זוכרת: שומרים ככלל, וכל תנועה דומה תסווג מעצמה בחודשים הבאים.",
    img: IMAGES.systemReview,
    alt: "מסך סקירת נתונים ואישור סיווג תנועות",
  },
  {
    kicker: "מתכננים",
    title: "יעד חודשי להכנסות ולהוצאות",
    text: "רואים כמה הוצאתם בפועל, בממוצע, בכל קטגוריה, וקובעים יעד — בשקלים או באחוזים מההכנסה. כך יודעים כמה כסף אמור להישאר, עוד לפני שהחודש מתחיל.",
    img: IMAGES.systemGoals,
    alt: "מסך היעדים שלי עם ממוצעים בפועל ויעד חודשי",
  },
  {
    kicker: "רואים",
    title: "לוח בקרה פיננסי במבט אחד",
    points: [
      "תמונת מצב: יתרות כל הבנקים, כמה באמת נשאר, ותובנות שמסבירות מה השתנה.",
      "ביצוע מול יעדים: ירוק, כתום או אדום.",
      "מקורות ושימושים: מאיפה הכסף מגיע ולאן הוא הולך.",
      "מגמות: שנה שלמה במבט אחד.",
    ],
    img: IMAGES.systemSnapshot,
    alt: "לוח הבקרה הפיננסי — תמונת מצב",
  },
];

const INSTITUTIONS = [
  "בנק לאומי",
  "בנק הפועלים",
  "בנק דיסקונט",
  "בנק מזרחי טפחות",
  "ישראכרט",
  "מקס",
  "כאל",
  "אמריקן אקספרס",
];

const PLANS = [
  { name: "בסיסי", scope: "עסק אחד ומשק בית אחד" },
  { name: "מתקדם", scope: "עד 5 עסקים ועד 5 משקי בית" },
  { name: "יועץ", scope: "לרואי חשבון וליועצים שמלווים לקוחות", contact: true },
];

export const FAQ = [
  {
    q: "צריך לחבר את המערכת לחשבון הבנק?",
    a: "לא. מורידים מאתר הבנק או חברת האשראי את קובץ התנועות (אקסל או PDF) ומעלים אותו למערכת. אין צורך למסור סיסמאות לבנק.",
  },
  {
    q: "אילו בנקים וחברות אשראי נתמכים?",
    a: "בנקים: לאומי, הפועלים, דיסקונט ומזרחי טפחות. כרטיסי אשראי: ישראכרט, מקס, כאל ואמריקן אקספרס.",
  },
  {
    q: "המערכת מתאימה גם למשק בית?",
    a: "כן. באותה מערכת מנהלים את העסק וגם את משק הבית, כל אחד עם קטגוריות, יעדים ולוח בקרה משלו, ועוברים ביניהם בלחיצה. המסלול הבסיסי כולל עסק אחד ומשק בית אחד.",
  },
  {
    q: "מי רואה את הנתונים שלי?",
    a: "רק אתם, ומי שנתתם לו גישה. הכניסה מאובטחת דרך חשבון Google, החיבור מוצפן, והמידע לא נמכר ולא משמש לפרסום. אחרי סיום המנוי הנתונים נמחקים תוך 60 יום, ואפשר לבקש למחוק אותם גם קודם.",
  },
  {
    q: "איך מתחילים?",
    a: "נכנסים עם חשבון Google, בוחרים מסלול ומקבלים 30 יום ניסיון ללא תשלום. אחרי תקופת הניסיון המנוי מתחדש מדי חודש, ואפשר לבטל בכל עת מתוך המערכת.",
  },
];

function TrialButton({ label = "התחילו 30 יום ניסיון חינם" }: { label?: string }) {
  return (
    <a className="cta-btn" href={SYSTEM_SIGNUP_URL}>
      <span className="cta-btn__arrow" aria-hidden="true" />
      {label}
    </a>
  );
}

export default function SystemLanding() {
  return (
    <>
      <section className="sys-hero">
        <div className="container">
          <div className="sys-hero__copy">
            <p className="eyebrow">Bottom line — מערכת לניהול תזרים מזומנים</p>
            <h1>כמה באמת נשאר לכם בסוף החודש?</h1>
            <h2 className="sys-hero__tag">לעסק, וגם למשק הבית.</h2>
            <p className="lede">
              מעלים דפי בנק וכרטיסי אשראי, מאשרים סיווג בלחיצה, ורואים במבט
              אחד כמה כסף נשאר — ולאן הוא הולך.
            </p>
            <div className="sys-hero__actions">
              <TrialButton />
              <a className="cta-btn cta-btn--ghost" href="#how">
                איך זה עובד?
              </a>
            </div>
          </div>
          <video
            className="sys-video"
            src={SYSTEM_VIDEO}
            poster={IMAGES.systemVideoPoster}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      <section className="section section--navy sys-problem">
        <div className="container narrow">
          <p className="lede lede--statement">
            דפי בנק. כרטיסי אשראי. קבצי אקסל. והתמונה עדיין לא ברורה.
            <br />
            <strong>הגיע הזמן לקחת שליטה.</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">ארבעה תחומים, תמונה פיננסית אחת</h2>
            <p className="lede">מערכת אחת לעסקים ולמשק הבית.</p>
          </div>
          <ul className="sys-areas">
            {AREAS.map(({ Icon, title, text }) => (
              <li key={title}>
                <span className="sys-areas__icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gray" id="how">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">איך זה עובד?</h2>
          </div>
          <div className="sys-steps">
            {STEPS.map((step, i) => (
              <article className="sys-step" key={step.kicker}>
                <div className="sys-step__copy">
                  <p className="eyebrow">
                    {i + 1}. {step.kicker}
                  </p>
                  <h3>{step.title}</h3>
                  {step.text && <p>{step.text}</p>}
                  {step.points && (
                    <ul>
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <img
                  className="sys-step__shot"
                  src={step.img}
                  alt={step.alt}
                  width={1440}
                  height={900}
                  loading="lazy"
                />
              </article>
            ))}
          </div>
          <p className="sys-steps__note">המסכים מציגים נתוני הדגמה.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">עובדת עם הבנקים וחברות האשראי הגדולים</h2>
          </div>
          <ul className="sys-banks">
            {INSTITUTIONS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">מסלול לכל צורך</h2>
            <p className="lede">30 יום ניסיון ללא תשלום. מנוי חודשי, אפשר לבטל בכל עת.</p>
          </div>
          <ul className="sys-plans">
            {PLANS.map((plan) => (
              <li key={plan.name}>
                <h3>{plan.name}</h3>
                <p>{plan.scope}</p>
                {plan.contact ? <CtaButton /> : <TrialButton label="לניסיון חינם" />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="sys-faq">
        <Faq items={FAQ} />
      </div>

      <section className="section section--navy sys-closing">
        <div className="container narrow">
          <h2>שליטה פיננסית טובה יותר. החלטות טובות יותר.</h2>
          <TrialButton />
        </div>
      </section>
    </>
  );
}
