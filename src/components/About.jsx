import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
       I’m a software engineer passionate about turning ideas into impactful digital products. Currently, I focus on building projects that solve real-world problems and sharpen my technical skills, while also working as a freelance developer where I help clients bring their visions to life. I am aslo persuing my bacholar of computer science at the
        <a href="https://tanta.edu.eg/en/"> University of Tanta</a>.
      </p>
    );
    const two = (
      <p>
        Outside of programming, I’m deeply interested in personal growth — I read extensively, practice languages like Arabic and German, and enjoy following new trends in technology. I also play chess competitively and am always eager to challenge myself with new goals.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "PHP",
      "Javascript ES6+",
      "C++"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Mohammed Ali" src={"/assets/me2.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
