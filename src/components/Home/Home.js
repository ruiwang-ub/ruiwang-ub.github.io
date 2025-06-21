import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import myImg from "../../Assets/rui.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  // Google Scholar metrics from live data
  const scholarMetrics = {
    publications: 14,
    citations: 95,
    hIndex: 5,
    i10Index: 3,
  };

  // Updated news data
  const newsData = [
    {
      date: "5/2025",
      type: "Publication",
      content:
        "Our paper about how political influencers amplified and applied Trump's media-bashing rhetoric is published in Journal of Information Technology and Politics.",
      badgeColor: "primary",
      typeColor: "#007bff",
    },
    {
      date: "6/2025",
      type: "Conference",
      content:
        "I presented our paper about the politicization of AI discourse on multiple platforms in Denver #ICA25. I also served as the conference coordinator for ICA Preconference Digital Asia for the third year!",
      badgeColor: "success",
      typeColor: "#28a745",
    },
    {
      date: "3/2025",
      type: "Publication",
      content:
        "My co-authored paper about social media ecosystem got accepted in Journal of Quantitative Description: Digital Media",
      badgeColor: "primary",
      typeColor: "#007bff",
    },
    {
      date: "3/2025",
      type: "Publication",
      content:
        "Our method paper Content Engagement Capacity (CEC) was accepted for publication in Information, Communication, and Society!",
      badgeColor: "primary",
      typeColor: "#007bff",
    },
    {
      date: "2/2025",
      type: "Job",
      content:
        "I accepted the tenure-track Assistant Professor position in the Department of Communication and Media at Loyola University Maryland. So excited for the new chapter ahead!",
      badgeColor: "dark",
      typeColor: "#343a40",
    },
    {
      date: "1/2025",
      type: "Conference",
      content:
        "Two papers was accepted for presentation at the 2025 ICA Annual Conference in Denver, CO!",
      badgeColor: "success",
      typeColor: "#28a745",
    },
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img src={myImg} className="profile-pic" alt="Rui Wang" />
              {/* Social Media Links under photo */}
              <div className="profile-social-links mt-3">
                <SocialMedia />
              </div>
            </Col>
            <Col md={8} className="home-header">
              <div className="heading-type">
                <TypeWriter />
              </div>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi, I am <strong>Rui Wang</strong>!
              </h1>
              <p className="heading-description blockquote">
                I am an incoming Assistant Professor in the Department of
                Communication and Media at Loyola University Maryland. I am
                currently a Ph.D. candidate in Communication at the University
                at Buffalo. <strong>Welcome to my website!</strong>
              </p>

              <p className="heading-description blockquote">
                My research program is built on three core pillars: (1)
                examining the content, users, and effects of digital and news
                media through the lens of identity politics and political
                polarization; (2) exploring the social and psychological
                dimensions of emerging technologies, particularly public
                understanding and acceptance of AI; and (3) applying and
                developing novel computational methods for social science
                research.
              </p>

              <p className="heading-description blockquote">
                Methodologically, my research employs novel computational
                methods, including natural language processing (e.g., LDA,
                BERTopic), machine learning, network analysis, and quantitative
                approaches such as experimental design, surveys, causal
                inference, and structural equation modeling. I also conduct
                computational multimodal analysis, including visual clustering
                and leveraging LLMs to classify text and images.
              </p>

              <p className="heading-description blockquote">
                My work has been published in peer-reviewed journals such as{" "}
                <em>Communication Research</em>, <em>New Media & Society</em>,{" "}
                <em>Information, Communication & Society</em>,{" "}
                <em>Social Media + Society</em>, <em>Journalism</em>,{" "}
                <em>Social Science Computer Review</em>, and the{" "}
                <em>International Journal of Human-Computer Interaction</em>.
              </p>

              <p className="heading-description blockquote">
                I'm a proud mom of a sweet and beautiful four-year-old
                daughter—being her assistant is basically my second full-time
                job outside academia! These days, I'm helping her become a pro
                at prompt engineering by encouraging her to ask ChatGPT for
                bedtime stories every night. I also love running—most days,
                you'll find me jogging regularly. However, when deadlines get
                tight, I'll choose sleep over exercise any day. Music is a big
                part of my life: lately, I'm into Bruno Major, John Mayer,
                Billie Eilish, Glass Animals, and FINNEAS. I also play piano and
                Er-Hu!
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Google Scholar Metrics */}
      <Container fluid className="scholar-metrics">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <Card className="metrics-card text-center">
                <Card.Body>
                  <h3 className="metrics-title mb-4">
                    <strong>Academic Impact</strong>
                    <br />
                    <small className="text-muted">
                      Live data from Google Scholar
                    </small>
                  </h3>
                  <Row className="justify-content-center">
                    <Col md={3} className="metric-item">
                      <div className="metric-number">
                        {scholarMetrics.publications}
                      </div>
                      <div className="metric-label">Publications</div>
                    </Col>
                    <Col md={3} className="metric-item">
                      <div className="metric-number">
                        {scholarMetrics.citations}
                      </div>
                      <div className="metric-label">Citations</div>
                    </Col>
                    <Col md={3} className="metric-item">
                      <div className="metric-number">
                        {scholarMetrics.hIndex}
                      </div>
                      <div className="metric-label">h-index</div>
                    </Col>
                    <Col md={3} className="metric-item">
                      <div className="metric-number">
                        {scholarMetrics.i10Index}
                      </div>
                      <div className="metric-label">i10-index</div>
                    </Col>
                  </Row>
                  <div className="mt-3">
                    <a
                      href="https://scholar.google.com/citations?user=ZysUK0kAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      View Full Google Scholar Profile
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* News Section */}
      <Container fluid className="news-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 className="section-heading text-center mb-5">
                <strong className="purple">Latest News</strong>
              </h2>

              <div className="news-timeline">
                {newsData.map((news, index) => (
                  <div key={index} className="news-item">
                    <Row className="align-items-center">
                      <Col md={3} className="text-center mb-3 mb-md-0">
                        <div className="news-date">{news.date}</div>
                        <Badge
                          className="news-badge"
                          style={{
                            borderRadius: "20px",
                            padding: "8px 16px",
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            backgroundColor: news.typeColor,
                            color: "white",
                            border: "none",
                          }}
                        >
                          {news.type}
                        </Badge>
                      </Col>
                      <Col md={9}>
                        <p className="news-content">{news.content}</p>
                      </Col>
                    </Row>
                    {index < newsData.length - 1 && (
                      <hr className="news-divider" />
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
