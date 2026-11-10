import { FormEvent, useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import WhatsAppIcon from "../components/WhatsAppIcon";
import CtaButton from "../components/CtaButton";
import { CONTACT, CTA_LABEL } from "../content";

const SERVICES = [
  "שותף פיננסי (CFO במיקור חוץ)",
  "רווח לפני הכל",
  "משחקים עסקים",
  "אחר",
];

const FORM_ACTION = "https://formsubmit.co/aviv@bottomline.finance";

type Errors = Partial<Record<"name" | "email" | "service", string>>;

export default function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");
  const [nextUrl, setNextUrl] = useState("/contact?sent=1");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
    if (new URLSearchParams(window.location.search).get("sent") === "1") {
      setStatus("ok");
    }
  }, []);

  function validate() {
    const next: Errors = {};
    if (!name.trim()) next.name = "נא למלא שם מלא";
    if (!email.trim()) next.email = "נא למלא אימייל";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "נא להזין כתובת אימייל תקינה";
    }
    if (!service) next.service = "נא לבחור שירות";
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
    <div className="drawing-stack">
      <section className="home-drawing-section">
        <div className="container">
          <div className="contact-hero">
            <p className="eyebrow">צרו קשר</p>
            <h1>בואו נדבר על העסק שלכם</h1>
            <p className="lede">
              שיחה קצרה יכולה לעשות הבדל גדול.
            </p>
          </div>

          <form
            className="form-wrap"
            action={FORM_ACTION}
            method="POST"
            onSubmit={onSubmit}
            noValidate
          >
            <input type="hidden" name="_subject" value="פנייה חדשה מהאתר Bottom line" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input type="hidden" name="_honey" value="" />

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">שם מלא *</label>
                <input
                  id="name"
                  name="שם מלא"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="השם שלכם"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="business">שם העסק</label>
                <input
                  id="business"
                  name="שם העסק"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="שם החברה / העסק"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="email">אימייל *</label>
                <input
                  id="email"
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
                <label htmlFor="phone">טלפון</label>
                <input
                  id="phone"
                  name="טלפון"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="050-0000000"
                  dir="ltr"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="service">באיזה שירות אתם מתעניינים *</label>
              <select
                id="service"
                name="שירות"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">בחרו שירות</option>
                {SERVICES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && <span className="error">{errors.service}</span>}
            </div>
            <div className="field">
              <label htmlFor="message">הודעה (לא חובה)</label>
              <textarea
                id="message"
                name="הודעה"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ספרו לי קצת על העסק שלכם ומה הכי מעסיק אתכם כרגע"
              />
            </div>

            {status === "ok" && (
              <div className="form-status ok">
                תודה! הפנייה נשלחה. אחזור אליכם בהקדם.
              </div>
            )}

            <CtaButton type="submit" full disabled={status === "sending"}>
              {status === "sending" ? "שולחים..." : CTA_LABEL}
            </CtaButton>
          </form>

          <aside className="contact-direct" aria-labelledby="contact-direct-title">
            <h2 id="contact-direct-title">או צרו קשר ישירות</h2>
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
  );
}
