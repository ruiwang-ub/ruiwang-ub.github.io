import { Link, useLocation } from "react-router-dom";
import { withTrailingSlash } from "../lib/paths";

export default function SectionNav({ label, landing, items }) {
  const current = withTrailingSlash(useLocation().pathname);

  return (
    <nav className="section-nav" aria-label={`${label} pages`}>
      <Link
        className="section-nav__label"
        to={landing}
        aria-current={current === landing ? "page" : undefined}
      >
        {label}
      </Link>
      <ul className="section-nav__list">
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path} aria-current={current === item.path ? "page" : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
