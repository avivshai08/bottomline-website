import { IMAGES } from "../content";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      className={className}
      src={IMAGES.logoMark}
      alt=""
      width={1095}
      height={1095}
    />
  );
}
