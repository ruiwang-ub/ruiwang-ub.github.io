import { citationMetrics } from "./citations";

test("leaves the numbers out until both have been fetched", () => {
  expect(citationMetrics(null)).toBeNull();
  expect(citationMetrics({ citations: null, hIndex: null, updated: null })).toBeNull();
  expect(citationMetrics({ citations: 323, hIndex: null, updated: "2026-11-20" })).toBeNull();
});

test("formats the citation count, the h-index, and the date they were read", () => {
  expect(citationMetrics({ citations: 1234, hIndex: 8, updated: "2026-11-20" })).toEqual({
    items: [
      { label: "Citations", value: "1,234" },
      { label: "h-index", value: "8" },
    ],
    updated: "November 20, 2026",
  });
  expect(citationMetrics({ citations: 0, hIndex: 0, updated: null })).toEqual({
    items: [
      { label: "Citations", value: "0" },
      { label: "h-index", value: "0" },
    ],
    updated: null,
  });
});
