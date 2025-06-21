import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Communication Researcher",
          "Computational Social Scientist",
          "AI & Emerging Technologies Scholar",
          "Political Communication Expert",
          "Digital Media Analyst",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
