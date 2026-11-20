import { citationSummary } from "./citations";

test("hides the citation line until both fields are entered", () => {
  expect(citationSummary({ citationTotal: null, citationsAsOf: "" })).toBeNull();
  expect(citationSummary({ citationTotal: 172, citationsAsOf: "" })).toBeNull();
  expect(citationSummary({ citationTotal: null, citationsAsOf: "2026-11" })).toBeNull();
});

test("formats the total and the verification month", () => {
  expect(citationSummary({ citationTotal: 172, citationsAsOf: "2026-11" })).toBe(
    "172 citations · as of November 2026"
  );
  expect(citationSummary({ citationTotal: 1234, citationsAsOf: "2027-01" })).toBe(
    "1,234 citations · as of January 2027"
  );
  expect(citationSummary({ citationTotal: 1, citationsAsOf: "2026-11" })).toBe(
    "1 citation · as of November 2026"
  );
});
