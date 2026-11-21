import LinkList from "../components/LinkList";
import Markdown from "../components/Markdown";
import Page from "../components/Page";
import ScholarStats from "../components/ScholarStats";
import { researchPages } from "../content/navigation";
import pages from "../content/pages.generated";

export default function ResearchPage() {
  return (
    <Page routeKey="research" heading="Research">
      <Markdown className="prose lede" source={pages.research} />
      <ScholarStats />
      <LinkList items={researchPages} />
    </Page>
  );
}
