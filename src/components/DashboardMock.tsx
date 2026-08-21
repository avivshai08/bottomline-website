export default function DashboardMock() {
  return (
    <div className="dash-wrap">
      <div className="dash-screen">
        <div className="dash-kpis">
          <div className="dash-kpi">
            <span>הכנסות</span>
            <strong>2.48M</strong>
          </div>
          <div className="dash-kpi">
            <span>רווח גולמי</span>
            <strong>842K</strong>
          </div>
          <div className="dash-kpi">
            <span>רווח תפעולי</span>
            <strong>320K</strong>
          </div>
          <div className="dash-kpi">
            <span>תזרים מזומנים</span>
            <strong>615K</strong>
          </div>
        </div>
        <div className="dash-charts">
          <svg className="dash-line" viewBox="0 0 280 110" aria-hidden="true">
            <polyline
              fill="none"
              stroke="#6EC8C8"
              strokeWidth="3"
              points="8,88 48,76 88,80 128,52 168,58 208,28 268,18"
            />
            <polyline
              fill="rgba(110,200,200,0.18)"
              stroke="none"
              points="8,88 48,76 88,80 128,52 168,58 208,28 268,18 268,110 8,110"
            />
          </svg>
          <svg className="dash-pie" viewBox="0 0 42 42" aria-hidden="true">
            <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="#1a3a4d" strokeWidth="8" />
            <circle
              cx="21"
              cy="21"
              r="15.9"
              fill="transparent"
              stroke="#6EC8C8"
              strokeWidth="8"
              strokeDasharray="40 100"
              strokeDashoffset="25"
            />
            <circle
              cx="21"
              cy="21"
              r="15.9"
              fill="transparent"
              stroke="#E8A03A"
              strokeWidth="8"
              strokeDasharray="22 100"
              strokeDashoffset="-15"
            />
            <circle
              cx="21"
              cy="21"
              r="15.9"
              fill="transparent"
              stroke="#7B6BB0"
              strokeWidth="8"
              strokeDasharray="18 100"
              strokeDashoffset="-37"
            />
          </svg>
        </div>
      </div>
      <div className="mug" aria-hidden="true">
        <div className="mug__cup">B.</div>
        <div className="mug__handle" />
      </div>
    </div>
  );
}
