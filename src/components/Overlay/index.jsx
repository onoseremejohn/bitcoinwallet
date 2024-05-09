import "./overlay.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";
const Overlay = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (isOpen && event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);
  return (
    <>
      {isOpen ? (
        <div className="overlay__background" onClick={onClose}>
          {children}
        </div>
      ) : null}
    </>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Overlay;
