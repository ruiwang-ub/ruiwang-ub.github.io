import React, { Component } from "react";
import Slide from "react-reveal";

const boldText = (content, target) => {
  return content.replace(target, `<b>${target}</b>`);
}
class Resume extends Component {
  render() {
    if (!this.props.data) return null;
    console.log("this.props.data.resumedownload", this.props.data)
    const resumeDownload = this.props.data.resumedownload;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const conference = this.props.data.conference.map(function (conference, index) {
      return (
        <div key={index}>
          <p className="info" dangerouslySetInnerHTML={{ __html: boldText(conference, 'Wang, R') }}>

          </p>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Lab</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Conference Presentations</span>
              </h1>
            </div>
            <div className="nine columns main-col">{conference}</div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row align-center download">
            <p>
              <a href={resumeDownload} className="button" target="_blank">
                <i className="fa fa-download"></i>Download CV
              </a>
            </p>
            <span>
              <span></span>
            </span>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
