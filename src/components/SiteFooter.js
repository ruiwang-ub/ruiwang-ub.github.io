import profile from "../content/profile";
import EmailLink from "./EmailLink";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          © {year} {profile.name}
        </p>
        <p>
          <EmailLink />
        </p>
      </div>
    </footer>
  );
}
