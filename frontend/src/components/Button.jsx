import React from "react";

function Button(props) {
  const buttonClass = `button shadow mb-1 is-inverted ${props.is_color} effect-2`;
  return <button className={buttonClass}>{props.helpText}</button>;
}

export default Button;
