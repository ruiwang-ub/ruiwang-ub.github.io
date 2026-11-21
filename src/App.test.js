import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

jest.mock("./content/scholar.generated.json", () => ({ citations: 1234, hIndex: 8, updated: "2026-11-20" }));

const ICON_NAMES = [
  "ResearchGate (opens in a new tab)",
  "Google Scholar (opens in a new tab)",
  "LinkedIn (opens in a new tab)",
  "Email",
];

function expectNewTabsForProfiles(links) {
  links.slice(0, 3).forEach((link) => {
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
  expect(links[3]).not.toHaveAttribute("target");
}

afterEach(() => {
  window.history.pushState({}, "", "/");
});

test("renders the homepage introduction, main links, and navigation", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 1, name: "Dr. Rui Wang" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Dr. Rui Wang" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: "View publications" })).toHaveAttribute("href", "/publication/");
  expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "/contact/");

  const navigation = screen.getByRole("navigation", { name: "Main" });
  const labels = within(navigation)
    .getAllByRole("link")
    .map((link) => link.textContent);
  expect(labels).toEqual([
    "Home",
    "About Me",
    "Research",
    "Publication",
    "Teaching",
    "Teaching Philosophy",
    "Courses",
    "Student Voices",
    "CV",
    "Contact",
  ]);
  expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
});

