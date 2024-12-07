import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const CardHeading = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: theme.typography.fontFamily,
        color: style.color || "#000",
        fontSize: style.fontSize,
        fontWeight:'bold'
      }}
    >
      {children}
    </div>
  );
};

CardHeading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.string,
  }),
};

CardHeading.defaultProps = {
  style: { color: "#000" }, // Default color is black
};

export default CardHeading;




