const courses = [
  {
    institution: "Loyola University Maryland",
    courses: [
      {
        code: "CM 202",
        title: "Digital Tools",
        role: "Undergraduate · Taught",
        semesters: "F25, S26, F26",
        summary:
          "Students create digital communication projects, including websites and short-form videos.",
      },
      {
        code: "CM 321",
        title: "Mobile Media & UX Design",
        role: "Undergraduate · Taught",
        semesters: "S26",
        summary:
          "Students research user needs, prototype a mobile app, and test its usability.",
      },
      {
        code: "ME 725",
        title: "Emerging Media Platforms",
        role: "Graduate · Taught",
        semesters: "F26",
        summary:
          "Students study how people and organizations use emerging platforms and develop practical media strategies and workflows.",
      },
      {
        title: "AI and Communication",
        role: "Undergraduate · In development",
        semesters: "S27 (planned)",
        inDevelopment: true,
        summary:
          "Students evaluate AI-generated information and use generative AI to prototype websites and communication workflows.",
      },
      {
        title: "AI in Emerging Media (working title)",
        role: "Graduate · In development",
        semesters: "TBD",
        inDevelopment: true,
        summary:
          "Students examine how AI shapes media and audiences and develop practical workflows for content creation and analysis.",
      },
    ],
    links: [
      { label: "Loyola undergraduate course listings", url: "" },
      {
        label: "Loyola graduate course descriptions",
        url: "https://www.loyola.edu/academics/communication/graduate/course-descriptions.html",
      },
    ],
  },
  {
    institution: "University at Buffalo",
    courses: [
      {
        code: "COM 337",
        title: "Communication Theory",
        role: "Lecturer and, in an earlier term, teaching assistant",
        semesters: "F22, S23 (lecturer), S22 (teaching assistant)",
      },
      {
        code: "COM 101",
        title: "Introduction to Communication",
        role: "Teaching assistant",
        semesters: "F21",
      },
    ],
  },
  {
    institution: "Anhui Normal University",
    courses: [
      { title: "Communication Theory", role: "Lecturer", semesters: "F18, F19, S20" },
      { title: "Data Journalism Visualization and Storytelling", role: "Lecturer", semesters: "S19, S20" },
      { title: "Web Development and Production", role: "Lecturer", semesters: "F18, F19" },
    ],
  },
  {
    institution: "Rutgers University–New Brunswick",
    courses: [
      {
        code: "COMM 101",
        title: "Introduction to Information and Communication Processes",
        role: "Teaching assistant",
        semesters: "S17, F17, S18",
      },
    ],
  },
];

export default courses;
