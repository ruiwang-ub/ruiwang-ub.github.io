import { splitTerms } from "./terms";

test("expands F and S semester codes and keeps the role notes", () => {
  expect(splitTerms("F22, S23 (lecturer), S22 (teaching assistant)")).toEqual([
    { code: "F22", label: "Fall 2022" },
    ", ",
    { code: "S23", label: "Spring 2023" },
    " (lecturer), ",
    { code: "S22", label: "Spring 2022" },
    " (teaching assistant)",
  ]);
});

test("keeps planned and undecided semesters readable", () => {
  expect(splitTerms("S27 (planned)")).toEqual([{ code: "S27", label: "Spring 2027" }, " (planned)"]);
  expect(splitTerms("TBD")).toEqual(["TBD"]);
});
