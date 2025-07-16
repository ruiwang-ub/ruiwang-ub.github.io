import React from "react";
import { Container } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid as="footer" className="footer">
      <div className="footer-inner">
        <span className="footer-text">
          © {year} Rui Wang – Communication Researcher ·
          <a href="mailto:rwang@loyola.edu" className="footer-mail"> rwang@loyola.edu</a>
        </span>
        <SocialMedia />
      </div>
    </Container>
  );
}

export default Footer;