test("opens the Research and Teaching dropdowns from their arrow buttons", () => {
  render(<App />);

  const research = screen.getByRole("button", { name: "Research pages" });
  expect(research).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(research);
  expect(research).toHaveAttribute("aria-expanded", "true");
  const researchMenu = document.getElementById(research.getAttribute("aria-controls"));
  expect(within(researchMenu).getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual([
    "/publication/",
  ]);

  fireEvent.keyDown(document, { key: "Escape" });
  expect(research).toHaveAttribute("aria-expanded", "false");
  expect(research).toHaveFocus();

  const teaching = screen.getByRole("button", { name: "Teaching pages" });
  fireEvent.click(teaching);
  const teachingMenu = document.getElementById(teaching.getAttribute("aria-controls"));
  expect(within(teachingMenu).getAllByRole("link").map((link) => link.textContent)).toEqual([
    "Teaching Philosophy",
    "Courses",
    "Student Voices",
  ]);
  fireEvent.mouseDown(document.body);
  expect(teaching).toHaveAttribute("aria-expanded", "false");
});

test("shows the four profile icons under the headshot, linked to their destinations", () => {
  render(<App />);

  const photo = screen.getByRole("img", { name: /Illustrated portrait of Rui Wang/ }).parentElement;
  const links = within(photo).getAllByRole("link");
  expect(links.map((link) => link.textContent)).toEqual(ICON_NAMES);
  expect(links.map((link) => link.getAttribute("href"))).toEqual([
    "https://www.researchgate.net/profile/Rui-Wang-23",
    "https://scholar.google.com/citations?user=ZysUK0kAAAAJ&hl=en",
    "https://www.linkedin.com/in/rui-wang-comm/",
    "/contact/",
  ]);
  links.forEach((link) => expect(link.querySelector("svg")).not.toBeNull());
  expectNewTabsForProfiles(links);
});

test("adds the same icon buttons to Contact and keeps the footer to the name and email", () => {
  window.history.pushState({}, "", "/contact/");
  render(<App />);

  const links = within(document.querySelector(".contact__profiles")).getAllByRole("link");
  expect(links.map((link) => link.textContent)).toEqual(ICON_NAMES);
  expectNewTabsForProfiles(links);

  const footer = document.querySelector(".site-footer");
  expect(footer.textContent).toBe(`© ${new Date().getFullYear()} Rui Wangrwang [at] loyola.edu`);
});

test("credits Loyola on each Student Voices excerpt instead of in the introduction", () => {
  window.history.pushState({}, "", "/teaching/student-voices/");
  render(<App />);

  expect(screen.getByText("These excerpts come from student course evaluations.")).toBeInTheDocument();
  const sources = Array.from(document.querySelectorAll(".voice__source")).map((source) => source.textContent);
  expect(sources).toHaveLength(8);
  sources.forEach((source) => expect(source).toMatch(/ · (Spring|Fall) \d{4} · Loyola University Maryland$/));
});

test("uses the same four icon buttons on About Me", () => {
  window.history.pushState({}, "", "/about/");
  render(<App />);

  const summary = screen.getByText("Rui Wang", { selector: ".profile-summary__name" }).parentElement;
  const links = within(summary).getAllByRole("link");
  expect(links.map((link) => link.textContent)).toEqual(ICON_NAMES);
  links.forEach((link) => expect(link.querySelector("svg")).not.toBeNull());
  expectNewTabsForProfiles(links);
});

test("opens the Google Scholar button on Publication in a new tab", () => {
  window.history.pushState({}, "", "/publication/");
  render(<App />);

  const scholar = screen.getByRole("link", { name: "View my Google Scholar profile (opens in a new tab)" });
  expect(scholar).toHaveAttribute("target", "_blank");
  expect(scholar).toHaveAttribute("rel", "noopener noreferrer");
});

test("keeps Current Projects hidden: not linked anywhere and its address shows Page not found", () => {
  window.history.pushState({}, "", "/research/current-projects/");
  render(<App />);

  expect(screen.getByRole("heading", { level: 1, name: "Page not found" })).toBeInTheDocument();
  expect(document.querySelector('a[href="/research/current-projects/"]')).toBeNull();
});

test("shows the Google Scholar citations and h-index on the Research page", () => {
  window.history.pushState({}, "", "/research/");
  render(<App />);

  const stats = document.querySelector(".scholar-stats");
  const items = Array.from(stats.querySelectorAll(".scholar-stats__item")).map((item) => [
    item.querySelector("dt").textContent,
    item.querySelector("dd").textContent,
  ]);
  expect(items).toEqual([
    ["Citations", "1,234"],
    ["h-index", "8"],
  ]);
  const source = within(stats).getByRole("link", { name: "Google Scholar (opens in a new tab)" });
  expect(source).toHaveAttribute("href", "https://scholar.google.com/citations?user=ZysUK0kAAAAJ&hl=en");
  expect(source).toHaveAttribute("target", "_blank");
  expect(source).toHaveAttribute("rel", "noopener noreferrer");
  expect(stats).toHaveTextContent("Google Scholar (opens in a new tab) · updated November 20, 2026");
});

test("lists only Publication on the Research landing page while Current Projects is hidden", () => {
  window.history.pushState({}, "", "/research/");
  render(<App />);

  const list = document.querySelector(".link-list");
  expect(within(list).getAllByRole("link").map((link) => link.textContent)).toEqual(["Publication"]);
});

test("shows the CV online with a Download button to the Google Drive link", () => {
  window.history.pushState({}, "", "/cv/");
  render(<App />);

  expect(screen.getByRole("heading", { level: 1, name: "CV" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute(
    "href",
    "https://drive.google.com/file/d/1l827_OaLB32tbmqbS3XhDQYlMagTJ0P4/view?usp=sharing"
  );
  expect(screen.getByTitle("Rui Wang’s CV")).toHaveAttribute(
    "src",
    "https://drive.google.com/file/d/1l827_OaLB32tbmqbS3XhDQYlMagTJ0P4/preview"
  );
});

test("shows the email as rwang [at] loyola.edu and builds the mail link only on click", () => {
  render(<App />);

  expect(document.body.innerHTML).not.toContain("@loyola.edu");
  const footerEmail = screen.getByRole("link", { name: "rwang [at] loyola.edu" });
  const stopNavigation = (event) => event.preventDefault();
  document.addEventListener("click", stopNavigation);
  fireEvent.click(footerEmail);
  document.removeEventListener("click", stopNavigation);
  expect(footerEmail.getAttribute("href")).toBe(["mailto:rwang", "loyola.edu"].join("@"));
});

test("shows the eight newest news entries, newest first, with no ICA or AEJMC entries", () => {
  render(<App />);

  const section = screen.getByRole("heading", { level: 2, name: "Recent News" }).closest("section");
  const headlines = within(section)
    .getAllByRole("heading", { level: 3 })
    .map((heading) => heading.textContent);
  expect(headlines).toHaveLength(8);
  expect(headlines[0]).toBe("Peer Reviewer Award");
  expect(headlines[7]).toBe("Political influencers and media bashing");
  expect(document.querySelector("main").textContent).not.toMatch(/\bICA\b|AEJMC/);
});
