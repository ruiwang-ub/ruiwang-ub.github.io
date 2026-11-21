import { formatNewsDate } from "./news";

export function citationMetrics(stats) {
  if (!stats || !Number.isInteger(stats.citations) || !Number.isInteger(stats.hIndex)) {
    return null;
  }
  return {
    items: [
      { label: "Citations", value: stats.citations.toLocaleString("en-US") },
      { label: "h-index", value: stats.hIndex.toLocaleString("en-US") },
    ],
    updated: stats.updated ? formatNewsDate(stats.updated) : null,
  };
}
