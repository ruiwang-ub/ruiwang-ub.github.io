import EmailLink from "../components/EmailLink";
import Markdown from "../components/Markdown";
import Page from "../components/Page";
import ProfileLinks from "../components/ProfileLinks";
import pages from "../content/pages.generated";
import profile from "../content/profile";

export default function ContactPage() {
  return (
    <Page routeKey="contact" heading="Contact" className="page--reading">
      <Markdown className="prose lede" source={pages.contact} />
      <p className="contact__email">
        <EmailLink />
      </p>
      {profile.facultyProfileUrl ? (
        <p className="contact__secondary">
          <a href={profile.facultyProfileUrl}>Faculty profile at {profile.affiliation}</a>
        </p>
      ) : null}
      <ProfileLinks className="contact__profiles" variant="icons" />
    </Page>
  );
}
