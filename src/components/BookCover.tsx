export default function BookCover() {
  return (
    <div className="book" aria-hidden="true">
      <div className="book__spine" />
      <div className="book__front">
        <p className="book__eyebrow">Mike Michalowicz</p>
        <h3>רווח לפני הכל</h3>
        <p className="book__en">Profit First</p>
        <div className="book__rule" />
        <p className="book__sub">הפכו רווח להרגל</p>
      </div>
    </div>
  );
}
