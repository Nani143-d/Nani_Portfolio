import {
  ArrowUpRight,
  Github,
  CheckCircle2
} from "lucide-react";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",

    category: "AI • FULL STACK",

    title:
      "AI Smart Agriculture Platform",

    image:
      "/images/agriculture-project.jpg",

    description:
      "An AI-powered agriculture platform combining machine learning, computer vision and agricultural data to support crop health and farming decisions.",

    points: [
      "Crop disease analysis using OpenCV and CNN with TensorFlow/Keras.",
      "Integrated NumPy, Pandas and Scikit-learn for agricultural data processing.",
      "Fertilizer recommendations, weather insights and expected crop yield analysis."
    ],

    technologies: [
      "Python",
      "Django",
      "Flask",
      "JavaScript",
      "Bootstrap",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "MySQL"
    ]
  },

  {
    number: "02",

    category: "DATA ANALYTICS",

    title:
      "IPL Match & Player Performance Analysis",

    image:
      "/images/ipl-project.jpg",

    description:
      "A data analytics project analyzing historical IPL data to identify player, team, venue and season performance trends.",

    points: [
      "Analyzed historical IPL datasets covering 900+ matches and millions of ball-by-ball records.",
      "Performed data cleaning, preprocessing and exploratory data analysis.",
      "Created Power BI dashboards for team wins, player statistics, venue performance and season trends."
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI"
    ]
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >

      <div className="section-number">
        04 / PROJECTS
      </div>


      <div className="section-title-row">

        <div>

          <h2>
            Selected <span>Work.</span>
          </h2>

          <p>
            Projects from my resume.
          </p>

        </div>

      </div>


      <div className="projects-list">

        {projects.map(
          (project, index) => (

            <motion.article
              key={project.title}
              className="project-card"

              initial={{
                opacity: 0,
                y: 35
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                delay: index * 0.1
              }}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-number">
                  {project.number}
                </div>

              </div>


              <div className="project-content">

                <div className="project-meta">
                  <span>
                    {project.category}
                  </span>
                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <ul>

                  {project.points.map(
                    (point) => (

                      <li key={point}>

                        <CheckCircle2 />

                        {point}

                      </li>

                    )
                  )}

                </ul>


                <div className="technology-list">

                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}

                </div>


                <div className="project-buttons">

                  <a
                    href="#contact"
                    className="button primary"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </a>


                  <a
                    href="https://github.com/Nani143-d"
                    target="_blank"
                    rel="noreferrer"
                    className="button secondary"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.article>

          )
        )}

      </div>

    </section>
  );
}

export default Projects;