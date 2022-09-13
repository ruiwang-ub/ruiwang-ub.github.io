import React, { Component } from "react";
import Fade from "react-reveal";

const RESEARCH_INTEREST = "Media Effects | Misinformation | Persuasion | Political Communication | Journalism | Social Media | Human-Machine Communication | Technology | Computational Social Science | Experiment and Survey | Topic Modeling";
const SELF_INTRO = `
My name is Rui Wang, I am currently a Ph.D. student in Communication at the University at Buffalo, the State University of New York. I earned my master's degree in Communication from Rutgers University-New Brunswick. Before starting my doctoral study at UB, I worked as a professor in School of Journalism and Communication at Anhui Normal University in China.
<br/><br/>My educational background is always along the line of mass communication and journalism, which determines my research interests to some degree. As an early-stage researcher, I am always open to new knowledge and interesting research areas. But I have some specific research interests for now. Broadly, I study media effects, political communication, political polarization, media trust, and human-machine communication. Specifically, my ongoing projects are about 1) how AI as a communicator may ameliorate the declining news trust and debunk misinformation; 2) social bots activity in online environment; 3) information flow in the hybrid media system; 4) the perception AI in different roles in the communication process. In a nutshell, my ambition is to combine emerging technologies (e.g. AI), journalism, and political communication to propel and develop communication research.
<br/><br/>The primary research methods I used are computational methods and experimental designs. Some of my studies employed the supervised and unsupervised machine learning approach to analyze social media contents, combined with social network analysis and community detection to examine information flow and important actors in this process. Some of my studies used experiments to test media effects and perceptions. Most of my data analysis work is accomplished by R programming. I also had experience in SPSS, SQL, and Python.   
<br/><br/>I love teamwork. For scientific study, collective intelligence and endeavors are always the foremost credos. I am working closely with a group of great and smart scholars in the world. We have presented and published many interesting studies collaboratively. Please check <a href="https://ophiryotam.com/lab.html" target="_blank"> Meme lab</a> and <a target="_blank" href="https://cemlab.github.io/">CEM lab</a>
<br/><br/>As for my personal life, I am a huge fan of music.I love singing and playing instruments.I am an Er - hu and keyboard player.Since I became a mom in 2020, my life centers on my little cute girl a lot.Her smile is my biggest motivation.Apart from that, I love workout, photography, traveling, and cooking. 

`;
class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const { email, twitter } = this.props.data;

    const RenderContactDetails = () => {
      return (
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              <span>Email: {email}</span>
              <br />
              <span>Twitter: {twitter}</span>
            </p>
          </div>
        </div>
      )
    }

    const RenderAboutMe = () => {
      return (
        <>
          <h2>About Me</h2>
          <p dangerouslySetInnerHTML={{ __html: SELF_INTRO }} />
        </>
      )
    }
    return (
      <section id="about" >
        <Fade duration={1000}>
          <div className="row">
            <div className=" columns main-col">
              <RenderAboutMe />
              <RenderContactDetails />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
