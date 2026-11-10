import {
  BarChart3,
  ChartColumnIncreasing,
  ClipboardCheck,
  Search,
  SlidersHorizontal,
  Target,
  Users,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";
import CtaButton from "../components/CtaButton";
import CtaDrawing from "../components/CtaDrawing";
import { IMAGES } from "../content";

const HELP = [
  {
    to: "/profit-first",
    title: "רווח לפני הכל",
    text: "להפוך את הרווח להרגל.",
    icon: IMAGES.pfIcon,
    iconAlt: "Profit First",
  },
  {
    to: "/cfo",
    title: "שותף פיננסי",
    text: "להפוך מספרים להחלטות.",
    icon: IMAGES.handshake,
    iconAlt: "שותף פיננסי",
    iconMark: true,
  },
  {
    to: "/business-game",
    title: "משחקים עסקים",
    text: "להבין עסקים דרך התנסות.",
    icon: IMAGES.gameHero,
    iconAlt: "משחקים עסקים",
    iconLg: true,
  },
] as const;

const CRED_TAGS = ["Finance", "FP&A", "Strategy", "Profitability"] as const;

const PROCESS = [
  {
    Icon: Search,
    title: "מבהירים",
    text: "מנתחים, מגדירים מטרות ברורות וקובעים מדדים להצלחה",
  },
  {
    Icon: Target,
    title: "מתמקדים",
    text: "מתעדפים פעולות שיביאו את התוצאות הטובות ביותר",
  },
  {
    Icon: SlidersHorizontal,
    title: "מחליטים",
    text: "מקבלים החלטות טובות יותר. מה לעשות ומה לא לעשות",
  },
  {
    Icon: ClipboardCheck,
    title: "מיישמים",
    text: 'מיישמים בעקביות ע"י הגדרת תהליכים ומערכת בעסק',
  },
  {
    Icon: ChartColumnIncreasing,
    title: "משתפרים",
    text: "מודדים תוצאות, לומדים וממשיכים להשתפר",
  },
] as const;

const WHY = [
  {
    Icon: Users,
    title: "שותפות אמיתית",
    text: "שותפים לדרך, לא רק יועצים מהצד",
  },
  {
    Icon: BarChart3,
    title: "החלטות מבוססות נתונים",
    text: "מהמספרים לתובנות ולהחלטות",
  },
  {
    Icon: Waypoints,
    title: "חשיבה מערכתית",
    text: "רואים את התמונה המלאה, לא רק את המספרים",
  },
  {
    Icon: Target,
    title: "מה שחשוב באמת",
    text: "מתמקדים במה שמניע רווחיות וצמיחה",
  },
] as const;

export default function About() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <h1>
              אביב שי
              <span className="home-hero__role">השותף הפיננסי שלך</span>
            </h1>
            <p className="home-hero__tagline">בהירות. החלטות. תוצאות.</p>
            <p className="home-hero__lede">
              אני עוזר לבעלי עסקים ומנכ&quot;לים להבין את המספרים, לקבל החלטות
              טובות יותר ולהוביל את העסק לתוצאות.
            </p>
            <CtaButton />
          </div>
          <div className="home-hero__media">
            <img
              src={IMAGES.portrait}
              alt="אביב שי, השותף הפיננסי שלך"
            />
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="container">
          <h2 id="home-services-title">איך אני יכול לעזור?</h2>
          <div className="home-services__grid">
            {HELP.map((card) => (
              <Link to={card.to} className="home-service" key={card.to}>
                {"icon" in card ? (
                  "iconMark" in card ? (
                    <span className="home-service__mark" aria-hidden="true">
                      <img src={card.icon} alt="" />
                    </span>
                  ) : (
                    <img
                      className={`home-service__icon${
                        "iconLg" in card ? " home-service__icon--lg" : ""
                      }`}
                      src={card.icon}
                      alt={card.iconAlt}
                    />
                  )
                ) : (
                  <span className="home-service__rule" aria-hidden="true" />
                )}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="home-service__arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cred" aria-labelledby="home-cred-title">
        <div className="container home-cred__grid">
          <div className="home-cred__media">
            <img
              src={IMAGES.presentingHd}
              alt="אביב שי, השותף הפיננסי שלך"
              loading="lazy"
            />
          </div>
          <div className="home-cred__copy">
            <h2 id="home-cred-title">ניסיון יוצר פרספקטיבה</h2>
            <p className="home-cred__stat">
              <span className="home-cred__num" dir="ltr">
                25+
              </span>
              <span className="home-cred__unit">שנות ניסיון</span>
            </p>
            <p className="home-cred__lede">
              <span dir="ltr">25+</span> שנות ניסיון בפיננסים, FP&amp;A, ניהול
              וקבלת החלטות — בסביבות עסקיות מורכבות ובתפקידי finance leadership.
            </p>
            <ul className="home-cred__tags">
              {CRED_TAGS.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="drawing-stack">
        <section className="home-drawing-section" aria-labelledby="about-approach-title">
          <div className="container">
            <div className="about-approach">
              <div className="about-approach__title">
                <h2 id="about-approach-title">הגישה שלי</h2>
                <p>
                  ניסיון פיננסי של החברות הגדולות
                  <br />
                  לטובת העסק שלך
                </p>
              </div>
              <div className="about-approach__copy">
                <p>
                  עסק מצליח נבנה לא רק מתוך תשוקה, מקצועיות ועבודה קשה, אלא גם
                  מתוך יכולת לקבל החלטות פיננסיות נכונות בזמן הנכון. בעלי עסקים
                  רבים מגיעים לנקודת צמיחה שבה האתגרים משתנים: ההכנסות גדולות,
                  הצוות מתרחב, ההחלטות הופכות מורכבות יותר, אבל הכלים הפיננסיים
                  והניהוליים שהביאו אותם עד לכאן כבר אינם מספיקים.
                </p>
                <p>
                  <strong>וכאן אני נכנס לתמונה.</strong>
                </p>
                <h3>ניסיון פיננסי של החברות הגדולות לטובת העסק שלך</h3>
                <p>
                  במשך יותר מ-<span dir="ltr">25</span> שנים עסקתי בניהול פיננסי,
                  תכנון אסטרטגי וקבלת החלטות עסקיות בסביבה גלובלית מורכבת.
                  במסגרת עבודתי מילאתי תפקידי ניהול בכירים בתחום הכספים בחברות
                  בישראל ובארה&quot;ב, שם הובלתי תהליכי תכנון, ניתוח ביצועים,
                  בניית תקציבים וקבלת החלטות עסקיות בהיקפים משמעותיים.
                </p>
                <p>
                  לאורך השנים למדתי שהמספרים עצמם הם רק חלק מהתמונה. הערך האמיתי
                  של הפיננסים נמצא ביכולת להפוך מידע לתובנות, ותובנות להחלטות
                  שמקדמות את העסק.
                </p>
              </div>
            </div>
            <ol className="about-process">
              {PROCESS.map((item, index) => (
                <li key={item.title} className="about-process__item">
                  {index > 0 ? (
                    <span className="about-process__arrow" aria-hidden="true" />
                  ) : null}
                  <div className="about-process__step">
                    <span className="about-process__icon">
                      <item.Icon strokeWidth={1.6} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="home-drawing-section" aria-labelledby="about-why-title">
          <div className="container">
            <div className="about-why">
              <h2 id="about-why-title">למה לעבוד איתי?</h2>
              <p className="about-why__lede">
                אני מייצר בהירות, מחבר בין מספרים{" "}
                <span className="about-why__keep">
                  להחלטות,{" "}
                  <br className="about-why__lede-break" />
                  בין היום למחר
                </span>{" "}
                ובין אסטרטגיה לביצוע.
              </p>
              <ul className="about-why__grid">
                {WHY.map((item) => (
                  <li key={item.title}>
                    <span className="about-why__icon">
                      <item.Icon strokeWidth={1.6} />
                    </span>
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
            <div className="panel-block">
              <p className="lede lede--statement">
                הצלחה עסקית נמדדת לא במחזור ההכנסות, אלא בערך שהעסק מייצר לבעליו.
                המטרה שלי היא לעזור לבעלי עסקים ליצור עסק רווחי, יציב ובשל יותר,
                שמאפשר להם לבנות את העתיד שאליו הם שואפים. העקרון המנחה הוא שבהירות
                טובה יותר מביאה להחלטות נכונות יותר שיוצרות תוצאות טובות יותר ואני
                אתכם לאורך כל הדרך.
              </p>
            </div>
          </div>
        </section>

        <section className="home-cta-banner">
          <div className="container">
            <CtaDrawing
              src={IMAGES.ctaBanner}
              alt="בואו נדבר על העסק שלכם — קבעו שיחת היכרות"
              heading="בואו נדבר על העסק שלכם"
              lede="שיחה קצרה יכולה לעשות הבדל גדול"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </>
  );
}
