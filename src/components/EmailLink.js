import { emailText, mailtoHref } from "../lib/identity";

export default function EmailLink({ className, title, children }) {
  function revealAddress(event) {
    event.currentTarget.href = mailtoHref();
  }

  return (
    <a className={className} href="/contact/" title={title} onClick={revealAddress}>
      {children || emailText}
    </a>
  );
}
