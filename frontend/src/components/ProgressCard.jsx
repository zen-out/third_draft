import React from "react";

export default function ProgressCard(props) {
  return (
    <div>
      <section>
        <div class="tile">
          <div class="box">
            <div class="level">
              <div class="level-left-item">
                <p class="title is-2 has-text-weight-bold">
                  {props.percentage}
                </p>
              </div>
              <div class="level-right-item">
                <p class="subtitle is-6 has-text-weight-light">{props.end}</p>
              </div>
            </div>
            <div class="level">
              <div class="level-left-item">
                <p class="subtitle is-6">{props.table_name}</p>
              </div>
            </div>
            <div class="level">
              <div class="level-item">
                <div class="tag is-rounded is-light">
                  <span class="has-text-weight-bold">created</span>&nbsp;
                  <span class="has-text-weight-normal">{props.start}</span>
                </div>
                <div class="tag is-rounded is-link is-light">
                  <span class="has-text-weight-bold">end</span>&nbsp;
                  <span class="has-text-weight-normal">{props.end}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
