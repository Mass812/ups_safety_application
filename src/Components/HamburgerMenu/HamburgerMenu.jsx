import React from "react";
import "./ToggleDrawerButton.scss";

const ToggleDrawerButton = props => {
  return (
    <button className="toggle-button" onClick={props.showHide}>
      <div className="toggle_button_line-1" />
      <div className="toggle_button_line-1" />
      <div className="toggle_button_line-1" />
    </button>
  );
};

export default ToggleDrawerButton;