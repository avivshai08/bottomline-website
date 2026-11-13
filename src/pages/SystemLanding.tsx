import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  Briefcase,
  Check,
  CreditCard,
  Database,
  FileSpreadsheet,
  Home,
  Landmark,
  Maximize2,
  Play,
  Receipt,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import CtaButton from "../components/CtaButton";
import Faq from "../components/Faq";
import Logo from "../components/Logo";
import { IMAGES, SYSTEM_SIGNUP_URL, SYSTEM_VIDEO } from "../content";

const INSTITUTIONS = [
  "בנק לאומי",
  "בנק הפועלים",
  "בנק דיסקונט",
  "מזרחי טפחות",
  "ישראכרט",
  "מקס",
  "כאל",
  "אמריקן אקספרס",
];

const PAPERS = [
  { Icon: Landmark, label: "דף בנק" },
  { Icon: CreditCard, label: "פירוט אשראי" },
  { Icon: FileSpreadsheet, label: "קובץ אקסל" },
  { Icon: Receipt, label: "קבלות" },
];

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
];

const DASHBOARD = [
  {
    tab: "תמונת מצב",
    text: "יתרות כל הבנקים, העודף התזרימי — כמה באמת נשאר, מדדי הביצוע מול התקופה הקודמת, ותובנות שמסבירות מה השתנה.",
    img: IMAGES.systemSnapshot,
  },
  {
    tab: "ביצוע מול יעדים",
    text: "כל קטגוריה מול היעד שקבעתם. הצבעים אומרים הכול: ירוק, כתום או אדום.",
    img: IMAGES.systemVsGoals,
  },
  {
    tab: "מקורות ושימושים",
    text: "מאיפה הכסף מגיע, ולאן הוא הולך.",
    img: IMAGES.systemSources,
  },
  {
    tab: "מגמות",
    text: "שנה שלמה במבט אחד. מוסיפים נתונים בלחיצה, והגרף נבנה מול העיניים.",
    img: IMAGES.systemTrends,
  },
];

const PLANS = [
  {
    name: "בסיסי",
    price: "69",
    scope: "לעסק ולבית",
    features: ["עסק אחד ומשק בית אחד", "העלאת דפי בנק וכרטיסי אשראי", "סיווג חכם שלומד מכם", "יעדים ולוח בקרה מלא"],
  },
  {
    name: "מתקדם",
    price: "139",
    scope: "לכמה עסקים",
    features: ["עד 5 עסקים ועד 5 משקי בית", "כל מה שיש במסלול הבסיסי", "מעבר בין העסקים בלחיצה"],
    featured: true,
  },
  {
    name: "יועץ",
    scope: "לרואי חשבון וליועצים",
    features: ["ליווי כמה לקוחות במערכת אחת", "גישה לנתונים שהלקוח שיתף איתכם"],
  },
];

export const FAQ = [
  {
    q: "כמה זה עולה?",
    a: "מסלול בסיסי — 69 ₪ לחודש. מסלול מתקדם — 139 ₪ לחודש. בשני המסלולים החודש הראשון חינם, ואפשר לבטל בכל עת. למסלול יועץ — צרו קשר לפרטים.",
  },
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
    a: "נכנסים עם חשבון Google, בוחרים מסלול, והחודש הראשון חינם. אחריו המנוי מתחדש מדי חודש, ואפשר לבטל בכל עת מתוך המערכת.",
  },
];

function TrialButton({ label = "להתחיל — החודש הראשון חינם" }: { label?: string }) {
  return (
    <a className="cta-btn" href={SYSTEM_SIGNUP_URL}>
      <span className="cta-btn__arrow" aria-hidden="true" />
      {label}
    </a>
  );
}

/** A screen inside a dark browser frame, so screenshots read as the real app. */
function AppWindow({ children }: { children: ReactNode }) {
  return (
    <div className="sys-window">
      <div className="sys-window__bar" aria-hidden="true">
        <span className="sys-window__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="sys-window__url">app.bottomline.finance</span>
      </div>
      {children}
    </div>
  );
}

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

