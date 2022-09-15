import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { SiGooglescholar, SiResearchgate } from 'react-icons/si';

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const googleScholar = this.props.data.googleScholar;
    const researchgate = this.props.data.researchgate;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const profilepic = "images/" + this.props.data.image;

    return (
      <header id="home">

        <ParticlesBg type="square" bg={true} num={20}/>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll hover" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll hover" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll hover" href="#resume">
                CV
              </a>
            </li>

            <li>
              <a className="smoothscroll hover" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll hover" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <div className="align-center two" style={{marginBottom: '20px'}}>
                <img
                  className="profile-pic"
                  src={profilepic}
                  alt="Wang Rui's image"
                  style={{borderRadius: '20px'}}
                />
              </div>
            </Fade>
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              {description.split('.').map((str, index) => (<h3 key={str + index}>{str}.</h3>))}
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social row phone-display" >
                <a href={googleScholar} className=" button btn googleScholar-btn hover-effect1">
                  <i><SiGooglescholar /></i>Google Scholor
                </a>
                <a href={researchgate} className=" button btn researchgate-btn hover-effect1">
                  <i><SiResearchgate /></i>ResearchGate
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;