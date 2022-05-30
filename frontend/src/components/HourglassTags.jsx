import React from "react";

export default function HourglassTags(props) {
  return (
    <div class="tags">
      {props.status && (
        <div class="tag is-rounded is-primary is-light">
          <span class="has-text-weight-bold">status</span>&nbsp;
          <span class="has-text-weight-normal">{props.status}</span>
        </div>
      )}

      {props.importance && (
        <div class="tag is-rounded is-info is-light">
          <span class="has-text-weight-bold">importance</span>&nbsp;
          <span class="has-text-weight-normal">{props.importance}</span>
        </div>
      )}

      {props.usefulness && (
        <div class="tag is-rounded is-success is-light">
          <span class="has-text-weight-bold">usefulness</span>&nbsp;
          <span class="has-text-weight-normal">{props.usefulness}</span>
        </div>
      )}
      {props.difficulty && (
        <div class="tag is-rounded is-danger is-light">
          <span class="has-text-weight-bold">difficulty</span>&nbsp;
          <span class="has-text-weight-normal">{props.difficulty}</span>
        </div>
      )}

      {props.created && (
        <div class="tag is-rounded is-light">
          <span class="has-text-weight-bold">created</span>&nbsp;
          <span class="has-text-weight-normal">{props.created}</span>
        </div>
      )}

      {props.public && (
        <div class="tag is-rounded is-link is-light">
          <span class="has-text-weight-bold">is</span>&nbsp;
          <span class="has-text-weight-normal">{props.public}</span>
        </div>
      )}
    </div>
  );
}
