export const primaryNav = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about/" },
  { label: "Research", path: "/research/", section: "research" },
  { label: "Teaching", path: "/teaching/", section: "teaching" },
  { label: "CV", path: "/cv/" },
  { label: "Contact", path: "/contact/" },
];

export const researchPages = [
  {
    label: "Current Projects",
    path: "/research/current-projects/",
    description:
      "Four studies in progress on AI search, AI-generated answers, AI disclosure in news, and political identity on Reddit.",
  },
  {
    label: "Publication",
    path: "/publication/",
    description:
      "Selected publications and related work, grouped by research area, with links to each article.",
  },
];

export const teachingPages = [
  {
    label: "Teaching Philosophy",
    path: "/teaching/philosophy/",
    description:
      "How I bring research into the classroom, give students work they can use, and revise courses as technology changes.",
  },
  {
    label: "Courses",
    path: "/teaching/courses/",
    description:
      "Courses I teach and am developing at Loyola, plus earlier courses at the University at Buffalo, Anhui Normal University, and Rutgers.",
  },
  {
    label: "Student Voices",
    path: "/teaching/student-voices/",
    description:
      "Excerpts from student course evaluations at Loyola University Maryland.",
  },
];

export const sectionPages = {
  research: researchPages,
  teaching: teachingPages,
};

export const sections = {
  research: ["/research/", ...researchPages.map((page) => page.path)],
  teaching: ["/teaching/", ...teachingPages.map((page) => page.path)],
};
