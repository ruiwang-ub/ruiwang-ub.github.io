import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

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
    "Current Projects",
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
    "/research/current-projects/",
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
  expect(links.map((link) => link.textContent)).toEqual(["ResearchGate", "Google Scholar", "LinkedIn", "Email"]);
  expect(links.map((link) => link.getAttribute("href"))).toEqual([
    "https://www.researchgate.net/profile/Rui-Wang-23",
    "https://scholar.google.com/citations?user=ZysUK0kAAAAJ&hl=en",
    "https://www.linkedin.com/in/rui-wang1993/",
    "/contact/",
  ]);
  links.forEach((link) => expect(link.querySelector("svg")).not.toBeNull());
});

test("uses the same four icon buttons on About Me", () => {
  window.history.pushState({}, "", "/about/");
  render(<App />);

  const summary = screen.getByText("Rui Wang", { selector: ".profile-summary__name" }).parentElement;
  const links = within(summary).getAllByRole("link");
  expect(links.map((link) => link.textContent)).toEqual(["ResearchGate", "Google Scholar", "LinkedIn", "Email"]);
  links.forEach((link) => expect(link.querySelector("svg")).not.toBeNull());
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

test("shows the eight newest news entries, newest first", () => {
  render(<App />);

  const section = screen.getByRole("heading", { level: 2, name: "Recent News" }).closest("section");
  const headlines = within(section)
    .getAllByRole("heading", { level: 3 })
    .map((heading) => heading.textContent);
  expect(headlines).toHaveLength(8);
  expect(headlines[0]).toBe("Peer Reviewer Award");
  expect(headlines[7]).toBe("Faculty Research Grant");
});
