import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  addIcons1,
  addIcons2,
  inputDockspeedIcon,
  onChange,
  readOnly,
}) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {addIcons1 && <img src={addIcons1} alt="icon1" className="input_img_1" />}
      {addIcons2 && <img src={addIcons2} alt="icon2" className="input_img_2" />}
      {inputDockspeedIcon && <img src={inputDockspeedIcon} alt="inputDockspeedIcon" className="input_inputDockspeedIcon" />}
    </div>
  );
};

export default Input;
