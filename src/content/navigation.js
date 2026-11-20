import { isVisible } from "../lib/routes";

const visible = (page) => isVisible(page.key);

export const primaryNav = [
  { key: "home", label: "Home", path: "/" },
  { key: "about", label: "About Me", path: "/about/" },
  { key: "research", label: "Research", path: "/research/", section: "research" },
  { key: "teaching", label: "Teaching", path: "/teaching/", section: "teaching" },
  { key: "cv", label: "CV", path: "/cv/" },
  { key: "contact", label: "Contact", path: "/contact/" },
].filter(visible);

export const researchPages = [
  {
    key: "currentProjects",
    label: "Current Projects",
    path: "/research/current-projects/",
    description:
      "Four studies in progress on AI search, AI-generated answers, AI disclosure in news, and political identity on Reddit.",
  },
  {
    key: "publication",
    label: "Publication",
    path: "/publication/",
    description:
      "Selected publications and related work, grouped by research area, with links to each article.",
  },
].filter(visible);

export const teachingPages = [
  {
    key: "teachingPhilosophy",
    label: "Teaching Philosophy",
    path: "/teaching/philosophy/",
    description:
      "How I bring research into the classroom, give students work they can use, and revise courses as technology changes.",
  },
  {
    key: "courses",
    label: "Courses",
    path: "/teaching/courses/",
    description:
      "Courses I teach and am developing at Loyola, plus earlier courses at the University at Buffalo, Anhui Normal University, and Rutgers.",
  },
  {
    key: "studentVoices",
    label: "Student Voices",
    path: "/teaching/student-voices/",
    description:
      "Excerpts from student course evaluations.",
  },
].filter(visible);

export const sectionPages = {
  research: researchPages,
  teaching: teachingPages,
};

export const sections = {
  research: ["/research/", ...researchPages.map((page) => page.path)],
  teaching: ["/teaching/", ...teachingPages.map((page) => page.path)],
};
