import {
  Menu,
  X,
  Download
} from "lucide-react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"]
];

function Navbar({
  menuOpen,
  setMenuOpen
}) {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <button
        className="brand"
        onClick={() =>
          scrollToSection("home")
        }
      >
        <span className="brand-logo">
          KN
        </span>

        <span className="brand-name">
          KANNA NANI
        </span>
      </button>


      <nav
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        {navItems.map(
          ([name, id]) => (
            <button
              key={id}
              onClick={() =>
                scrollToSection(id)
              }
            >
              {name}
            </button>
          )
        )}


        <a
          href="/resume.pdf"
          download
          className="resume-button"
        >
          <Download size={15} />

          Resume
        </a>

      </nav>


      <button
        className="mobile-menu"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <X />
        ) : (
          <Menu />
        )}
      </button>

    </header>
  );
}

export default Navbar;