import profile from "../content/profile";

export const displayName = [profile.honorific, profile.name].filter(Boolean).join(" ");

export const emailText = `${profile.email.user} [at] ${profile.email.domain}`;

export function mailtoHref() {
  return `mailto:${profile.email.user}@${profile.email.domain}`;
}
