import profile from "../content/profile";
import stats from "../content/scholar.generated.json";
import { citationMetrics } from "../lib/citations";

export default function ScholarStats() {
  const metrics = citationMetrics(stats);
  if (!metrics) {
    return null;
  }

  return (
    <div className="scholar-stats">
      <dl className="scholar-stats__list">
        {metrics.items.map((item) => (
          <div className="scholar-stats__item" key={item.label}>
            <dt className="scholar-stats__label">{item.label}</dt>
            <dd className="scholar-stats__value">{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="scholar-stats__source">
        <a href={profile.scholar.url} target="_blank" rel="noopener noreferrer">
          Google Scholar
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        {metrics.updated ? ` · updated ${metrics.updated}` : null}
      </p>
    </div>
  );
}
