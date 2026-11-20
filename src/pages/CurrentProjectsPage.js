import { Link } from "react-router-dom";
import EmailLink from "../components/EmailLink";
import Markdown from "../components/Markdown";
import Page from "../components/Page";
import SectionNav from "../components/SectionNav";
import { researchPages } from "../content/navigation";
import pages from "../content/pages.generated";
import { emailText } from "../lib/identity";

export default function CurrentProjectsPage() {
  return (
    <Page
      routeKey="currentProjects"
      heading="Current Projects"
      sectionNav={<SectionNav label="Research" landing="/research/" items={researchPages} />}
      className="page--reading"
    >
      <Markdown className="prose projects" source={pages["current-projects"]} />
      <ul className="actions">
        <li>
          <Link className="button button--primary" to="/contact/">
            Get in touch
          </Link>
        </li>
        <li>
          <EmailLink className="button">Email {emailText}</EmailLink>
        </li>
      </ul>
    </Page>
  );
}
