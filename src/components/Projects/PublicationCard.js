import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { FaUser, FaLink, FaFilePdf, FaGithub } from "react-icons/fa";
import "./PublicationCard.css";

const CitationBadge = ({ count }) => {
  const getColor = (c) => {
    if (c >= 50) return `conic-gradient(#d9534f ${c * 3.6}deg, #f0f0f0 0deg)`;
    if (c >= 20) return `conic-gradient(#f0ad4e ${c * 3.6}deg, #f0f0f0 0deg)`;
    if (c >= 10) return `conic-gradient(#5bc0de ${c * 3.6}deg, #f0f0f0 0deg)`;
    return `conic-gradient(#5cb85c ${c * 3.6}deg, #f0f0f0 0deg)`;
  };

  return (
    <div className="citation-badge-container">
      <div className="citation-badge" style={{ background: getColor(count) }}>
        <div className="citation-count">{count}</div>
      </div>
    </div>
  );
};

const PublicationCard = ({ pub }) => {
  return (
    <Row className="publication-card">
      <Col md={1} className="pub-date-col">
        <div className="pub-date">{pub.year}</div>
      </Col>
      <Col md={9} className="pub-details-col">
        <h5 className="pub-title">{pub.title}</h5>
        <div className="pub-authors">
          {pub.authors.map((author, index) => (
            <span
              key={index}
              className={author.includes("Wang, R.") ? "author-bold" : ""}
            >
              <FaUser className="author-icon" /> {author}
              {index < pub.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="pub-venue">
          <em>{pub.venue}</em>
        </div>
        <div className="pub-links">
          {pub.links.doi && (
            <a href={pub.links.doi} target="_blank" rel="noopener noreferrer">
              <FaLink /> DOI
            </a>
          )}
          {pub.links.pdf && (
            <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer">
              <FaFilePdf /> PDF
            </a>
          )}
          {pub.links.github && (
            <a
              href={pub.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          )}
        </div>
        <div className="pub-tags">
          {pub.tags.map((tag) => (
            <Badge bg="secondary" key={tag}>
              {tag}
            </Badge>
          ))}
          <Badge bg="info">{pub.type}</Badge>
        </div>
      </Col>
      <Col md={2} className="pub-citation-col">
        <CitationBadge count={pub.citations} />
      </Col>
    </Row>
  );
};

export default PublicationCard;
