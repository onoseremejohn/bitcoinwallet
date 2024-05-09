import "./gradientCircle.scss";
import PropTypes from "prop-types";
const GradientCircle = ({ colors = [], icon }) => {
  let gradientStyle = {};

  if (colors.length === 1) {
    gradientStyle.backgroundColor = colors[0];
  } else if (colors.length === 0) {
    gradientStyle.backgroundColor = "red"; // Default to red if no colors provided
  } else if (colors.length >= 2) {
    gradientStyle.background = `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;
  }

  return (
    <div className="gradient-circle" style={gradientStyle}>
      {icon}
    </div>
  );
};

GradientCircle.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.node,
};

export default GradientCircle;
