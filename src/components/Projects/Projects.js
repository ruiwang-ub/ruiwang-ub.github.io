import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import PublicationCard from "./PublicationCard"; // Updated import path
import { PUBLICATIONS } from "../../Constants";

const allTopics = [...new Set(PUBLICATIONS.flatMap(p => p.tags))];
const allTypes = [...new Set(PUBLICATIONS.map(p => p.type))];

function Publications() {
  const [activeTopics, setActiveTopics] = useState([]);
  const [activeTypes, setActiveTypes] = useState([]);

  const toggleTopic = (topic) => {
    setActiveTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const toggleType = (type) => {
    setActiveTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filteredPublications = PUBLICATIONS.filter(pub => {
    const topicMatch = activeTopics.length === 0 || pub.tags.some(tag => activeTopics.includes(tag));
    const typeMatch = activeTypes.length === 0 || activeTypes.includes(pub.type);
    return topicMatch && typeMatch;
  });

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Publications</strong>
        </h1>
        <p>
          See my full list of publications on <a href="https://scholar.google.com/citations?user=ZysUK0kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
        </p>

        <div className="filter-section">
          <div className="filter-group">
            <span className="filter-label">Topic:</span>
            {allTopics.map(topic => 
              <Button 
                variant={activeTopics.includes(topic) ? "primary" : "outline-primary"} 
                key={topic} 
                className="filter-button"
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </Button>
            )}
          </div>
          {/* <div className="filter-group">
            <span className="filter-label">Type:</span>
            {allTypes.map(type => 
              <Button 
                variant={activeTypes.includes(type) ? "secondary" : "outline-secondary"} 
                key={type} 
                className="filter-button"
                onClick={() => toggleType(type)}
              >
                {type}
              </Button>
            )}
          </div> */}
        </div>

        <div>
          {filteredPublications.map((pub, index) => (
            <PublicationCard pub={pub} key={index} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Publications;
