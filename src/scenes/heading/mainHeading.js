import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const MainHeading = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily: theme.typography.fontFamily,
        fontWeight: style.fontWeight,
        color: style.color || "#000",
        letterSpacing: "1px",
        fontSize: style.fontSize,
        textAlign:style.textAlign,
        marginTop:style.marginTop
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
    textAlign: PropTypes.string,
    marginTop:PropTypes.string,
    fontWeight:PropTypes.string
  }),
};

MainHeading.defaultProps = {
  style: { color: "#000" }, // Default color is black
};

export default MainHeading;
