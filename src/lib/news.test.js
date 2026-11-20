import { formatNewsDate, latestNews, sortNews } from "./news";

test("displays the date precision that was entered", () => {
  expect(formatNewsDate("2026-11-19")).toBe("November 19, 2026");
  expect(formatNewsDate("2026-09")).toBe("September 2026");
  expect(formatNewsDate("2026")).toBe("2026");
});

test("sorts newest first and places less precise dates after precise ones in the same period", () => {
  const entries = [
    { date: "2026", headline: "year only" },
    { date: "2025-12-01", headline: "previous year" },
    { date: "2026-01", headline: "month only" },
    { date: "2026-11-19", headline: "full date" },
    { date: "2026-01-15", headline: "january full date" },
  ];

  expect(sortNews(entries).map((entry) => entry.headline)).toEqual([
    "full date",
    "january full date",
    "month only",
    "year only",
    "previous year",
  ]);
});

test("keeps the collection order for entries with the same date", () => {
  const entries = [
    { date: "2026", headline: "first" },
    { date: "2026", headline: "second" },
  ];

  expect(sortNews(entries).map((entry) => entry.headline)).toEqual(["first", "second"]);
});

test("returns at most eight entries", () => {
  const entries = Array.from({ length: 12 }, (_, index) => ({
    date: `2026-${String(index + 1).padStart(2, "0")}`,
    headline: `entry ${index + 1}`,
  }));

  const latest = latestNews(entries, 8);
  expect(latest).toHaveLength(8);
  expect(latest[0].headline).toBe("entry 12");
});
