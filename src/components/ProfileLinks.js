import { FaEnvelope, FaGoogleScholar, FaLinkedinIn, FaResearchgate } from "react-icons/fa6";
import profile from "../content/profile";
import EmailLink from "./EmailLink";

const ICONS = {
  researchgate: FaResearchgate,
  "google-scholar": FaGoogleScholar,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
};

function LinkContent({ id, label, showIcon }) {
  const Icon = ICONS[id];
  if (!showIcon || !Icon) {
    return label;
  }
  return (
    <>
      <Icon aria-hidden="true" focusable="false" />
      <span className="visually-hidden">{label}</span>
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
          <a href={link.url} title={showIcon ? link.label : undefined}>
            <LinkContent id={link.id} label={link.label} showIcon={showIcon} />
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
