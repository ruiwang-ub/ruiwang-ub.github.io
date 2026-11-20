import { Link } from "react-router-dom";
import Page from "../components/Page";

const meta = {
  title: "Page not found | Rui Wang",
  description: "The page you were looking for isn’t on Rui Wang’s website.",
  path: "/404/",
  noindex: true,
};

export default function NotFoundPage() {
  return (
    <Page meta={meta} heading="Page not found">
      <div className="prose lede">
        <p>
          This page doesn’t exist. Try the <Link to="/">homepage</Link> or the{" "}
          <Link to="/publication/">Publication</Link> page.
        </p>
      </div>
    </Page>
  );
}
