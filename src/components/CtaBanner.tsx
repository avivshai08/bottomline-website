import CtaButton from "./CtaButton";

type Props = {
  title: string;
  sub: string;
  dark?: boolean;
};

export default function CtaBanner({ title, sub, dark = true }: Props) {
  return (
    <section className={`cta-banner ${dark ? "cta-banner--dark" : ""}`}>
      <div className="container cta-banner__inner">
        <h2>{title}</h2>
        <p>{sub}</p>
        <CtaButton />
      </div>
    </section>
  );
}
