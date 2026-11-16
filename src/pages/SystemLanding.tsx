import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Briefcase,
  Check,
  CreditCard,
  FileSpreadsheet,
  Home,
  Landmark,
  Maximize2,
  Receipt,
} from "lucide-react";
import CtaButton from "../components/CtaButton";
import Faq from "../components/Faq";
import Logo from "../components/Logo";
import { IMAGES, SYSTEM_SIGNUP_URL, SYSTEM_VIDEO } from "../content";

const PAPERS = [
  { Icon: Landmark, label: "דף בנק" },
  { Icon: CreditCard, label: "פירוט אשראי" },
  { Icon: FileSpreadsheet, label: "קובץ אקסל" },
  { Icon: Receipt, label: "קבלות" },
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
    features: [
      "עסק אחד ומשק בית אחד",
      "משתמש אחד",
      "העלאת דפי בנק וכרטיסי אשראי",
      "סיווג חכם שלומד מכם",
      "יעדים ולוח בקרה מלא",
      "אפשרות שיתוף עם יועץ",
    ],
  },
  {
    name: "מתקדם",
    price: "139",
    scope: "לכמה עסקים",
    features: ["כל מה שיש במסלול הבסיסי", "עד 5 עסקים ועד 5 משקי בית", "עד 3 משתמשים", "מעבר בין העסקים בלחיצה"],
    featured: true,
  },
  {
    name: "יועץ",
    scope: "לרואי חשבון וליועצים פיננסיים",
    features: ["כל מה שיש במסלול המתקדם", "ליווי כמה לקוחות במערכת אחת", "גישה לנתונים שהלקוח שיתף איתכם"],
  },
];

export const FAQ = [
  {
    q: "למי זה מתאים?",
    a: "לכל מי שרוצה לקבל בהירות ושליטה על הכספים שלו, בין אם בעסק ובין אם בבית: לבעלי עסקים — עוסק פטור, עוסק מורשה או חברה — שרוצים לדעת כמה באמת נשאר להם בסוף החודש, ולמי שרוצה לנהל באותה מערכת גם את התקציב של משק הבית. מסלול יועץ מיועד לרואי חשבון וליועצים פיננסיים שמלווים כמה לקוחות.",
  },
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
    q: "האם המערכת מתאימה גם למי שעובד בשיטת פרופיט פירסט?",
    a: "כן, המערכת תומכת במבנה החשבונות של פרופיט פירסט. עם סיום קטלוג הנתונים, בדף היעדים תקבלו תמונה מדויקת של אחוזי החלוקה הנוכחיים בעסק שלכם ע״פ פרופיט פירסט, ותוכלו לקבוע את יעדי החלוקה שלכם. בלוח הבקרה תוכלו לעקוב אחרי ההתקדמות שלכם בהגעה ליעדים. לבעלי עסקים שפועלים ע״פ פרופיט פירסט מומלץ לנסות גם את המערכת לחישוב חלוקות שנמצאת",
    link: { label: "כאן", href: "/profit-first#alloc-tool" },
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

function TrialButton({ label = "להתחיל עכשיו" }: { label?: string }) {
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

  function fullscreen() {
    const video = ref.current;
    if (!video) return;
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
            autoPlay
            muted
            loop
            controls
            playsInline
          />
        </div>
      </AppWindow>
      <button type="button" className="sys-video__full" onClick={fullscreen}>
        <Maximize2 size={16} aria-hidden="true" />
        צפייה במסך מלא
      </button>
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

/** On phones the steps and plans become a swipeable row; tracks which card is in view. */
function useSwipe<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const row = ref.current;
    if (!row) return;
    const onScroll = () => {
      const box = row.getBoundingClientRect();
      const mid = box.left + box.width / 2;
      const distances = Array.from(row.children, (child) => {
        const r = child.getBoundingClientRect();
        return Math.abs(r.left + r.width / 2 - mid);
      });
      setActive(distances.indexOf(Math.min(...distances)));
    };
    row.addEventListener("scroll", onScroll, { passive: true });
    return () => row.removeEventListener("scroll", onScroll);
  }, []);

  function go(index: number) {
    const card = ref.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return { ref, active, go };
}

function SwipeDots({ count, active, go, label }: { count: number; active: number; go: (i: number) => void; label: string }) {
  return (
    <div className="sys-dots">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={i === active ? "is-active" : undefined}
          aria-label={`${label} ${i + 1}`}
          aria-current={i === active}
          onClick={() => go(i)}
        />
      ))}
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
  const steps = useSwipe<HTMLDivElement>();
  const plans = useSwipe<HTMLUListElement>();

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
            </p>
            <p className="sys-chaos__punch">הגיע הזמן לקחת שליטה.</p>
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

      <section className="sys-section" id="how">
        <div className="container">
          <div className="sys-head" data-reveal>
            <p className="sys-kicker">איך זה עובד?</p>
            <h2>3 צעדים לתמונה אחת ברורה</h2>
          </div>
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
          <div className="sys-steps" ref={steps.ref}>
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
          <SwipeDots count={STEPS.length} active={steps.active} go={steps.go} label="צעד" />
        </div>
      </section>

      <section className="sys-section sys-section--navy">
        <div className="container">
          <div className="sys-head" data-reveal>
            <p className="sys-step__num">04</p>
            <p className="sys-kicker">רואים</p>
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
          <ul className="sys-plans" ref={plans.ref} data-reveal>
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
          <SwipeDots count={PLANS.length} active={plans.active} go={plans.go} label="מסלול" />
        </div>
      </section>

      <div className="sys-faq">
        <Faq items={FAQ} />
      </div>

      <section className="sys-closing">
        <div className="container sys-closing__inner" data-reveal>
          <Logo className="sys-closing__mark" />
          <h2>
            שליטה פיננסית טובה יותר,
            <br />
            החלטות טובות יותר,
            <br />
            <span>תוצאות טובות יותר.</span>
          </h2>
          <TrialButton />
        </div>
      </section>
    </div>
  );
}
