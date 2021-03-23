import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <button style={{ background: color }} className="btn" onClick={onClick} >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
