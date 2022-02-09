import React from "react";

import "./button.styles.scss";

const CustomButton = ({ label, handleChange, type, value }) => {
  return <button onClick={() => handleChange(type, value)}>{label}</button>;
};

export default CustomButton;
