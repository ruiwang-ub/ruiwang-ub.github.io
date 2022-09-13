import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projectDetails = this.props.data.projects.map(function (project, index) {
      return (
        <div key={index} className="row project-container align-center">
          <div className="row project-title ">
            {project.title}
          </div>
          <div className="row  project-content align-center">
            {project.content}
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row portfolio-title align-center">
            <h1>Projects</h1>
          </div>
          {projectDetails}
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
