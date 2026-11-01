import {
  GraduationCap,
  CalendarDays
} from "lucide-react";

import { motion } from "framer-motion";

const education = [
  {
    type: "B.TECH",

    title:
      "B.Tech in Computer Science & Engineering",

    college:
      "Dhanalakshmi Srinivasan University, Tamil Nadu",

    date:
      "Oct 2022 — May 2026",

    percentage: "66%"
  },

  {
    type: "INTERMEDIATE",

    title:
      "Intermediate (MPC)",

    college:
      "Sri Chaitanya Junior College, Ongole",

    date:
      "Jul 2020 — Mar 2022",

    percentage: "63%"
  },

  {
    type: "SSC",

    title:
      "SSC",

    college:
      "Sri Ganga High School, East Gangavaram",

    date:
      "Jun 2019 — Mar 2020",

    percentage: "75%"
  }
];

function Education() {
  return (
    <section
      id="education"
      className="section"
    >

      <div className="section-number">
        05 / EDUCATION
      </div>


      <div className="education-layout">

        <div>

          <h2 className="large-heading">
            Academic <span>Journey.</span>
          </h2>


          <p className="section-description">
            My education built the foundation
            for my curiosity, problem-solving
            skills and passion for technology.
          </p>


          <div className="university-image">

          <img src={`${import.meta.env.BASE_URL}images/education.jpg`} alt="Dhanalakshmi Srinivasan University" />

            <div className="university-caption">
              Dhanalakshmi Srinivasan University
            </div>

          </div>


          <div className="education-motto">
            LEARN / GROW / BUILD
          </div>

        </div>


        <div className="education-list">

          {education.map(
            (item, index) => (

              <motion.article
                key={item.type}
                className="education-card"

                initial={{
                  opacity: 0,
                  x: 30
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  delay: index * 0.1
                }}
              >

                <div className="education-icon">
                  <GraduationCap />
                </div>


                <div>

                  <span className="education-type">
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.college}
                  </p>

                  <small>
                    <CalendarDays size={14} />
                    {item.date}
                  </small>

                </div>


                <strong className="percentage">
                  {item.percentage}
                </strong>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Education;