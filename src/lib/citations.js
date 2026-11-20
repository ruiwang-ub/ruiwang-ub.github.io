import { MONTHS } from "./dates";

export function citationSummary(scholar) {
  if (!scholar) {
    return null;
  }
  const { citationTotal, citationsAsOf } = scholar;
  if (citationTotal === null || citationTotal === undefined || citationTotal === "") {
    return null;
  }
  const match = /^(\d{4})-(\d{2})$/.exec(String(citationsAsOf || "").trim());
  const month = match ? MONTHS[Number(match[2]) - 1] : null;
  const count = Number(citationTotal);
  if (!month || !Number.isFinite(count)) {
    return null;
  }
  const noun = count === 1 ? "citation" : "citations";
  return `${count.toLocaleString("en-US")} ${noun} · as of ${month} ${match[1]}`;
}
