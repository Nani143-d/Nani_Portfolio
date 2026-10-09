import {
  Award,
  ArrowUpRight
} from "lucide-react";

import { motion } from "framer-motion";

const certifications = [
  {
    title:
      "Foundations of Python",

    organization:
      "Google Career Certifications (Cursa)"
  },

  {
    title:
      "Machine Learning & Python",

    organization:
      "Udemy"
  },

  {
    title:
      "Data Analytics Foundations",

    organization:
      "Infosys Springboard"
  }
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
    >

      <div className="section-number">
        06 / CERTIFICATIONS
      </div>


      <h2 className="large-heading">
        Learning never <span>stops.</span>
      </h2>


      <div className="certifications-grid">

        {certifications.map(
          (cert, index) => (

            <motion.article
              key={cert.title}
              className="certification-card"

              initial={{
                opacity: 0,
                y: 25
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

              <div className="certification-icon">
                <Award />
              </div>


              <div>

                <h3>
                  {cert.title}
                </h3>

                <p>
                  {cert.organization}
                </p>

              </div>


              <ArrowUpRight />

            </motion.article>

          )
        )}

      </div>

    </section>
  );
}

export default Certifications;