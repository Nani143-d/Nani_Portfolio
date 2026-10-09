function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <span className="brand-logo">
          KN
        </span>

        KANNA NANI

      </div>


      <p>
        © 2026 Kanna Nani.
        All rights reserved.
      </p>


      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      >
        Back to top ↑
      </button>

    </footer>
  );
}

export default Footer;