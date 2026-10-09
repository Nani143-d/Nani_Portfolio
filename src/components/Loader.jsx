import { motion } from "framer-motion";

function Loader({ progress }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader-logo">
        KN
      </div>

      <h3>KANNA NANI</h3>

      <div className="loader-bar">
        <span
          style={{
            width: `${progress}%`
          }}
        />
      </div>

      <small>
        LOADING {progress}%
      </small>
    </motion.div>
  );
}

export default Loader;