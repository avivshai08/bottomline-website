import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

export default function Faq({
  items,
  title = "יש לכם שאלות?",
}: {
  items: FaqItem[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="home-drawing-section">
      <div className="container narrow">
        <div className="section-head">
          <h2 className="faq__title">{title}</h2>
        </div>
        <div className="faq">
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-a-${i}`;
            return (
              <div key={item.q} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={20} />
                </button>
                <div id={panelId} className="faq__a">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
