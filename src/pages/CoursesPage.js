import CourseEntry from "../components/CourseEntry";
import Page from "../components/Page";
import SectionNav from "../components/SectionNav";
import courseGroups from "../content/courses";
import { teachingPages } from "../content/navigation";
import { slugify } from "../lib/paths";

function CourseGroup({ group }) {
  const id = slugify(group.institution);
  const taught = group.courses.filter((course) => !course.inDevelopment);
  const inDevelopment = group.courses.filter((course) => course.inDevelopment);
  const links = (group.links || []).filter((link) => link.url);

  return (
    <section className="area" aria-labelledby={id}>
      <h2 className="area__title" id={id}>
        {group.institution}
      </h2>
      <ul className="entries">
        {taught.map((course) => (
          <CourseEntry key={`${course.code || ""}${course.title}`} course={course} headingLevel={3} />
        ))}
      </ul>
      {inDevelopment.length ? (
        <>
          <h3 className="area__subtitle">In development</h3>
          <ul className="entries">
            {inDevelopment.map((course) => (
              <CourseEntry key={course.title} course={course} headingLevel={4} />
            ))}
          </ul>
        </>
      ) : null}
      {links.length ? (
        <p className="area__links">
          {links.map((link, index) => (
            <span key={link.url}>
              {index > 0 ? " · " : ""}
              <a href={link.url}>{link.label}</a>
            </span>
          ))}
        </p>
      ) : null}
    </section>
  );
}

export default function CoursesPage() {
  return (
    <Page
      routeKey="courses"
      heading="Courses"
      sectionNav={<SectionNav label="Teaching" landing="/teaching/" items={teachingPages} />}
    >
      <p className="courses__legend">Semesters: F = Fall, S = Spring</p>
      {courseGroups.map((group) => (
        <CourseGroup key={group.institution} group={group} />
      ))}
    </Page>
  );
}
