import { FaEnvelope, FaGoogleScholar, FaLinkedinIn, FaResearchgate } from "react-icons/fa6";
import profile from "../content/profile";
import EmailLink from "./EmailLink";

const ICONS = {
  researchgate: FaResearchgate,
  "google-scholar": FaGoogleScholar,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
};

function LinkContent({ id, label, showIcon, opensNewTab }) {
  const Icon = ICONS[id];
  const hint = opensNewTab ? <span className="visually-hidden"> (opens in a new tab)</span> : null;
  if (!showIcon || !Icon) {
    return (
      <>
        {label}
        {hint}
      </>
    );
  }
  return (
    <>
      <Icon aria-hidden="true" focusable="false" />
      <span className="visually-hidden">{label}</span>
      {hint}
    </>
  );
}

export default function ProfileLinks({ className, variant = "text" }) {
  const showIcon = variant === "icons";
  const classes = ["profile-links", showIcon ? "profile-links--icons" : null, className];

  return (
    <ul className={classes.filter(Boolean).join(" ")}>
      {profile.links.map((link) => (
        <li key={link.id}>
          <a href={link.url} title={showIcon ? link.label : undefined} target="_blank" rel="noopener noreferrer">
            <LinkContent id={link.id} label={link.label} showIcon={showIcon} opensNewTab />
          </a>
        </li>
      ))}
      <li>
        <EmailLink title={showIcon ? "Email" : undefined}>
          <LinkContent id="email" label="Email" showIcon={showIcon} />
        </EmailLink>
      </li>
    </ul>
  );
}
