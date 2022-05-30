import React from "react";

export default function Input(props) {
  const iconClass = `icon ${props.icon_name}`;
  const inputClass = `input ${props.is_color}`;
  return (
    <div class="field">
      <div class="control has-icons-left effect-1">
        <input
          className={inputClass}
          type="text"
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
        />
        <span className="focus-border"></span>
        <span className="icon is-small is-left">
          <i className={iconClass}></i>
        </span>
      </div>
      <p class="help is-success">{props.help_text}</p>
    </div>
  );
}
