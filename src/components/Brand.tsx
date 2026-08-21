import { useLayoutEffect, useRef } from "react";
import Logo from "./Logo";

export default function Brand() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const name = nameRef.current;
    const tag = tagRef.current;
    if (!name || !tag) return;

    const fit = () => {
      tag.style.fontSize = "";
      const nameW = name.getBoundingClientRect().width;
      const tagW = tag.getBoundingClientRect().width;
      if (!nameW || !tagW) return;
      const size = parseFloat(getComputedStyle(tag).fontSize);
      tag.style.fontSize = `${(size * nameW) / tagW}px`;
    };

    fit();
    void document.fonts.ready.then(fit);
  }, []);

  return (
    <>
      <Logo className="brand__mark" />
      <span className="brand__text">
        <span className="brand__name" ref={nameRef}>
          Bottom line
        </span>
        <span className="brand__tag" ref={tagRef}>
          Clarity.Decisions.Results.
        </span>
      </span>
    </>
  );
}
