import {
  ArrowUpRight
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="section"
    >

      <div className="section-number">
        01 / ABOUT ME
      </div>


      <div className="about-grid">

        <div className="about-image-box">

          <img
            src="/images/about.jpg"
            alt="About Kanna Nani"
          />

        </div>


        <div className="about-content">

          <h2>
            A developer who enjoys
            building <span>useful things.</span>
          </h2>


          <p>
            Hi, I'm Kanna Nani, a Computer
            Science and Engineering graduate
            interested in Python full-stack
            development, data analysis and
            machine learning.
          </p>

<div className="terminal">
  <div className="terminal-top">
    <span className="dot red"></span>
    <span className="dot yellow"></span>
    <span className="dot green"></span>
  </div>

            <pre>
{`$ whoami
Python Full Stack Developer

$ focus
Web Development
Data Analytics
Gen AI

$ status
Open to opportunities ✓`}
            </pre>

          </div>


          <p>
            I enjoy taking an idea, breaking it
            into smaller problems and turning it
            into a working application or useful
            data-driven solution.
          </p>


          <a
            href="#contact"
            className="text-link"
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;