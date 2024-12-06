import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const MainHeading = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontFamily:theme.typography.fontFamily,
        fontWeight: 'Bold',
        color: style.color || '#000',
        fontSize:'35px',
        letterSpacing:'1px'
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
  }),
};

MainHeading.defaultProps = {
  style: { color: '#000' }, // Default color is black
};

export default MainHeading;
