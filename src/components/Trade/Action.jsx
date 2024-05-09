import GradientCircle from "../GradientCircle/GradientCircle";
import PropTypes from "prop-types";

const Action = ({ text, icon, colors }) => {
  return (
    <button type="button" className="action">
      <GradientCircle colors={colors} icon={icon} />
      <p>{text}</p>
    </button>
  );
};

Action.propTypes = {
  text: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
};

export default Action;
