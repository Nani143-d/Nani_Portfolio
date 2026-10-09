import {
  BriefcaseBusiness,
  CheckCircle2
} from "lucide-react";

import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="section"
    >

      <div className="section-number">
        03 / EXPERIENCE
      </div>


      <h2 className="large-heading">
        Where I started <span>building.</span>
      </h2>


      <motion.article
        className="experience-card"

        initial={{
          opacity: 0,
          y: 30
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        viewport={{
          once: true
        }}
      >

        <div className="experience-icon">
          <BriefcaseBusiness />
        </div>


        <div>

          <div className="experience-top">

            <span>
              JUL 2025 — SEP 2025
            </span>

            <b>
              INTERNSHIP
            </b>

          </div>


          <h3>
            Python Programming Intern
          </h3>

          <h4>
            Codex Techno
          </h4>


          <ul>

            <li>
              <CheckCircle2 />
              Completed an AICTE-approved
              Python Programming internship.
            </li>

            <li>
              <CheckCircle2 />
              Worked with variables, loops,
              functions, OOP and file handling.
            </li>

            <li>
              <CheckCircle2 />
              Applied debugging techniques
              and developed practical Python
              assignments.
            </li>

          </ul>

        </div>

      </motion.article>

    </section>
  );
}

export default Experience;