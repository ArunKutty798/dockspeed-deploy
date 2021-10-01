import React from "react";

const Button = ({ children, variant, type, onClick, disabled, style }) => {
  const defaultStyle = {
    cursor: "pointer",
    ...style,
  };

  const getClassName = () => {
    switch (variant) {
      case "secondary":
        return "btn_secondary";
      default:
        return "btn_primary";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getClassName()}
      style={defaultStyle}
    >
      {children}
    </button>
  );
};

export default Button;
