import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SectionHeading = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: theme.typography.fontFamily,
        fontWeight: style.fontWeight,
        color: style.color || "#000",
        fontSize: "18px",
        letterSpacing: "1px",
        marginTop: 30,
        marginBottom: style.marginBottom,
        textAlign:style.textAlign,
        marginLeft:5
      }}
    >
      {children}
    </div>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    marginBottom: PropTypes.string,
    fontWeight:PropTypes.string,
    textAlign:PropTypes.string
  }),
};

SectionHeading.defaultProps = {
  style: { color: "#000" }, // Default color is black
};

export default SectionHeading;