function DemoVideo() {
  const ref = useRef<FullscreenVideo>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    void ref.current?.play();
  }

  function fullscreen() {
    const video = ref.current;
    if (!video) return;
    play();
    if (typeof video.requestFullscreen === "function") void video.requestFullscreen();
    else video.webkitEnterFullscreen?.();
  }

  return (
    <div className="sys-video">
      <AppWindow>
        <div className="sys-video__stage">
          <video
            ref={ref}
            src={SYSTEM_VIDEO}
            poster={IMAGES.systemVideoPoster}
            controls={started}
            playsInline
            preload="metadata"
            onPlay={() => setStarted(true)}
          />
          {!started && (
            <button type="button" className="sys-video__play" onClick={play}>
              <span className="sys-video__play-icon">
                <Play size={26} fill="currentColor" aria-hidden="true" />
              </span>
              <span className="sys-video__play-label">צפו בסרטון · 2:33</span>
            </button>
          )}
        </div>
      </AppWindow>
      <button type="button" className="sys-video__full" onClick={fullscreen}>
        <Maximize2 size={16} aria-hidden="true" />
        צפייה במסך מלא
      </button>
      <div className="sys-float sys-float--a" aria-hidden="true">
        <span className="sys-float__dot sys-float__dot--green" />
        בהתאם ליעד
      </div>
      <div className="sys-float sys-float--b" aria-hidden="true">
        <svg viewBox="0 0 64 24" className="sys-float__spark">
          <polyline points="2,20 14,16 24,18 36,10 48,12 62,3" />
        </svg>
        עודף תזרימי
      </div>
    </div>
  );
}

