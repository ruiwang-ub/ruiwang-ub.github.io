import Markdown from "../components/Markdown";
import Page from "../components/Page";
import SectionNav from "../components/SectionNav";
import { teachingPages } from "../content/navigation";
import pages from "../content/pages.generated";
import studentVoices from "../content/studentVoices";

export default function StudentVoicesPage() {
  return (
    <Page
      routeKey="studentVoices"
      heading="Student Voices"
      sectionNav={<SectionNav label="Teaching" landing="/teaching/" items={teachingPages} />}
    >
      <Markdown className="prose lede" source={pages["student-voices"]} />
      <ul className="voices">
        {studentVoices.map((voice) => (
          <li key={voice.quote}>
            <figure className="voice">
              <blockquote className="voice__quote">
                <p>{voice.quote}</p>
              </blockquote>
              <figcaption className="voice__source">
                {[voice.course, voice.term, voice.institution].filter(Boolean).join(" · ")}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Page>
  );
}
