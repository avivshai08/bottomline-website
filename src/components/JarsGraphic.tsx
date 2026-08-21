const JARS = [
  { label: "Profit", color: "#3D9A5F" },
  { label: "Owner's Comp", color: "#2B8A9A" },
  { label: "Tax", color: "#E8A03A" },
  { label: "Operating Expenses", color: "#7B6BB0" },
];

export default function JarsGraphic() {
  return (
    <div className="jars" aria-hidden="true">
      {JARS.map((jar) => (
        <div key={jar.label} className="jar">
          <div className="jar__glass">
            <div className="jar__fill" style={{ background: jar.color }} />
          </div>
          <div className="jar__lid" />
          <span className="jar__label">{jar.label}</span>
        </div>
      ))}
    </div>
  );
}
