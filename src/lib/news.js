import { MONTHS } from "./dates";

const DATE_PATTERN = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/;

export const CATEGORY_LABELS = {
  publication: "Publication",
  conference: "Conference",
  grant: "Grant",
  award: "Award",
  teaching: "Teaching",
  appointment: "Appointment",
};

export function parseNewsDate(value) {
  const match = DATE_PATTERN.exec(String(value).trim());
  if (!match) {
    return null;
  }
  const [, year, month, day] = match;
  return {
    year: Number(year),
    month: month ? Number(month) : null,
    day: day ? Number(day) : null,
  };
}

export function formatNewsDate(value) {
  const date = parseNewsDate(value);
  if (!date || (date.month && !MONTHS[date.month - 1])) {
    return String(value);
  }
  if (date.day) {
    return `${MONTHS[date.month - 1]} ${date.day}, ${date.year}`;
  }
  if (date.month) {
    return `${MONTHS[date.month - 1]} ${date.year}`;
  }
  return String(date.year);
}

function sortKey(value) {
  const date = parseNewsDate(value);
  return date ? [date.year, date.month || 0, date.day || 0] : [0, 0, 0];
}

export function sortNews(entries) {
  return entries
    .map((entry, index) => ({ entry, index, key: sortKey(entry.date) }))
    .sort(
      (a, b) =>
        b.key[0] - a.key[0] ||
        b.key[1] - a.key[1] ||
        b.key[2] - a.key[2] ||
        a.index - b.index
    )
    .map(({ entry }) => entry);
}

export function latestNews(entries, limit = 8) {
  return sortNews(entries).slice(0, limit);
}

export function categoryLabel(category) {
  return CATEGORY_LABELS[category] || category;
}
