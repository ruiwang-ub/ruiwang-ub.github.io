import React from "react";
import {
  FaLinkedinIn,
  FaGoogle,
  FaResearchgate,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://scholar.google.com/citations?user=ZysUK0kAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
          title="Google Scholar"
        >
          <FaGoogle className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.researchgate.net/profile/Rui-Wang-23"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
          title="ResearchGate"
        >
          <FaResearchgate className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://bsky.app/profile/wangrui.bsky.social"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
          title="Bluesky"
        >
          <FaBluesky className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://x.com/Summer912_"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
          title="Twitter/X"
        >
          <BsTwitterX className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/rui-wang1993/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
          title="LinkedIn"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
