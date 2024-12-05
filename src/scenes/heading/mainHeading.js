import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const MainHeading = ({ children, style }) => {
  const theme = useTheme();

  return (
    <div
      className="text-4xl md:text-6xl font-bold"
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: theme.typography.h4.fontWeight,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

MainHeading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

MainHeading.defaultProps = {
  style: { color: '#000' },
};

export default MainHeading;
