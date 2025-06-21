import React, { useState, useEffect } from "react";
import "./Preloader.css";

function Preloader(props) {
  const [currentText, setCurrentText] = useState(0);
  const [dots, setDots] = useState("");

  const researchAreas = [
    "Analyzing Social Media Networks",
    "Processing Political Discourse",
    "Training AI Models",
    "Computing Network Metrics",
    "Analyzing Digital Media Effects",
    "Processing Computational Methods"
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % researchAreas.length);
    }, 2000);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="preloader-container">
        {/* Animated Network Nodes */}
        <div className="network-animation">
          <div className="node node-1"></div>
          <div className="node node-2"></div>
          <div className="node node-3"></div>
          <div className="node node-4"></div>
          <div className="node node-5"></div>
          <div className="node node-6"></div>
          <div className="node node-7"></div>
          <div className="node node-8"></div>
          
          {/* Connection Lines */}
          <div className="connection line-1"></div>
          <div className="connection line-2"></div>
          <div className="connection line-3"></div>
          <div className="connection line-4"></div>
          <div className="connection line-5"></div>
          <div className="connection line-6"></div>
        </div>

        {/* Main Content */}
        <div className="preloader-content">
          <div className="researcher-avatar">
            <div className="avatar-circle">
              <div className="avatar-inner">RW</div>
            </div>
          </div>
          
          <h2 className="researcher-name">Rui Wang</h2>
          <p className="researcher-title">Computational Social Scientist</p>
          
          <div className="loading-text">
            <span className="current-task">{researchAreas[currentText]}</span>
            <span className="loading-dots">{dots}</span>
          </div>

          {/* Research Keywords */}
          <div className="research-keywords">
            <span className="keyword">Political Communication</span>
            <span className="keyword">Social Media Analysis</span>
            <span className="keyword">AI & Digital Media</span>
            <span className="keyword">Network Science</span>
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">Loading Research Portfolio</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
