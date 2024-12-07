import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const MainHeading = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: theme.typography.fontFamily,
        fontWeight: "Bold",
        color: style.color || "#000",
        letterSpacing: "1px",
        fontSize: style.fontSize,
        textAlign:style.textAlign
      }}
    >
      {children}
    </div>
  );
};

MainHeading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.string,
    textAlign: PropTypes.string
  }),
};

MainHeading.defaultProps = {
  style: { color: "#000" }, // Default color is black
};

export default MainHeading;
