import Page from "../components/Page";
import profile from "../content/profile";

function previewUrl(url) {
  const match = /drive\.google\.com\/file\/d\/([^/?#]+)/.exec(url);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}

export default function CvPage() {
  return (
    <Page routeKey="cv" heading="CV">
      <p className="cv__actions">
        <a className="button button--primary" href={profile.cvUrl}>
          Download
        </a>
      </p>
      <div className="cv__viewer">
        <iframe className="cv__frame" title="Rui Wang’s CV" src={previewUrl(profile.cvUrl)} />
      </div>
    </Page>
  );
}
