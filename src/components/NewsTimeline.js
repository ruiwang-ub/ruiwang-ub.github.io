import news from "../content/news";
import { categoryLabel, formatNewsDate, latestNews } from "../lib/news";

export default function NewsTimeline() {
  const entries = latestNews(news, 8);

  return (
    <section className="news" aria-labelledby="news-heading">
      <h2 className="section-title" id="news-heading">
        Recent News
      </h2>
      <ol className="timeline">
        {entries.map((entry) => (
          <li className="timeline__item" key={`${entry.date}-${entry.headline}`}>
            <time className="timeline__date" dateTime={entry.date}>
              {formatNewsDate(entry.date)}
            </time>
            <div className="timeline__body">
              <p className="timeline__category">{categoryLabel(entry.category)}</p>
              <h3 className="timeline__headline">{entry.headline}</h3>
              <p className="timeline__text">{entry.text}</p>
              {entry.link && entry.link.url ? (
                <a className="timeline__link" href={entry.link.url}>
                  {entry.link.label}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
