import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, secondary, onClickFnc, big }) {
  return (
    <button
      type="button"
      className={`btn ${secondary ? "secondary" : "primary"} ${
        big ? "big" : "normal"
      }`}
      onClick={onClickFnc}
    >
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  secondary: PropTypes.bool,
  onClickFnc: PropTypes.func,
  big: PropTypes.bool,
};

Button.defaultProps = {
  label: "Button",
  secondary: false,
  onClickFnc: (e) => e,
  big: false,
};
