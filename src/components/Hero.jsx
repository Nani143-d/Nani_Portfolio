import {
  ArrowUpRight,
  Download,
  Code2,
  Database,
  BrainCircuit
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="section hero"
    >

      <div className="hero-content">

        <div className="available">
          <span />
          Available for opportunities
        </div>

        <div className="eyebrow">
          HELLO, I'M
        </div>

        <h1>
          Kanna <span>Nani.</span>
        </h1>

        <div className="hero-role">
          <strong>
            Python Full Stack Developer
          </strong>

          <i>×</i>

          <strong>
            Data Analyst
          </strong>
        </div>

        <p className="hero-description">
          I build modern web applications,
          analyze real-world data and explore
          machine learning solutions to solve
          practical problems.
        </p>


        <div className="hero-buttons">

          <a
            href="#projects"
            className="button primary"
          >
            View My Projects
            <ArrowUpRight size={17} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="button secondary"
          >
            <Download size={16} />
            Download Resume
          </a>

        </div>


        <div className="hero-stats">

          <div>
            <strong>04</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>09+</strong>
            <span>Core Skills</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Internship</span>
          </div>

        </div>

      </div>


      <div className="hero-image-area">

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />


        <div className="profile-container">

          <img
            src="/images/profile.jpg"
            alt="Kanna Nani"
          />

        </div>


        <div className="floating-card card-python">
          <Code2 />

          <div>
            <strong>Python</strong>
            <small>Full Stack</small>
          </div>
        </div>


        <div className="floating-card card-data">
          <Database />

          <div>
            <strong>Data</strong>
            <small>Analytics</small>
          </div>
        </div>


        <div className="floating-card card-ai">
          <BrainCircuit />

          <div>
            <strong>AI</strong>
            <small>Gen AI</small>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;