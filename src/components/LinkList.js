import { Link } from "react-router-dom";

export default function LinkList({ items }) {
  return (
    <ul className="link-list">
      {items.map((item) => (
        <li key={item.path} className="link-list__item">
          <Link className="link-list__link" to={item.path}>
            {item.label}
          </Link>
          <p className="link-list__description">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
