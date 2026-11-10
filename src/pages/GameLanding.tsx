import { FormEvent, useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import CtaButton from "../components/CtaButton";
import GameFormatChart from "../components/GameFormatChart";
import GameGains from "../components/GameGains";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { CONTACT, IMAGES } from "../content";

const FORM_ACTION = "https://formsubmit.co/aviv@bottomline.finance";

const FACTS = [
  {
    Icon: Users,
    title: "למי זה מתאים?",
    text: "מגיל 17 ומעלה. אפשר להצטרף כקבוצה או כיחידים. אין צורך בידע מוקדם – רק בסקרנות, חשיבה יצירתית ורצון ללמוד... ולנצח!",
  },
  {
    Icon: CalendarDays,
    title: "מתי?",
    text: "ימי ראשון (פעם בשבועיים) בשעה 19:00",
  },
  {
    Icon: Clock3,
    title: "משך התכנית",
    text: "4 חודשים.",
    textLine2: "מפגש ראשון בתאריך 18.10.2026",
  },
] as const;

const NOTES = [
  {
    mark: "EN",
    title: "ההדרכה בעברית אולם הסימולציה פועלת באנגלית",
  },
  {
    mark: "4",
    title: "ההתחייבות היא למשך כל התוכנית",
  },
  {
    mark: "15+",
    title: "התוכנית תיפתח במינימום של 15 משתתפים",
  },
] as const;

type Errors = Partial<Record<"name" | "email" | "phone" | "joinAs" | "age", string>>;

export default function GameLanding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [joinAs, setJoinAs] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [ageOk, setAgeOk] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");
  const [nextUrl, setNextUrl] = useState("/hugim?sent=1");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/hugim?sent=1`);
    if (new URLSearchParams(window.location.search).get("sent") === "1") {
      setStatus("ok");
    }
  }, []);

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "נא למלא שם מלא";
    if (!phone.trim()) next.phone = "נא למלא טלפון";
    if (!email.trim()) next.email = "נא למלא אימייל";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "נא להזין כתובת אימייל תקינה";
    }
    if (!joinAs) next.joinAs = "נא לבחור איך מצטרפים";
    if (!ageOk) next.age = "ההרשמה מגיל 17 ומעלה";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setStatus("sending");
  }

  return (
    <>
      <section className="game-intro hugim-hero">
        <div className="container">
          <div className="game-intro__stage">
            <div className="game-intro__media">
              <img
                src={IMAGES.gameHeroPhoto}
                alt="משחקים עסקים — סימולציה עסקית"
              />
            </div>
            <div className="game-intro__copy">
              <h1>
                <span>משחקים</span>
                <span>עסקים</span>
              </h1>
            </div>
          </div>
          <img
            className="hugim-marker"
            src={IMAGES.tealMarker}
            alt=""
          />
          <p className="hugim-tag">יש לכם מה שצריך כדי לנצח?</p>
        </div>
      </section>

      <div className="drawing-stack">
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
                    תכנית <strong>משחקים עסקים</strong> מזמינה אתכם לזירה
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
                    אדרנלין.
                  </p>
                  <p>
                    דרך המשחק נלמד איך עובדים עסקים, נפתח חשיבה עסקית, עבודת
                    צוות, מנהיגות וקבלת החלטות בתנאי אי ודאות.
                  </p>
                </div>
              </div>
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
              <GameFormatChart />
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <GameGains />
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <ul className="hugim-facts">
              {FACTS.map((item) => (
                <li key={item.title}>
                  <span className="hugim-facts__icon" aria-hidden="true">
                    <item.Icon strokeWidth={1.6} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>
                    {item.text}
                    {"textLine2" in item ? (
                      <>
                        <br />
                        {item.textLine2}
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="hugim-notes">
              <h2 className="hugim-notes__head">חשוב לדעת</h2>
              <ul>
                {NOTES.map((item) => (
                  <li key={item.title}>
                    <span className="hugim-notes__mark" dir="ltr" aria-hidden="true">
                      {item.mark}
                    </span>
                    <h3>{item.title}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-drawing-section">
          <div className="container">
            <div className="home-cred__grid hugim-host">
              <div className="home-cred__media">
                <img
                  src={IMAGES.presentingHd}
                  alt="אביב שי"
                  loading="lazy"
                />
              </div>
              <div className="home-cred__copy">
                <p className="eyebrow">על המנחה</p>
                <h2>אביב שי</h2>
                <p className="home-cred__lede">
                  יועץ פיננסי לעסקים ולשעבר מנהל כספים בכיר באינטל בישראל
                  ובארה״ב. מתמחה בהנגשת עקרונות פיננסיים מורכבים בצורה פשוטה
                  וישימה.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-drawing-section" id="register">
          <div className="container">
            <div className="contact-hero">
              <p className="eyebrow">הרשמה</p>
              <h2>לפרטים והרשמה</h2>
              <p className="lede">
                מלאו את הפרטים ואחזור אליכם לתיאום ההצטרפות.
              </p>
            </div>

            <form
              className="form-wrap"
              action={FORM_ACTION}
              method="POST"
              onSubmit={onSubmit}
              noValidate
            >
              <input
                type="hidden"
                name="_subject"
                value="הרשמה לתוכנית משחקים עסקים"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="hidden" name="_honey" value="" />

              <div className="form-row">
                <div className="field">
                  <label htmlFor="gl-name">שם מלא *</label>
                  <input
                    id="gl-name"
                    name="שם מלא"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="השם שלכם"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="gl-phone">טלפון *</label>
                  <input
                    id="gl-phone"
                    name="טלפון"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="050-0000000"
                    dir="ltr"
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="gl-email">אימייל *</label>
                  <input
                    id="gl-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    dir="ltr"
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="gl-join">איך מצטרפים *</label>
                  <select
                    id="gl-join"
                    name="הצטרפות"
                    value={joinAs}
                    onChange={(e) => setJoinAs(e.target.value)}
                  >
                    <option value="">בחרו</option>
                    <option value="יחיד">כיחיד / יחידה</option>
                    <option value="קבוצה">כקבוצה</option>
                  </select>
                  {errors.joinAs && (
                    <span className="error">{errors.joinAs}</span>
                  )}
                </div>
              </div>
              {joinAs === "קבוצה" ? (
                <div className="field">
                  <label htmlFor="gl-size">מספר משתתפים</label>
                  <input
                    id="gl-size"
                    name="מספר משתתפים"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    placeholder="למשל 4"
                    dir="ltr"
                  />
                </div>
              ) : null}
              <div className="field">
                <label htmlFor="gl-message">הודעה (לא חובה)</label>
                <textarea
                  id="gl-message"
                  name="הודעה"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                    placeholder="שאלות, העדפות או פרטים על הקבוצה"
                />
              </div>
              <div className="field field--check">
                <input
                  id="gl-age"
                  name="גיל 17+"
                  type="checkbox"
                  checked={ageOk}
                  onChange={(e) => setAgeOk(e.target.checked)}
                  value="כן"
                />
                <label htmlFor="gl-age">אני בן/בת 17 ומעלה *</label>
              </div>
              {errors.age && <span className="error">{errors.age}</span>}

              {status === "ok" && (
                <div className="form-status ok">
                  תודה! ההרשמה נשלחה. אחזור אליכם בהקדם.
                </div>
              )}

              <CtaButton type="submit" full disabled={status === "sending"}>
                {status === "sending" ? "שולחים..." : "שליחת בקשה"}
              </CtaButton>
            </form>

            <aside className="contact-direct" aria-labelledby="gl-direct-title">
              <h2 id="gl-direct-title">או צרו קשר ישירות</h2>
              <ul>
                <li>
                  <a href={`tel:${CONTACT.phoneTel}`}>
                    <span className="contact-direct__icon" aria-hidden="true">
                      <Phone strokeWidth={1.75} />
                    </span>
                    <span dir="ltr">{CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`}>
                    <span className="contact-direct__icon" aria-hidden="true">
                      <Mail strokeWidth={1.75} />
                    </span>
                    <span dir="ltr">{CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-direct__icon" aria-hidden="true">
                      <WhatsAppIcon />
                    </span>
                    <span>{CONTACT.whatsappLabel}</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
