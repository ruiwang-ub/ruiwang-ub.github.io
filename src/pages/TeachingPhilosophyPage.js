import Markdown from "../components/Markdown";
import Page from "../components/Page";
import SectionNav from "../components/SectionNav";
import { teachingPages } from "../content/navigation";
import pages from "../content/pages.generated";

export default function TeachingPhilosophyPage() {
  return (
    <Page
      routeKey="teachingPhilosophy"
      heading="Teaching Philosophy"
      sectionNav={<SectionNav label="Teaching" landing="/teaching/" items={teachingPages} />}
      className="page--reading"
    >
      <Markdown className="prose" source={pages["teaching-philosophy"]} />
    </Page>
  );
}
