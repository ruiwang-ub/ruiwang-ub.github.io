import LinkList from "../components/LinkList";
import Markdown from "../components/Markdown";
import Page from "../components/Page";
import { teachingPages } from "../content/navigation";
import pages from "../content/pages.generated";

export default function TeachingPage() {
  return (
    <Page routeKey="teaching" heading="Teaching">
      <Markdown className="prose lede" source={pages.teaching} />
      <LinkList items={teachingPages} />
    </Page>
  );
}
