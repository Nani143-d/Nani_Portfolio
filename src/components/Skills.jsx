import { motion } from "framer-motion";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiJavascript,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiPostman,
  SiJira,
} from "react-icons/si";

import {
  Code2,
  Globe,
  Database,
  BarChart3,
  Wrench,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

/* =========================================
   SKILL CATEGORIES
========================================= */

const skillCategories = [
  {
    title: "Programming",
    description: "Core programming languages and web technologies.",
    icon: Code2,
    skills: [
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "SQL",
        icon: Database,
        color: "#00AEEF",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
    ],
  },

  {
    title: "Frameworks & Libraries",
    description:
      "Web frameworks and libraries for faster and scalable development.",
    icon: Globe,
    skills: [
      {
        name: "Django",
        icon: SiDjango,
        color: "#44B78B",
      },

      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "#7952B3",
      },
    ],
  },

  {
    title: "Data & Analytics",
    description:
      "Data processing, analysis, and database management tools.",
    icon: Database,
    skills: [
      {
        name: "Pandas",
        icon: SiPandas,
        color: "#FFFFFF",
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "#4DABCF",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "Excel",
        icon: FaMicrosoft,
        color: "#217346",
      },
      {
  name: "Power BI",
  icon: BarChart3,
  color: "#F2C811",
},
    ],
  },

  {
    title: "Tools & Others",
    description:
      "Development tools, version control, and collaboration platforms.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
       name: "VS Code",
       icon: Code2,
       color: "#007ACC",
      },
      {
        name: "Unit Testing",
        icon: Wrench,
        color: "#3B82F6",
      },
    ],
  },
];

/* =========================================
   SKILLS COMPONENT
========================================= */

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* HEADER */}

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="skills-label-row">
            <span className="section-label">02 / SKILLS</span>

            <span className="skills-line"></span>
          </div>

          <h2>
            My Technical
            <br />
            <span>Toolkit.</span>
          </h2>

          <p>
            Technologies and tools I use across development,
            data analytics, and AI.
          </p>
        </motion.div>

        {/* SKILL CARDS */}

        <div className="skills-toolkit-grid">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                className="toolkit-card"
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                {/* CARD HEADER */}

                <div className="toolkit-header">
                  <div className="toolkit-category-icon">
                    <CategoryIcon
                      size={35}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="toolkit-heading">
                    <h3>{category.title}</h3>

                    <p>{category.description}</p>
                  </div>

                  <ArrowRight
                    className="toolkit-arrow"
                    size={24}
                  />
                </div>

                {/* TECHNOLOGIES */}

                <div className="technology-list">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        className="technology-pill"
                        key={skill.name}
                      >
                        <SkillIcon
                          className="technology-icon"
                          size={20}
                          style={{ color: skill.color }}
                        />

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER QUOTE */}

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GraduationCap size={46} />

          <span className="footer-line"></span>

          <p>
            “Better skills&nbsp;&nbsp; / &nbsp;&nbsp;Bigger dreams”
          </p>

          <span className="footer-line"></span>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;