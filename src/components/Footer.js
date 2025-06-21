import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Rui Wang - Communication Researcher</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialMedia />
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <p style={{ marginTop: "20px", fontSize: "0.9em" }}>
            ©️Rui Wang - 2025 - <a href="mailto:rwang@loyola.edu">rwang@loyola.edu</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
