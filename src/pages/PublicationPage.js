import Page from "../components/Page";
import SectionNav from "../components/SectionNav";
import WorkEntry from "../components/WorkEntry";
import { researchPages } from "../content/navigation";
import profile from "../content/profile";
import researchAreas from "../content/publications";

export default function PublicationPage() {
  return (
    <Page
      routeKey="publication"
      heading="Publication"
      sectionNav={<SectionNav label="Research" landing="/research/" items={researchPages} />}
    >
      <div className="scholar">
        <a className="button button--primary" href={profile.scholar.url} target="_blank" rel="noopener noreferrer">
          View my Google Scholar profile
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </div>
      {researchAreas.map((area) => (
        <section className="area" key={area.id} aria-labelledby={area.id}>
          <h2 className="area__title" id={area.id}>
            {area.title}
          </h2>
          <p className="area__intro">{area.description}</p>
          <ul className="entries">
            {area.works.map((work) => (
              <WorkEntry key={work.title} work={work} />
            ))}
          </ul>
        </section>
      ))}
    </Page>
  );
}
