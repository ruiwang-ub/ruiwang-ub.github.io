import Markdown from "../components/Markdown";
import Page from "../components/Page";
import ProfileLinks from "../components/ProfileLinks";
import site from "../config/site.json";
import pages from "../content/pages.generated";
import profile from "../content/profile";

function profilePageData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${site.url}/about/`,
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      worksFor: {
        "@type": "CollegeOrUniversity",
        name: profile.affiliation,
        department: {
          "@type": "Organization",
          name: profile.department,
        },
      },
      alumniOf: profile.alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
      image: `${site.url}${profile.headshot.src}`,
      url: `${site.url}/`,
      sameAs: [...profile.links.map((link) => link.url), profile.facultyProfileUrl].filter(Boolean),
    },
  };
}

export default function AboutPage() {
  return (
    <Page routeKey="about" heading="About Me" jsonLd={profilePageData()} className="page--reading">
      <div className="profile-summary">
        <p className="profile-summary__name">{profile.name}</p>
        <p className="profile-summary__detail">
          {profile.role}, {profile.department}
        </p>
        <p className="profile-summary__detail">{profile.affiliation}</p>
        <ProfileLinks variant="icons" />
      </div>
      <Markdown className="prose" source={pages.about} />
    </Page>
  );
}
