import { splitTerms } from "../lib/terms";

export default function CourseEntry({ course, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;

  return (
    <li className="entry">
      <Heading className="entry__title">
        {course.code ? `${course.code} · ` : ""}
        {course.title}
      </Heading>
      <p className="entry__meta">{course.role}</p>
      {course.semesters ? (
        <p className="entry__meta entry__terms">
          <span className="visually-hidden">Semesters: </span>
          {splitTerms(course.semesters).map((part, index) =>
            typeof part === "string" ? (
              part
            ) : (
              <abbr key={index} title={part.label}>
                {part.code}
              </abbr>
            )
          )}
        </p>
      ) : null}
      {course.summary ? <p className="entry__note">{course.summary}</p> : null}
    </li>
  );
}
