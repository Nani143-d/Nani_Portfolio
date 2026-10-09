import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-number">07 / CONTACT</div>

      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div>
          <h2 className="large-heading">
            Let's build something
            <span> useful.</span>
          </h2>

          <p className="section-description">
            Have an opportunity, project,
            or just want to connect?
            Send me a message.
          </p>

          <a
            href="mailto:kannanani@gmail.com"
            className="button primary"
          >
            Send Email
            <Send size={16} />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-details">
          {/* EMAIL */}
          <a href="mailto:kannanani@gmail.com">
            <Mail />

            <span>
              <small>Email</small>
              kannanani@gmail.com
            </span>

            <ArrowUpRight />
          </a>

          {/* PHONE */}
          <a href="tel:+918639638185">
            <Phone />

            <span>
              <small>Phone</small>
              +91 8639638185
            </span>

            <ArrowUpRight />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Nani143-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />

            <span>
              <small>GitHub</small>
              Nani143-d
            </span>

            <ArrowUpRight />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kanna-nani-004463364/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />

            <span>
              <small>LinkedIn</small>
              Kanna Nani
            </span>

            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;