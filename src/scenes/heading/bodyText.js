import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const BodyText = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: theme.typography.fontFamily,
        color: style.color || "#000",
        fontSize: style.fontSize,
        marginTop: style.marginTop,
        textAlign: style.textAlign,
      }}
    >
      {children}
    </div>
  );
};

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.string,
    marginTop: PropTypes.string,
    textAlign: PropTypes.string,
  }),
};

BodyText.defaultProps = {
  style: { color: "#000" }, // Default color is black
};

export default BodyText;
