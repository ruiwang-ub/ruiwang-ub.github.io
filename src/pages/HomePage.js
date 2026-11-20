import { Link } from "react-router-dom";
import Headshot from "../components/Headshot";
import Markdown from "../components/Markdown";
import NewsTimeline from "../components/NewsTimeline";
import Page from "../components/Page";
import ProfileLinks from "../components/ProfileLinks";
import pages from "../content/pages.generated";
import profile from "../content/profile";
import { displayName } from "../lib/identity";

export default function HomePage() {
  return (
    <Page routeKey="home" className="page--home">
      <section className="intro" aria-labelledby="intro-name">
        <div className="intro__text">
          <h1 className="intro__name" id="intro-name">
            {displayName}
          </h1>
          <p className="intro__role">
            {profile.role}, {profile.department}
            <br />
            {profile.affiliation}
          </p>
          <Markdown className="prose intro__bio" source={pages.home} />
          <ul className="actions">
            <li>
              <Link className="button button--primary" to="/publication/">
                View publications
              </Link>
            </li>
            <li>
              <Link className="button" to="/contact/">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
        <div className="intro__photo">
          <Headshot sizes="(min-width: 60rem) 24rem, 18rem" />
          <ProfileLinks className="intro__profiles" variant="icons" />
        </div>
      </section>
      <NewsTimeline />
    </Page>
  );
}
