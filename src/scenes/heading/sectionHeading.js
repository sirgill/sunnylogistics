import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SectionHeading = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      className="text-3xl font-bold"
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        fontWeight: theme.typography.h2.fontWeight,
        fontSize: "20px",
        marginTop: 30,
        color:'#FFFFFF'
      }}
    >
      {children}
    </div>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
