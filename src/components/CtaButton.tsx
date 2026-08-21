import { Link } from "react-router-dom";
import { CTA_LABEL } from "../content";

type Props = {
  to?: string;
  type?: "button" | "submit";
  className?: string;
  full?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: string;
};

export default function CtaButton({
  to = "/contact",
  type = "button",
  className = "",
  full,
  disabled,
  onClick,
  children = CTA_LABEL,
}: Props) {
  const cls = `cta-btn ${full ? "cta-btn--full" : ""} ${className}`.trim();

  if (type === "submit") {
    return (
      <button type="submit" className={cls} onClick={onClick} disabled={disabled}>
        <span className="cta-btn__arrow" aria-hidden="true" />
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={cls} onClick={onClick}>
      <span className="cta-btn__arrow" aria-hidden="true" />
      {children}
    </Link>
  );
}
