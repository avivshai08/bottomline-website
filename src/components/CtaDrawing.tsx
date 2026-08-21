import CtaButton from "./CtaButton";
import { CTA_LABEL } from "../content";

type Props = {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  label?: string;
  heading?: string;
  lede?: string;
};

export default function CtaDrawing({
  src,
  alt,
  loading,
  label = CTA_LABEL,
  heading,
  lede,
}: Props) {
  return (
    <div className="cta-drawing">
      <img className="cta-drawing__bg" src={src} alt="" loading={loading} />
      <div className="cta-drawing__inner">
        <CtaButton className="cta-drawing__btn">{label}</CtaButton>
        <div className="cta-drawing__copy">
          <h2>{heading ?? alt}</h2>
          {lede
            ? lede.split("\n").map((line) => <p key={line}>{line}</p>)
            : null}
        </div>
      </div>
    </div>
  );
}
