import React, { Component } from "react";
import Fade from "react-reveal";

const RESEARCH_INTEREST = "Media Effects | Misinformation | Persuasion | Political Communication | Journalism | Social Media | Human-Machine Communication | Technology | Computational Social Science | Experiment and Survey | Topic Modeling";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    let researchInterest = RESEARCH_INTEREST.split(" | ");
    const renderContactDetails = () => {
      return (
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              <span>
                {street}
                <br />
                {city} {state}, {zip}
              </span>
              <br />
              <span>{email}</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={resumeDownload} className="button" target="_blank">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      )
    }

    const renderResearchInterest = () => {

      return (
        <>
          <h2>Research and Methodological Interests</h2>
          <div className="row row-flexable">
            <div className="columns contact-details">
              {researchInterest.slice(0, Math.ceil(researchInterest.length / 2)).map(item => {
                return (<p key={item}>{item}</p>)
              })}
            </div>
            <div className="columns contact-details">
              {researchInterest.slice(Math.ceil(researchInterest.length / 2)).map(item => {
                return (<p key={item}>{item}</p>)
              })}
            </div>
          </div>

        </>
      )
    }
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              {renderResearchInterest()};
              {renderContactDetails()}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