function DashboardTour() {
  const [active, setActive] = useState(0);
  const current = DASHBOARD[active];

  return (
    <div className="sys-tour">
      <div className="sys-tour__tabs" role="tablist" aria-label="לשוניות לוח הבקרה">
        {DASHBOARD.map((item, i) => (
          <button
            key={item.tab}
            type="button"
            role="tab"
            id={`sys-tab-${i}`}
            aria-selected={i === active}
            aria-controls="sys-tour-panel"
            className={`sys-tour__tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {item.tab}
          </button>
        ))}
      </div>
      <div className="sys-tour__panel" id="sys-tour-panel" role="tabpanel" aria-labelledby={`sys-tab-${active}`}>
        <p className="sys-tour__text">{current.text}</p>
        <AppWindow>
          <img
            key={current.img}
            className="sys-tour__shot"
            src={current.img}
            alt={`לוח הבקרה — ${current.tab}`}
            width={1440}
            height={900}
            loading="lazy"
          />
        </AppWindow>
      </div>
    </div>
  );
}

/** Fades sections in as they scroll into view. Content stays visible without JavaScript. */
function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("is-pending");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of items) {
      el.classList.add("is-pending");
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

export default function SystemLanding() {
  useReveal();

  return (
    <div className="sys">
      <section className="sys-hero">
        <div className="container sys-hero__grid">
          <div className="sys-hero__copy">
            <p className="sys-pill">מערכת לניהול תזרים מזומנים</p>
            <h1>
              כמה באמת נשאר לכם <span className="sys-hero__mark">בסוף החודש?</span>
            </h1>
            <p className="sys-hero__tag">לעסק, וגם למשק הבית.</p>
            <p className="sys-hero__lede">
              מעלים דפי בנק וכרטיסי אשראי, מאשרים סיווג בלחיצה, ורואים במבט
              אחד כמה כסף נשאר — ולאן הוא הולך.
            </p>
            <div className="sys-hero__actions">
              <TrialButton />
              <a className="sys-link" href="#how">
                איך זה עובד?
                <ArrowLeft size={18} aria-hidden="true" />
              </a>
            </div>
            <ul className="sys-hero__ticks">
              <li>
                <Check size={16} aria-hidden="true" />
                החודש הראשון חינם
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                בלי לחבר את חשבון הבנק
              </li>
              <li>
                <Check size={16} aria-hidden="true" />
                ביטול בכל עת
              </li>
            </ul>
          </div>
          <DemoVideo />
        </div>
        <div className="sys-banks">
          <div className="container sys-banks__inner">
            <span className="sys-banks__label">עובדת עם</span>
            <ul>
              {INSTITUTIONS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sys-section">
        <div className="container sys-chaos" data-reveal>
          <div className="sys-chaos__copy">
            <p className="sys-kicker">מכירים את זה?</p>
            <h2>
              דפי בנק. כרטיסי אשראי. קבצי אקסל.{" "}
              <span>והתמונה עדיין לא ברורה.</span>
            </h2>
            <p className="sys-lede">
              הנתונים מפוזרים בכמה מקומות, והשאלה הכי פשוטה נשארת בלי תשובה.
              הגיע הזמן לקחת שליטה.
            </p>
          </div>
          <div className="sys-chaos__visual" aria-hidden="true">
            <div className="sys-chaos__pile">
              {PAPERS.map(({ Icon, label }) => (
                <span key={label} className="sys-paper">
                  <Icon size={20} />
                  {label}
                </span>
              ))}
            </div>
            <span className="sys-chaos__arrow">
              <ArrowLeft size={28} />
            </span>
            <div className="sys-clarity">
              <p className="sys-clarity__title">תמונה אחת ברורה</p>
              {[
                ["הכנסות", 92, "green"],
                ["הוצאות", 74, "orange"],
                ["רווח", 58, "green"],
                ["רשויות", 40, "red"],
              ].map(([label, width, tone]) => (
                <div key={label} className="sys-clarity__row">
                  <span>{label}</span>
                  <span className="sys-clarity__track">
                    <span className={`sys-clarity__bar sys-clarity__bar--${tone}`} style={{ width: `${width}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sys-section sys-section--soft">
        <div className="container">
          <div className="sys-head" data-reveal>
            <p className="sys-kicker">הכירו את Bottom line</p>
            <h2>ארבעה תחומים. תמונה פיננסית אחת.</h2>
          </div>
          <ol className="sys-areas" data-reveal>
            {AREAS.map(({ Icon, title, text }, i) => (
              <li key={title}>
                <span className="sys-areas__num">0{i + 1}</span>
                <span className="sys-areas__icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className="sys-both" data-reveal>
            <div className="sys-both__item">
              <Briefcase size={26} aria-hidden="true" />
              <div>
                <h3>לעסק</h3>
                <p>עוסק פטור, עוסק מורשה או חברה — מגדירים פעם אחת.</p>
              </div>
            </div>
            <span className="sys-both__plus" aria-hidden="true">+</span>
            <div className="sys-both__item">
              <Home size={26} aria-hidden="true" />
              <div>
                <h3>למשק הבית</h3>
                <p>באותה מערכת, עם קטגוריות, יעדים ולוח בקרה משלו.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sys-section" id="how">
        <div className="container">
          <div className="sys-head" data-reveal>
            <p className="sys-kicker">איך זה עובד?</p>
            <h2>שלושה צעדים לתמונה ברורה</h2>
          </div>
          <div className="sys-steps">
            {STEPS.map((step, i) => (
              <article className="sys-step" key={step.kicker} data-reveal>
                <div className="sys-step__copy">
                  <p className="sys-step__num">0{i + 1}</p>
                  <p className="sys-kicker">{step.kicker}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <AppWindow>
                  <img src={step.img} alt={step.alt} width={1440} height={900} loading="lazy" />
                </AppWindow>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sys-section sys-section--navy">
        <div className="container">
          <div className="sys-head" data-reveal>
            <p className="sys-kicker">04 · רואים</p>
            <h2>לוח בקרה פיננסי — במבט אחד</h2>
            <p className="sys-lede">ארבע לשוניות, תמונה מלאה. לחצו כדי להציץ.</p>
          </div>
          <div data-reveal>
            <DashboardTour />
          </div>
          <p className="sys-note">המסכים מציגים נתוני הדגמה.</p>
        </div>
      </section>

      <section className="sys-section sys-section--soft" id="plans">
        <div className="container">
          <div className="sys-head" data-reveal>
            <p className="sys-kicker">מסלולים</p>
            <h2>מסלול לכל צורך</h2>
            <p className="sys-lede">החודש הראשון חינם. מנוי חודשי, ביטול בכל עת.</p>
          </div>
          <ul className="sys-plans" data-reveal>
            {PLANS.map((plan) => (
              <li key={plan.name} className={plan.featured ? "is-featured" : undefined}>
                {plan.featured && <span className="sys-plans__badge">הכי מקיף</span>}
                <h3>{plan.name}</h3>
                <p className="sys-plans__scope">{plan.scope}</p>
                {plan.price ? (
                  <>
                    <p className="sys-plans__price">
                      <span className="sys-plans__num">{plan.price}</span>
                      <span className="sys-plans__cur">₪</span>
                      <span className="sys-plans__per">לחודש</span>
                    </p>
                    <p className="sys-plans__free">החודש הראשון חינם</p>
                  </>
                ) : (
                  <>
                    <p className="sys-plans__price sys-plans__price--text">צרו קשר</p>
                    <p className="sys-plans__free">לפרטים נוספים</p>
                  </>
                )}
                <ul className="sys-plans__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.price ? <TrialButton label="להתחיל בחינם" /> : <CtaButton className="cta-btn--ghost" />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="sys-faq">
        <Faq items={FAQ} />
      </div>

      <section className="sys-closing">
        <div className="container sys-closing__inner" data-reveal>
          <Logo className="sys-closing__mark" />
          <h2>
            שליטה פיננסית טובה יותר.
            <br />
            <span>החלטות טובות יותר.</span>
          </h2>
          <TrialButton />
          <p className="sys-closing__fine">החודש הראשון חינם · ביטול בכל עת</p>
        </div>
      </section>
    </div>
  );
}
