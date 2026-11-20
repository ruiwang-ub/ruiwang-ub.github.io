import profile from "../content/profile";

function separator(index, count) {
  if (index === 0) {
    return "";
  }
  if (index === count - 1) {
    return count > 2 ? ", and " : " and ";
  }
  return ", ";
}

function Authors({ names }) {
  return names.map((name, index) => (
    <span key={name}>
      {separator(index, names.length)}
      {name === profile.name ? <strong>{name}</strong> : name}
    </span>
  ));
}

export default function WorkEntry({ work }) {
  const href = work.doi ? `https://doi.org/${work.doi}` : work.url;

  return (
    <li className="entry">
      <h3 className="entry__title">{href ? <a href={href}>{work.title}</a> : work.title}</h3>
      {work.authors ? (
        <p className="entry__meta">
          <Authors names={work.authors} />
        </p>
      ) : null}
      <p className="entry__meta">
        <cite className="entry__venue">{work.venue}</cite>
        {work.details ? `, ${work.details}` : ""}
        {` · ${work.year}`}
        {work.type ? ` · ${work.type}` : ""}
      </p>
      {work.note ? <p className="entry__note">{work.note}</p> : null}
      {work.doi ? (
        <p className="entry__link">
          <a href={href}>{href}</a>
        </p>
      ) : null}
    </li>
  );
}
