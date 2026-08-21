import { useMemo, useState } from "react";
import CtaButton from "./CtaButton";
import {
  type BucketKey,
  computeAssessment,
  formatPct,
  formatShekel,
  formatSignedShekel,
  parseWholeNumber,
} from "../lib/quickAssessment";

const BUCKETS: { key: BucketKey; label: string; color: string }[] = [
  { key: "profit", label: "רווח", color: "var(--profit)" },
  { key: "owner", label: "שכר הנהלה", color: "var(--owner)" },
  { key: "tax", label: "רשויות", color: "var(--tax)" },
  { key: "opex", label: "הוצאות תפעול", color: "var(--opex)" },
];

type Fields = {
  income: string;
  materials: string;
  vat: string;
  profit: string;
  owner: string;
  tax: string;
  opex: string;
};

const EMPTY: Fields = {
  income: "",
  materials: "",
  vat: "",
  profit: "",
  owner: "",
  tax: "",
  opex: "",
};

function MoneyField({
  id,
  label,
  hint,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (next: string) => void;
}) {
  const display = value === "" ? "" : formatShekel(parseWholeNumber(value));

  return (
    <label className="qa-field" htmlFor={id}>
      <span className="qa-field__label">{label}</span>
      {hint ? <span className="qa-field__hint">{hint}</span> : null}
      <input
        id={id}
        inputMode="numeric"
        autoComplete="off"
        placeholder="0"
        value={display}
        onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))}
      />
    </label>
  );
}

export default function QuickAssessment({
  title = "רוצים לדעת מה באמת קורה בעסק שלכם?",
  lede = "הכניסו את הנתונים הממוצעים לחישוב יעדי החלוקה והפערים מהיעדים",
}: {
  title?: string;
  lede?: string;
}) {
  const [fields, setFields] = useState<Fields>(EMPTY);

  const numbers = useMemo(
    () => ({
      income: parseWholeNumber(fields.income),
      materials: parseWholeNumber(fields.materials),
      vat: parseWholeNumber(fields.vat),
      profit: parseWholeNumber(fields.profit),
      owner: parseWholeNumber(fields.owner),
      tax: parseWholeNumber(fields.tax),
      opex: parseWholeNumber(fields.opex),
    }),
    [fields]
  );

  const result = useMemo(() => computeAssessment(numbers), [numbers]);
  const hasIncome = fields.income !== "";

  function setField(key: keyof Fields) {
    return (next: string) => setFields((prev) => ({ ...prev, [key]: next }));
  }

  return (
    <div className="qa">
      <div className="qa-head">
        <p className="eyebrow">מחשבון הערכה מהירה</p>
        <h2 id="qa-title">{title}</h2>
        <p className="lede">{lede}</p>
      </div>

      <div className="qa-grid">
        <div className="qa-card">
          <h3>הכנסות והוצאות כרוכות</h3>
          <MoneyField
            id="qa-income"
            label="הכנסה"
            value={fields.income}
            onChange={setField("income")}
          />
          <MoneyField
            id="qa-materials"
            label="הוצאות כרוכות"
            hint="חומרי גלם, קבלני משנה והוצאות ישירות לייצור ההכנסה"
            value={fields.materials}
            onChange={setField("materials")}
          />
          <MoneyField
            id="qa-vat"
            label='מע"מ'
            value={fields.vat}
            onChange={setField("vat")}
          />
          <div className="qa-real">
            <span>הכנסה אמיתית (מחושב)</span>
            <strong>
              {hasIncome ? `₪${formatShekel(result.realRevenue)}` : "—"}
            </strong>
          </div>
          {hasIncome && result.realRevenue <= 0 ? (
            <p className="qa-warn">
              ההוצאות הכרוכות ומע&quot;מ גבוהים מההכנסה. בדקו את הסכומים.
            </p>
          ) : null}
        </div>

        <div className="qa-card">
          <h3>מצב נוכחי</h3>
          {BUCKETS.map((bucket) => (
            <MoneyField
              key={bucket.key}
              id={`qa-${bucket.key}`}
              label={bucket.label}
              value={fields[bucket.key]}
              onChange={setField(bucket.key)}
            />
          ))}
        </div>
      </div>

      {result.band && result.buckets ? (
        <div className="qa-results">
          <div className="qa-results__meta">
            <p>
              יעדים לפי הכנסה שנתית אמיתית של{" "}
              <strong>₪{formatShekel(result.annual)}</strong>
            </p>
          </div>
          <div className="qa-table-wrap">
            <table className="qa-table">
              <thead>
                <tr>
                  <th>סעיף</th>
                  <th>מצב נוכחי</th>
                  <th>יעד אחוזים</th>
                  <th>יעד הקצאה</th>
                  <th>פער מהיעד</th>
                </tr>
              </thead>
              <tbody>
                {result.buckets.map((row) => {
                  const meta = BUCKETS.find((item) => item.key === row.key);
                  if (!meta) return null;
                  const gapClass =
                    row.gap < 0 ? "is-neg" : row.gap > 0 ? "is-pos" : "";
                  return (
                    <tr key={row.key}>
                      <td>
                        <span
                          className="qa-dot"
                          style={{ background: meta.color }}
                        />
                        {meta.label}
                      </td>
                      <td>₪{formatShekel(row.current)}</td>
                      <td>{formatPct(row.targetPct)}</td>
                      <td>₪{formatShekel(row.targetAmount)}</td>
                      <td className={gapClass}>
                        <span dir="ltr">₪{formatSignedShekel(row.gap)}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="qa-legend">
            פער חיובי = מתחת ליעד. פער שלילי = מעל היעד.
          </p>
        </div>
      ) : null}

      <div className="qa-cta">
        <p>רוצים אבחון מלא ומותאם לעסק?</p>
        <CtaButton />
      </div>
    </div>
  );
}
